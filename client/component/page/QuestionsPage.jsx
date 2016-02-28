QuestionsPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user(),
			questions: Questions.find({poster: Meteor.userId()}).fetch()
		}
	},
	_renderQuestionsTableRows() {
		let count = 1
		return this.data.questions.map((question)=>{
			const formattedDate = moment(question.createdDate).format("MMM Do, YYYY")
			let name = ""
			if (question.status === 'Unanswered') {
				name = "warning"
			} else {
				name = "success"				
			}
			return (
				<tr className={name} key={question._id}>
					<td>{count++}</td>
					<td>
						<a href = {'/WorkSession/'+question._id}>{question.title}</a>
					</td>
					<td>{formattedDate} </td>
					<td>{question.status}</td>
				</tr>
			)
		})
	},
	render() {
		return (
			<div>
				<NavBar />
				<div className="table-responsive table-bordered table-striped">
					<table className="table">
							<thead>
								<tr>
									<th>#</th>
									<th>My Questions</th>
									<th>Date</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								{this._renderQuestionsTableRows()}
							</tbody>
						</table>
					</div>
			</div>
		)
	}
})