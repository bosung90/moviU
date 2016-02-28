RegisterForm = React.createClass({
	mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
	handleRegister(event) {
		event.preventDefault()
		const name = this.refs.registerNameInput.value.trim()
		const email = this.refs.registerEmailInput.value.trim()
		const password = this.refs.registerPasswordInput.value.trim()
		const confirm_password = this.refs.registerConfirmPasswordInput.value.trim()
		if (password !== confirm_password){
			alert('password doesnt match!')
			return
		}
		Accounts.createUser({
			email: email,
			password: password,
			profile: {
				name: name
			}
		}, (err) => {
			if(err) {
				alert(err.reason)
			} else {
				FlowRouter.go('/Course/' + this.props.courseId)
			}
		})
	},
	render() {
		return (
			<div>
				<div id="moviU_register">
					<div className="moviU_container">
						<h1>Register for an Account!</h1>
						<br />
						<form id="movi_register_form" className="col-sm-12" onSubmit={this.handleRegister}>
							<div className="form-group">
								<div className="no-spacing col-sm-12 movi_register_form">
									<div className="col-sm-10">
										<label htmlFor="name">Name:  </label>
										<input type="name" name="name" id="name" placeholder="Name" className="span_12" ref='registerNameInput' required/>
										<br/>
									</div>
									<div className="col-sm-10">
										<label htmlFor="email">E-mail:  </label>
										<input type="email" name="email" id="email" placeholder="E-mail" className="span_12" ref='registerEmailInput' required/>
										<br/>
									</div>
									<div className="col-sm-10">
										<label htmlFor="password">Password:  </label>
										<input type="password" name="password" id="password" placeholder="Password" className="span_12" ref='registerPasswordInput' required/>
										<br/>
									</div>
									<div className="col-sm-10">
										<label htmlFor="confirm_password">Confirm Password:  </label>
										<input type="password" name="confirm_password" id="confirm_password" placeholder="Password" className="span_12" ref='registerConfirmPasswordInput' required/>
										<br/>
									</div>
								</div>
								<div className="checkbox_agreement">
									<input type="checkbox" style={{float: 'left', marginRight: '4px'}} ref='checkbox_agreement' required/>
									<p style={{marginTop: 10}}> I agree to the terms and conditions. This is a disclaimer test. This helps us not get sued and allows us to operate safely and easily.</p> 
								</div>
							</div>
							<button style={{marginTop: 9, height: 44, fontSize: '100%'}} className="btn btn-primary" type="submit" >
								Register
							</button>
							<a href={'/Course/' + this.props.courseId}>I already have an account</a>
						</form>
					</div>
				</div>
			</div>
		)
	}
})