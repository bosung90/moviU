RegisterForm = React.createClass({

mixins: [ReactMeteorData],
 
  // Loads items from the Tasks collection and puts them on this.data.tasks
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
			<div style={{color: 'white', padding: 50}}></div>
			<div id="moviU_register">
				<div className="moviU_container">
				<h1>Register for an Account!</h1>
				<br />
				<form id="movi_register_form" className="span_12" onSubmit={this.handleRegister}>
					<table className="no-spacing span_12 movi_register_form">
					<tbody>
						<tr>
							<label htmlFor="name">Name:  </label>
							<input type="name" name="name" id="name" className="span_12" ref='registerNameInput' required/>
							<br></br>
						</tr>
						<tr>
							<label htmlFor="email">E-mail:  </label>
							<input type="email" name="email" id="email" className="span_12" ref='registerEmailInput' required/>
							<br></br>
						</tr>
						<tr>
							<label htmlFor="password">Password:  </label>
							<input type="password" name="password" id="password" className="span_12" ref='registerPasswordInput' required/>
							<br></br>
						</tr>
						<tr>
							<label htmlFor="confirm_password">Confirm Password:  </label>
							<input type="confirm_password" name="confirm_password" id="confirm_password" className="span_12" ref='registerConfirmPasswordInput' required/>
							<br></br>
						</tr>
					</tbody>
					</table>

					<div className="checkbox_agreement">
							<input type="checkbox" style={{marginTop: 10, float: 'left'}} ref='checkbox_agreement' required/><p style={{marginTop: 10}}> I agree to the terms and conditions. This is a disclaimer test. This helps us not get sued and allows us to operate safely and easily.</p> 
					</div>
					<button style={{marginTop: 9, height: 68, fontSize: '100%'}} className="register_button yellow" type="submit" >
							Register
					</button>
				</form>
				</div>
			</div>
			</div>
		)
	}
})