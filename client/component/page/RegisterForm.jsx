RegisterForm = React.createClass({
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
	handleRegister(event) {
		event.preventDefault()
		alert ('hjkjhyhj')
		const name = this.refs.registerNameInput.value.trim()
		const email = this.refs.registerEmailInput.value.trim()
		const password = this.refs.registerPasswordInput.value.trim()
		const confirm_password = this.refs.registerConfirmPasswordInput.value.trim()
		// const course = this.refs.registerCourse.value.trim()
		if (password != confirm_password){
			alert('password')
			this.setState({errorMessage: 'Passwords do not match. Please try again.'})
			return
		} 
		Students.insert({
			name: name,
			email: email,
			password: password,
			course: course
		})
		if (err) {
			alert('in here!')
			this.setState({errorMessage: err.reason})
		} else {
			FlowRouter.go('/StudentHomePage')
		}
	},
	render() {
		return (
			<div>
				<div style={{color: 'white', paddingTop: 30, margin: 50}}>
				</div>
				<div id="moviU_register">
					<div className="moviU_container">
						<h1>Register for an Account!</h1>
						<br />
						<form id="movi_register_form" className="span_12" onSubmit={this.handleRegister}>
							<div className="form-group">
								<table className="no-spacing span_12 movi_register_form">
									<tbody>
										<tr>
											<div className="col-sm-10">
												<label htmlFor="name">Name:  </label>
												<br/>
												<input type="name" name="name" id="name" placeholder="Name" className="span_12" ref='registerNameInput' required/>
											</div>
											<br/>
										</tr>
										<tr>
											<div className="col-sm-10">
												<label htmlFor="email">E-mail:  </label>
												<br/>
												<input type="email" name="email" id="email" placeholder="E-mail" className="span_12" ref='registerEmailInput' required/>
											</div>
											<br/>
										</tr>
										<tr>
											<div className="col-sm-10">
												<label htmlFor="password">Password:  </label>
												<br/>
												<input type="password" name="password" id="password" placeholder="Password" className="span_12" ref='registerPasswordInput' required/>
											</div>
											<br/>
										</tr>
										<tr>
											<div className="col-sm-10">
												<label htmlFor="confirm_password">Confirm Password:  </label>
												<br/>
												<input type="password" name="confirm_password" id="confirm_password" placeholder="Password" className="span_12" ref='registerConfirmPasswordInput' required/>
											</div>
											<br/>
										</tr>
									</tbody>
								</table>
								<div className="checkbox_agreement">
									<input type="checkbox" style={{marginTop: 10, float: 'left'}} ref='checkbox_agreement' required/><p style={{marginTop: 10}}> I agree to the terms and conditions. This is a disclaimer test. This helps us not get sued and allows us to operate safely and easily.</p> 
								</div>
							</div>
							<button style={{marginTop: 9, height: 68, fontSize: '100%'}} className="btn btn-primary" type="submit" >
									Register
							</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
})