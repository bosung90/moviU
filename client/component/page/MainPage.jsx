MainPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user()
		}
	},
	_onCourseNumSubmit(e) {
		e.preventDefault()
		const courseNum = e.target[0].value.trim()
		FlowRouter.go('/Course/' + courseNum)
	},
	render() {
		return (
			<div>
					<NavBar />
					<div>
						<div style={{position: "relative", width: 80 + '%'}}>
						<div style={{position: "absolute", top: 50 + '%', left: 40 + '%', border: '1px solid black', backgroundColor: 'white', padding: '20px'}}>
						<form onSubmit={this._onCourseNumSubmit} style={{width: 500 + 'px'}}>
							<label htmlFor="courseNum" style={{marginRight: 20 + 'px', position: "absolute", fontSize: 40 + 'px'}}>Enter Course:  </label>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<input type="courseNum" style={{height: 60 + 'px', width: 100 + '%', paddingLeft: 20 + 'px'}} name="courseNum" id="courseNum" placeholder="ex. CPSC310S16"/>
							<br></br>
							<br></br>
							<button type='submit' className="btn btn-default btn-lg btn-block">Join</button>
						</form>
						</div>
					</div>
					<div style={{width: 100 + '%'}}>
					<img src='/img/splash_page.jpeg' width='100%' style={{marginTop: -20 + 'px'}}/>
					</div>
					<div style={{position: "relative", width: 80 + '%'}}>
					<div style={{position: "absolute", top: 50 + '%', left: 50 + '%', color: "rgb(300,300,220)"}}>
					<blockquote className="block-quote reverse" style= { { borderLeft: "none", marginTop: 10 + '%', padding: "0.5em 10px" , color : "rgb(300,300,220)", fontStyle: "italic", textShadow : "0.5px 0.5px black"}}>moviU fosters collaboration amongst classmates to accelerate the learning process
					<footer style = { { color : "rgb(300,300,220)"}}>moviU team</footer ></blockquote>
					</div>
					</div>
						<div style={{width: 100 + '%'}}>
						<img src='/img/about_photo.jpeg'/>
						</div>
			</div>
			</div>
		)}
})
