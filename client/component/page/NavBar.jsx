NavBar = React.createClass({
	render() {
		return (
				<div>
				<div style={{color: 'purple', padding: 50}}></div>
				<div id="navigation-bar">
				<div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">
					<a className="navbar-toggle">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
					</a>
					<div className="img-container">
						<a className="navbar-brand" href='/'>Logo Goes Here</a>
					</div>
				</div>
			</div>
			</div>
		)
	}
})
