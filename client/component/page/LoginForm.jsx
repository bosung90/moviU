LoginForm = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			user: Meteor.user()
		}
	},
	handleLogin(event) {
		event.preventDefault()
		const email = this.refs.loginEmailInput.value.trim()
		const password = this.refs.loginPasswordInput.value.trim()

		Meteor.loginWithPassword(email, password, (err, result) => {
			if(err) {
				alert(err.reason)
			}
		})
	},

	render() {
		if(this.data.user) {
			return (
				<div>
					Welcome back {this.data.user.email}
				</div>
			)
		} else {
			return (
				<div>
					<form key='0' id="movi_login_form" className="span_12" onSubmit={this.handleLogin}>
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
	}
})