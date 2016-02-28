WorkSessionPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		let returnData = {
			user: Meteor.user(),
			questions: Questions.find(this.props.questionsId).fetch(),
		}
		if(returnData.questions && returnData.questions.length > 0 && returnData.questions[0].exhaustedUsers) {
			returnData.students = Students.find({userId: {$nin: returnData.questions[0].exhaustedUsers}}).fetch()
		}
		if(returnData.questions && returnData.questions.length > 0) {
			returnData.mentors = Meteor.users.find(returnData.questions[0].current_mentor).fetch()
		}
		return returnData
	},
	_onChatSubmit(e) {
		e.preventDefault()
		const chatMessage = e.target[0].value.trim()
		if(this.data.questions && this.data.questions.length > 0) {
			Questions.update(this.data.questions[0]._id, {$push: {answers: this.data.user.profile.name + " : " + chatMessage}}, (e, arg)=>{
				this.refs.objDiv.scrollTop = this.refs.objDiv.scrollHeight
				Questions.update(this.data.questions[0]._id, {$set: {lastModified: Date.now()}})
			})
		}
		e.target[0].value = ''
		e.target[0].focus()
	},
	_renderAnswers() {
		return this.data.questions.map((question)=>{
			return question.answers.map((answer)=>{
				return <div>{answer}</div>
			})
		})
	},
	_onMentorReject() {
		const mentorUserId = this.data.students[Math.floor(this.data.students.length * Random.fraction())].userId
		Questions.update(this.props.questionsId, {$set: {status: 'Unanswered', lastModified: Date.now(), current_mentor: mentorUserId}})
		Questions.update(this.props.questionsId, {$push: {exhaustedUsers: mentorUserId}})
	},
	_renderResolveButtons(){
		return (
			<div>
				<button onClick={()=>Questions.update(this.props.questionsId, {$set: {status: 'Answered', lastModified: Date.now()}})}><img src='/img/heart.png'/>Resolve</button>
				<button onClick={this._onMentorReject}><img src='/img/heart-broken.png'/>Reject</button>
			</div>
		)
	},
	render() {
		if(this.data.user 
			&& this.data.questions
			&& this.data.questions.length > 0
			&& this.data.questions[0].status === 'Unswered'
			&& this.data.user._id !== this.data.questions[0].poster
			&& this.data.user._id !== this.data.questions[0].current_mentor) {
				return (
					<div>
						<NavBar />
						Sorry, this question is either closed or you are not authorized
					</div>
				)
		} else {
			return (
				<div>
					<NavBar />
					<br />
					{
						this.data.mentors && this.data.mentors.length > 0 ?
							<div>Your mentor is : {this.data.mentors[0].profile.name}</div>
							:
							null
					}
					{ this.data.user
						&& this.data.questions
						&& this.data.questions.length > 0
						&& this.data.user._id === this.data.questions[0].poster ?
							this._renderResolveButtons()
							:
							null
					}
					{this.data.questions && this.data.questions.length > 0 ?
						<div>
							<strong>Title: {this.data.questions[0].title}</strong>
							<br />
							<strong>Question: {this.data.questions[0].question}</strong>
							<br />
						</div>
						:
						null
					}
					<div ref='objDiv' style={{height: '300px', width: '100%', overflowY: 'scroll'}}>
						{this._renderAnswers()}
					</div>
					<form onSubmit={this._onChatSubmit}>
						<input style={{width: '500px'}}></input>
						<button type='submit'>Submit</button>
					</form>
				</div>
			)
		}
	}
})