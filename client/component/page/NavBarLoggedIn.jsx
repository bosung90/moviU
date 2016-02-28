NavBarLoggedIn = React.createClass({
	render() {
		return (
				<div id="navigation-bar">
				<div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">
					<a className="navbar-toggle">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
					</a>
					<div className="img-container">
						<a className="navbar-brand" href='/'>Logo Goes Here</a>
					</div>
					<ul className="nav navbar-nav navbar-right">
					<li><a href="/">Notifications</a></li>
					<li><a href="/StudentHome">Home</a></li>
					<li><a href="/">Settings</a></li>
					</ul>
				</div>
			</div>
		)
	}
})
