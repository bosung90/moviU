FlowRouter.route('/', {
	action(params, queryParams) {
		ReactLayout.render(MainPage)
	}
})

FlowRouter.route('/Course/:courseId', {
	action(params, queryParams) {
		ReactLayout.render(MainCoursePage, {courseId: params.courseId})
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

FlowRouter.route('/WorkSession/:questionsId', {
	action(params, queryParams) {
		ReactLayout.render(WorkSessionPage, {questionsId: params.questionsId})
	}
})

FlowRouter.route('/Logout', {
	action(params, queryParams) {
		ReactLayout.render(LogoutPage)
	}
})

FlowRouter.route('/RegisterPage/:courseId', {
	action(params, queryParams) {
		ReactLayout.render(RegisterPage, {courseId: params.courseId})
	}
})