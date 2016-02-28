NavBar = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user()
		}
	},
	render() {
		return (
			<div>
				<div style={{padding: 35}}>
				</div>
				<div id="navigation-bar">
					<div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">
						<a className="navbar-toggle">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
						</a>
						<div className="img-container">
							<a className="navbar-brand" href='/'><font color="white">MoviU</font></a>
						</div>
						{ this.data.user ?
							<ul className="nav navbar-nav navbar-right" style={{marginRight: '8px'}}>
								<li><a><font color="white">Welcome, {this.data.user.profile.name}!</font></a></li>
								<li><a href="/StudentHome"><font color="white">StudentHome</font></a></li>
								<li><a href="/Logout"><font color="white">Logout</font></a></li>
							</ul>
							:
							null
						}
					</div>
				</div>
			</div>
		)
	}
})
