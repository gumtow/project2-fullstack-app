const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class New extends React.Component{
    render(){
        return(
            <Default title="Create a new Portfolio Item" route="new">
                <div className="row">
                <div className="col-md-5 my-auto">
                        <form className="form-group" action="/jgumtow" method="POST">
                            Title: <input className="form-control" type="text" name="title" /><br/>
                            Image Location: <input className="form-control" type="text" name="img" /><br/>
                            Project Link: <input className="form-control" type="text" name="link" /><br/>
                            Description: <input className="form-control" type="text" name="description" /><br/>
                            <div className="form-group form-check">
                                <input className="form-check-input" type="checkbox" name="show" />
                                <label className="form-check-label">Show this item: </label>
                            </div>
                            Tags: <input className="form-control" type="text" name="tags"/><br/>
                            Rating: <input className="form-control" type="number" name="rating"/><br/>
                            <br/>
                            <input className="btn btn-primary main-btn" type="submit" name="" value="Add to Portfolio"/>
                        </form>
                    </div>
                </div>

            </Default>
        )
    }
}

// Export
module.exports = New;