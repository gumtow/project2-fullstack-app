const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class Show extends React.Component{
    render(){
        const {portfolio}= this.props;
        return(
            <Default title={portfolio.title} projName={portfolio.title} route="show">
                
                <div className="row">
                    <div className="col-md-7">
                        <div id="item-img">
                        <img className="img-fluid" src={portfolio.img} alt={portfolio.title}/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div id="item-info">               
                            <h3>Description:</h3> 
                            <p>{portfolio.description}</p>
                            <p>{portfolio.show?`This item will show on your portfolio`: `This item will be hidden from your portfolio`}</p>
                            <p>Tags: {portfolio.tags.map((tag, i)=>{
                                return(
                                    <span> {tag} </span>
                                )
                            })}</p>                            
                            <p>Rating: {portfolio.rating}</p>
                            <div className="row" >
                                <div className="col-md-5">
                                    <a className="btn btn-outline-info btn-sm main-btn btn-block" href={`/jgumtow/${portfolio.id}/edit`}>Edit</a>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-4">
                                    <form action={`/jgumtow/${portfolio.id}?_method=DELETE`} method="POST">
                                        <input className="btn btn-outline-danger btn-sm btn-block" type="submit" value="Delete"/>
                                    </form>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                

            </Default>
            )
        }
    }
    
    // Export
    module.exports = Show;