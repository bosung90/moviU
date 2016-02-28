MainPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user()
		}
	},
	_onCourseNumSubmit(e) {
		e.preventDefault()
		const courseNum = e.target[0].value.trim()
		FlowRouter.go('/Course/' + courseNum)
	},
	render() {
		return (
			<div>
				<NavBar />
				<form onSubmit={this._onCourseNumSubmit}>
					<label htmlFor="courseNum">Enter Course Number:  </label>
					<input type="courseNum" name="courseNum" id="courseNum" placeholder="ex. CPSC310S16"/>
					<button type='submit'>Enter</button>
				</form>
				
			</div>
		)
	}
})