WorkSessionPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      questions: Questions.find({title: 'title'}).fetch()
    }
  },
	_onChatSubmit(e) {
		e.preventDefault()
		const chatMessage = e.target[0].value.trim()
		if(this.data.questions && this.data.questions.length > 0) {
			Questions.update(this.data.questions[0]._id, {$push: {answers: chatMessage}}, (e, arg)=>{
				this.refs.objDiv.scrollTop = this.refs.objDiv.scrollHeight
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
		return (
			<div>
				Session Questino Goes Here
				<button>Resolve</button>
				<div ref='objDiv' style={{height: '400px', width: '400px', overflowY: 'scroll'}}>
					{this._renderAnswers()}
				</div>
				<form onSubmit={this._onChatSubmit}>
					<input style={{width: '500px'}}></input>
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
})