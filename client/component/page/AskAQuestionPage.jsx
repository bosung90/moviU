AskAQuestionPage = React.createClass({
    render() {
        return (
        <div>
            <NavBarLoggedIn />
            <div style={ { marginTop: "70px" } }>


                <div style={{ width: "60%" }} className="center-block">
                    <h2>Ask away!</h2>
                    
                    <div className="input-group">
                    <span className="input-group-addon" id="question-title">Title</span>
                    <input type="text" className="form-control" placeholder="Your Question Title" aria-describedby="question-title" />
                    </div>

                    <div className="input-group">
                    <span className="input-group-addon" id="question-description">Description</span>
                    <textarea style={{ height: "200px",
                                       minHeight: "200px",
                                       maxHeight: "200px"
                                    }} type="text" className="form-control" placeholder="Your Question Description" aria-describedby="question-description" />
                    </div>
                   
                    <div className="clearfix">
                    <button type="submit" className="btn btn-default pull-right">Submit</button>
                    </div>

                </div>

            </div>
        </div>
        )
    }
})
