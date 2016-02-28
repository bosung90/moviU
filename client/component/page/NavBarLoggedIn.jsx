NavBarLoggedIn = React.createClass({
	render() {
		return (
			<div id="navigation-bar" >
				<div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav" style={{color:"blue"}}>
					<a className="navbar-toggle">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
					</a>
					<div className="img-container">
						<a className="navbar-brand" href='/'><font color="white">MoviU</font></a>
					</div>
					<ul className="nav navbar-nav navbar-right">
						<li><a href="/"><font color="white">Notifications</font></a></li>
						<li><a href="/StudentHome"><font color="white">Home</font></a></li>
						<li><a href="/"><font color="white">Settings</font></a></li>
					</ul>
				</div>
			</div>
		)
	}
})
