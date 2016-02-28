RewardsPage = React.createClass({
	 mixins: [ReactMeteorData],

  getMeteorData() {
    return {
    	user: Meteor.user(),
     	questions: Questions.find({current_mentor: Meteor.userId()}).fetch(),
      	
    }
  },

  _renderQuestionsTableRows() {

  	return this.data.questions.map((question)=>{

  		let count = "bonus mark"
			if (question.status === 'Answered') {

			return (
				<tr key={question._id}>
					<td>
						<a href = {'/WorkSession/'+question._id}>{question.title}</a>
					</td>
					<td><span className="glyphicon glyphicon-star" style={{color:"purple"}}></span>  + 1 {count} <span className="glyphicon glyphicon-star" style={{color:"purple"}}></span></td>
				</tr>
			)
		}
		})
  },


	render() {
		return (
			<div>
				<NavBarLoggedIn />
				<br />
				<br />
				<br />
				<br />
			<div style={{ width: "60%" }} className="center-block">

				<div className="table-responsive table-bordered table-striped">
					<table className="table">
					    <thead>
					      <tr>
					        <th>Questions Answered</th>
					        <th>Reward</th>
					      </tr>
					    </thead>
					    <tbody>
					    	{this._renderQuestionsTableRows()}
					    </tbody>
					  </table>
				  </div>
				  </div>
			</div>
		)
	}	
})