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
				<div style={{padding: 20}}>
				</div>
				<div id="navigation-bar">
					<div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">
						<a className="navbar-toggle">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
						</a>
						<div className="img-container">
							<a className="navbar-brand" href='/'>Logo Goes Here</a>
						</div>
						{ this.data.user ?
							[
								<a href='/StudentHomePage'>StudentHomePage</a>,
								<a href='/Logout'>LOGOUT</a>,
							]
							:
							null
						}
					</div>
				</div>
			</div>
		)
	}
})
