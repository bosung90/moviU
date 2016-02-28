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
					Welcome back {this.data.user ? this.data.user.profile.name : null}
					<h3>You are about to enter {this.props.courseId}.</h3>
					<a href='/StudentHome'>Click to continue...</a>
				</div>
			)
		} else {
			return (
				<div>
					<form key='0' id="movi_login_form" className="span_12" onSubmit={this.handleLogin}>
						<h3>Welcome to {this.props.courseId}.</h3>
						<h3>Create or login to start earning bonus marks.</h3>
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
						<button className="btn btn-primary" style={{marginTop: 9 + 'px', height: 51 + 'px'}} type="submit">
							Login
						</button>
					</form>
					<button className="btn btn-primary" style={{marginTop: 9 + 'px', height: 51 + 'px'}} onClick={()=>FlowRouter.go('/RegisterPage')}>
						Create Account
					</button>
				</div>
			)
		}
	}
})