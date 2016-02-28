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
				<div id="moviU_register"><center>
					<div className="moviU_container">
						<h1 style = {{marginRight: "15%"}}>Register for {this.props.courseId}</h1>
						<br />
						<form id="movi_register_form" className="col-sm-12" onSubmit={this.handleRegister}>
							<div className="form-group">
								<div className="no-spacing col-sm-12 movi_register_form" align = "centre">
									<div className="col-sm-10">
										<label htmlFor="name"> </label>
										<input type="name" name="name" id="name" placeholder="Your Name" className="span_12" ref='registerNameInput' required/>
										<br/>
									</div>
									<div className="col-sm-10">
										<label htmlFor="email"> </label>
										<input type="email" name="email" id="email" placeholder="Your email" className="span_12" ref='registerEmailInput' required/>
										<br/>
									</div>
									<div className="col-sm-10">
										<label htmlFor="password"> </label>
										<input type="password" name="password" id="password" placeholder="Your password" className="span_12" ref='registerPasswordInput' required/>
										<br/>
									</div>
									<div className="col-sm-10">
										<label htmlFor="confirm_password"></label>
										<input  type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password"  className="span_12" ref='registerConfirmPasswordInput' required/>
										<br/>
									</div>
									

								</div>
								<div className="col-sm-10">

								<div className="checkbox_agreement">
									<p style={{marginTop: 10}}> <input type="checkbox"  ref='checkbox_agreement' required/> I agree with the <a href="">terms and conditions. </a></p> 

								</div>
								</div>
							</div>
							<button style={{marginTop: 9, height: 40, marginRight: "16%", width: "17%", fontSize: '100%'}} className="btn btn-primary" type="submit" >
								Sign Up
							</button>
							<div style = {{marginRight: "15%"}}> <center><p>Already a member?<a href={'/Course/' + this.props.courseId }> Login</a></p> </center></div>
						</form>
					</div>
					</center>
				</div>
			</div>
		)
	}
})
