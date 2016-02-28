AskAQuestionPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user(),
			students: Students.find({userId: {$ne: Meteor.userId}}).fetch()
		}
	},
	_onQuestionSubmit(e) {
		e.preventDefault()
		const title = e.target[0].value.trim()
		const description = e.target[1].value.trim()
		Questions.insert({title: title, question: description, status: 'Unanswered', answers: [], createdDate: Date.now(), lastModified: Date.now(), poster: this.data.user._id, current_metor: this.data.students[0].userId},
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
						<div className="input-group">
							<span className="input-group-addon" id="question-title">Title</span>
							<input type="text" className="form-control" placeholder="Your Question Title" aria-describedby="question-title" />
						</div>
						<div className="input-group">
							<span className="input-group-addon" id="question-description">Description</span>
							<textarea style={{ height: "200px", minHeight: "200px", maxHeight: "200px" }} type="text" className="form-control" placeholder="Your Question Description" aria-describedby="question-description" />
						</div>
						<div className="clearfix">
							<button type="submit" className="btn btn-default pull-right">Submit</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
})
