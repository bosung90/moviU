AskAQuestionPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user(),
			students: Students.find({userId: {$ne: Meteor.userId()}}).fetch()
		}
	},
	_onQuestionSubmit(e) {
		e.preventDefault()
		const title = e.target[0].value.trim()
		const description = e.target[1].value.trim()
		const mentorUserId = this.data.students[Math.floor(this.data.students.length * Random.fraction())].userId
		Questions.insert({title: title, question: description, status: 'Unanswered', answers: [], createdDate: Date.now(), lastModified: Date.now(), poster: this.data.user._id, current_mentor: mentorUserId, exhaustedUsers: [mentorUserId, this.data.user._id]},
			(e, questionId)=>{
				FlowRouter.go('/WorkSession/' + questionId)
			}
		)
	},
	render() {
		return (
			<div>
				<NavBar />
				<form onSubmit={this._onQuestionSubmit}>
					<div style={{ width: "60%" }} className="center-block">
						<h2>Ask away!</h2>
						<div className="form-group">
                                                    <input id="question-title" type="text" className="form-control" placeholder="Your Question Title" />
						</div>
						<div className="form-group">
						    <textarea style={{ height: "200px", minHeight: "200px", maxHeight: "200px" }} id="question-description" type="text" className="form-control" placeholder="Your Question Description" />
						</div>
						<div className="center-block">
							<button type="submit" className="btn btn-default">Ask a classmate!</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
})
