FlowRouter.route('/', {
	action(params, queryParams) {
		ReactLayout.render(MainPage)
	}
})

FlowRouter.route('/AskAQuestion', {
	action(params, queryParams) {
		ReactLayout.render(AskAQuestionPage)
	}
})

FlowRouter.route('/Questions', {
	action(params, queryParams) {
		ReactLayout.render(QuestionsPage)
	}
})

FlowRouter.route('/Requests', {
	action(params, queryParams) {
		ReactLayout.render(RequestsPage)
	}
})

FlowRouter.route('/Rewards', {
	action(params, queryParams) {
		ReactLayout.render(RewardsPage)
	}
})

FlowRouter.route('/StudentHome', {
	action(params, queryParams) {
		ReactLayout.render(StudentHomePage)
	}
})

FlowRouter.route('/WorkSession', {
	action(params, queryParams) {
		ReactLayout.render(WorkSessionPage)
	}
})
