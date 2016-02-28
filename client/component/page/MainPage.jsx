MainPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user()
		}
	},
	render() {
		return (
			<div>
				<NavBar />
				<LoginForm />
			</div>
		)
	}
})