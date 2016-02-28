LogoutPage = React.createClass({
	componentDidMount() {
		Meteor.logout( (err) => {
			if (err) {
				alert(err.reason)
			} else {
				FlowRouter.go('/')
			}
		})
	},
	render(){
		return(
			<div>
				Logging Out...
			</div>
		)
	}
})