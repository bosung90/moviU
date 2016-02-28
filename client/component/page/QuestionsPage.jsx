QuestionsPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      questions: Questions.find({}).fetch()
    }
  },
  _renderQuestionsTableRows() {
  	let count = 1
  	return this.data.questions.map((question)=>{
  		var formattedDate = moment(question.createdDate).format("MMM Do, YYYY")
  		var name = ""
  		if (question.status === 'Unanswered')
  		{
				name = "warning"		
  		} 
  		else 
  		{
  			name = "success"				
			}
  		return (
  			<tr className = {name}>
	      	<td>{count++}</td>
	        <td>
		        { question.status === 'Unanswered' ?
			        	question.title
			        	:
			        	<a href = '/WorkSession'>{question.title}</a>
		        }
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
				<NavBarLoggedIn />
				<br />
				<br />
				<br />
				<br />

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