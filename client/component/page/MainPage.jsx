MainPage = React.createClass({
	render() {
		return (
			<div>
				<div>
					<NavBar />
					<div>
						<div style={{color: 'purple', paddingLeft: 50}}></div>
						<RegisterForm />
					</div>
				</div>
				<p>This is the main page!</p>
			</div>
		)
	}
})