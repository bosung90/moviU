RequestsPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		return {
			user: Meteor.user(),
			questions: Questions.find({current_mentor: Meteor.userId()}).fetch()
		}
	},
	_renderRequestsTableRows(){
		console.log(Meteor.userId())
		if(this.data.questions) {
			let questionNum = 1
			return this.data.questions.map((question) => {
				const formattedDate = moment(question.createdDate).format("MMM Do, YYYY")
				return (
					<tr key={question._id}>
						<td>{questionNum++}</td>
						<td><a href={'/WorkSession/'+question._id}>{question.title}</a></td>
						<td>{formattedDate}</td>
						<td>{question.status}</td>
					</tr>
				)
			})
		}
	},
	render() {
		return(
			<div>
				<NavBar />
				<div className="table-responsive table-bordered table-striped">
					<table className="table">
						<thead>
							<tr>
								<th>#</th>
								<th>Requests</th>
								<th>Date</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{this._renderRequestsTableRows()}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
})
