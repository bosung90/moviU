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
					<div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav" style={{color:"blue"}}>
						<a className="navbar-toggle">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
						</a>
						<div className="img-container">
							<a className="navbar-brand" href='/'><font color="white">moviU</font></a>
						</div>
						{ this.data.user ?
							<ul className="nav navbar-nav navbar-right" style={{marginRight: '8px'}}>
								<li><a>Welcome {this.data.user.profile.name}</a></li>
								<li><a href="/StudentHome">StudentHome</a></li>
								<li><a href="/Logout">Logout</a></li>
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
