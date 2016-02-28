RegisterPage = React.createClass({
	render() {
		return(
			<div>
				<NavBar />
				<RegisterForm courseId={this.props.courseId}/>
			</div>
		)
	}
})