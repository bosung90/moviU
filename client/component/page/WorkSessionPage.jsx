WorkSessionPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    	user: Meteor.user(),
      questions: Questions.find(this.props.questionsId).fetch()
    }
  },
	_onChatSubmit(e) {
		e.preventDefault()
		const chatMessage = e.target[0].value.trim()
		if(this.data.questions && this.data.questions.length > 0) {
			Questions.update(this.data.questions[0]._id, {$push: {answers: chatMessage}}, (e, arg)=>{
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
					{ this.data.user
						&& this.data.questions
						&& this.data.questions.length > 0
						&& this.data.user._id === this.data.questions[0].poster ?
							<button onClick={()=>Questions.update(this.props.questionsId, {$set: {status: 'Answered', lastModified: Date.now()}})}>Resolve</button>
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