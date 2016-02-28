FlowRouter.route('/', {
	action(params, queryParams) {
		ReactLayout.render(MainPage)
	}
})

FlowRouter.route('/register', {
	action(params, queryParams) {
		ReactLayout.render(RegisterPage)
	}
})