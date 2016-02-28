StudentHomePage = React.createClass({

    _buttonClassStr() {
        return "btn btn-primary btn-lg btn-block"
    },

    _renderAskQuestionButton() {
        return <a href="AskAQuestion" className={this._buttonClassStr()}>
                 Ask A Question
               </a>
    },

    _renderMyQuestionsButton() {
        return <a href="Questions" className={this._buttonClassStr()}>
                    My Questions
               </a>
    },
 
     _renderRequestsButton() {
        return <a href="Requests" className={this._buttonClassStr()}>
                    Requests
               </a>
    },
                
    _renderMyRewardsButton() {
        return <a href="Rewards" className={this._buttonClassStr()}>
                    My Rewards
               </a>
    },
 
    render() {
	return (
	    <div>
                <NavBarLoggedIn />
                <div style={ { marginTop: "70px" } }>
                    <h1>Welcome Student!</h1>
                
                    <div style={ { width: "200px" } } className="center-block">
                    {this._renderAskQuestionButton()}
                    {this._renderMyQuestionsButton()}
                    {this._renderRequestsButton()}
                    {this._renderMyRewardsButton()}
                    </div>
                </div>
            </div>
            )
    }
})
