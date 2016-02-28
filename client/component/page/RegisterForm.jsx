RegisterForm = React.createClass({
	mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    }
  },
	handleRegister(event) {
		// alert('akkkkksdfdf')
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
					<div style={{position: "relative", width: 50 + '%'}}>
					<div style={{position: "absolute", top: 50 + '%', left: 50 + '%', color: 'black', backgroundColor: 'white', border: '1px solid black', padding: '20px'}}>
						<form id="movi_register_form" style={{color: 'black', width: '500px'}} className="col-sm-12" onSubmit={this.handleRegister}>
							<label htmlFor="courseNum" style={{marginRight: 20 + 'px', position: "absolute", fontSize: 25 + 'px'}}>Register for: {this.props.courseId} </label>
							<br></br>
							<br></br>
							<br></br>
							<div className="form-group">
								<div className="no-spacing col-sm-12 movi_register_form" align = "centre"> 
									<div className="col-sm-10">
										<label htmlFor="name"> </label>
										<input type="name" style={{paddingLeft: '20px', width: 400}} name="name" id="name" placeholder="Your Name" className="span_12" ref='registerNameInput' required/>
										<br/>
									</div>
									<br></br>
									<div className="col-sm-10">
										<label htmlFor="email"> </label>
										<input type="email" style={{paddingLeft: '20px', width: 400}} name="email" id="email" placeholder="Your email" className="span_12" ref='registerEmailInput' required/>
										<br/>
									</div>
									<br></br>
									<div className="col-sm-10">
										<label htmlFor="password"> </label>
										<input type="password" style={{paddingLeft: '20px', width: 400}} name="password" id="password" placeholder="Your password" className="span_12" ref='registerPasswordInput' required/>
										<br/>
									</div>
									<br></br>
									<div className="col-sm-10">
										<label htmlFor="confirm_password"></label>
										<input  type="password" style={{paddingLeft: '20px', width: 400}} name="confirm_password" id="confirm_password" placeholder="Confirm Password"  className="span_12" ref='registerConfirmPasswordInput' required/>
										<br/>
									</div>
								</div>
								<div className="col-sm-10">
								<div className="checkbox_agreement">
									<p style={{marginTop: 10, color: 'black'}}> <input type="checkbox"  ref='checkbox_agreement' required/>I agree with the <a href="">terms and conditions. </a></p> 
								</div>
								</div>
							</div>
							<button style={{marginTop: 9, height: 40, marginRight: "16%", width: "100%", fontSize: '100%'}} className="btn btn-default btn-lg btn-block" type="submit" >
								Sign Up
							</button>
							<br></br>
							<br></br>
							<br></br>
							<label htmlFor="courseNum" style={{marginRight: 20 + 'px', position: "absolute", fontSize: 20 + 'px'}}>Already a member?</label>
							<br></br>
							<button style = {{marginTop: 9, height: 40, marginRight: "16%", width: "100%"}} className="btn btn-default btn-lg btn-block"><a href={'/Course/' + this.props.courseId }>Login</a></button>
						</form>
						</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})
