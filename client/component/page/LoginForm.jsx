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
			} else {
				FlowRouter.go('/StudentHome')
			}
		})
	},
	render() {
		if(this.data.user) {
			FlowRouter.go('/StudentHome')
		} else {
			return (
				<div>
					<div style={{position: "relative", width: 50 + '%'}}>
					<div style={{position: "absolute", top: 50 + '%', left: 50 + '%', backgroundColor: 'white', color: 'black', border: '1px solid black', padding: '20px'}}>
					<form key='0' id="movi_login_form" className="span_12" onSubmit={this.handleLogin}>
						<h3>Welcome to {this.props.courseId}.</h3>
						<h4><i>Register or login to start earning bonus marks.</i></h4>
						<br />
						<table className="movi_login_table no-spacing span_12" style={{marginTop: 10 + 'px'}}>
							<tbody>
							<tr>
								<td>
									<label htmlFor="email">E-mail: </label>
									<input id="email" style={{paddingLeft: '20px', width: 400}} placeholder="example@example.com" name="email" type="email" ref='loginEmailInput' required/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="password">Password: </label>
									<input id="password" style={{paddingLeft: '20px', width: 400}} placeholder="password" name="password" type="password" ref='loginPasswordInput' required/>
								</td>
							</tr>
							</tbody>
						</table>
						<br></br>
						<button className="btn btn-default btn-lg btn-block" style={{marginTop: 9 + 'px', height: 51 + 'px'}} type="submit">
							Login
						</button>
						<br></br>
						<button className="btn btn-default btn-lg btn-block" style={{marginTop: 9 + 'px', height: 51 + 'px'}} onClick={()=>FlowRouter.go('/RegisterPage/' + this.props.courseId)}>
						Register for an Account
					</button>
					</form>
					</div>
					</div>
				</div>
			)
		}
	}
})