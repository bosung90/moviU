RequestsPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		const studentId = 1234 //Session.get(id)
		return {
			questions: Questions.find({current_mentor: studentId}).fetch()
		}
	},
	goToQuestion(){
		FlowRouter.go('/Questions')
	},
	renderRows(){
	if(this.data.questions) {
			return this.data.questions.map((question) => {
				return (
					<tr key={question._id}>
						<td><div className="center">{question.title}</div></td>
						<td><div className="center">{"  "}</div></td>
						<td><div className="center">{question.date}</div></td>
						<td><div className="center">{"  "}</div></td>
						<td><div className="center">{question.status}</div></td>
						<td><div className="center">{"  "}</div></td>
						<td><div className="center"><button style={{marginTop: 9, height: 40, fontSize: '100%'}} onClick= {this.goToQuestion} >Answer Question</button></div></td>
					</tr>
				)
			})
		}
	},
	render() {
		return(
			<div className="marginTop">
			<NavBarLoggedIn />
				<table className="no-spacing standard" style={{width: '100%', color: "blue", margin: "4cm 4cm 0cm 1cm", 
				textAlign : "left", fontSize : "30px"}}>
					<tbody>
						<tr>
							<th className="span_2"><div className="center">Requests</div></th>
							<td><div className="center">{"  "}</div></td>
							<th className="span_2"><div className="center">Date</div></th>
							<td><div className="center">{"  "}</div></td>
							<th className="span_2"><div className="center">Status</div></th>
						</tr>
						{this.renderRows()}
					</tbody>
				</table>
			</div>
		)
	}
})
