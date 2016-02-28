LoginForm = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			students: Students.find({}).fetch()
		}
	},

	getInitialState() {
		return {
			errorMessage: null
		}
	},

	handleLogin(event) {
		event.preventDefault()
		const email = this.refs.loginEmailInput.value.trim()
		const password = this.refs.loginPasswordInput.value.trim()

		login_email_search: Students.find({email: email}).fetch()

		if (login_email_search != null){

			if (login_email_search.password == password){
				FlowRouter.go('/StudentHomePage')
			} else {
				this.setState({errorMessage: 'Incorrect password.'})
			}
		} else {
			this.setState({errorMessage: 'User is not found.'})
		}
	},

	render() {
		return (
			<div>
				<form key='0' id="movi_login_form" className="span_12" method="post" onSubmit={this.handleLogin}>
					<h3>Login Here:</h3>
					<br />
					<table className="movi_login_table no-spacing span_12" style={{marginTop: 10 + 'px'}}>
						<tbody>
						<tr>
							<td>
								<label htmlFor="email">E-mail: </label>
								<input id="email" name="email" type="email" ref='loginEmailInput' required/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="password">Password: </label>
								<input id="password" name="password" type="password" ref='loginPasswordInput' required/>
							</td>
						</tr>
						</tbody>
					</table>
				</form>
				<button className="btn btn-primary" style={{marginTop: 9 + 'px', height: 51 + 'px'}} type="submit">
						Login
					</button>

			</div>
		)
	}
})