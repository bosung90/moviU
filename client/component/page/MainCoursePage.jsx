MainCoursePage = React.createClass({
	render() {
		return (
			<div>
				<NavBar />
				<LoginForm courseId={this.props.courseId}/>
			</div>
		)
	}
})