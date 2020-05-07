const React = require('react');

// Import Default
const Default = require('./Default');

// Extend Index
class Index extends React.Component{
    render(){
        const {portfolio}= this.props;
        return(
            <Default title="The Portfolio of Jesse Gumtow" route="index">
                <div className="row">
                    <div className="col-md-4">
                        <div id="my-info">
                            <div className="mx-auto text-center" id="profile-img">
                                <img className="img-fluid" src="./img/j-gumtow_close-color.png" alt="Jesse Gumtow"/>
                            </div> 
                            <div className="row">
                                <h3>Jesse Gumtow</h3>
                            </div>
                            <div className="row">
                                <h6>Software Engineer</h6>
                                <h6>Austin, TX</h6>
                            </div>
                            <div className="row">
                                <h4>About Me</h4>
                                <p>I am a human-centered, software engineer creating elegant solutions to complex problems. My creative personality pushes me to find opportunities to learn and develop tools that improve the lives of others, while my previous experience as a creative director at a nonprofit has taught me the importance of creating efficient solutions quickly.</p>
                            </div>
                            <div className="row">
                                <h4>Technical Skills</h4>
                            </div>
                            <div className="row">
                                <ul>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <div className="row">
                                <h4>Links</h4>
                            </div>
                            <div className="row">
                                <ul>
                                    <li>LinkedIn</li>
                                    <li>Behance</li>
                                    <li>Dribbble</li>
                                    <li>Gumtow Design</li>
                                </ul>
                            </div>
                            <nav>
                                <a className="btn btn-primary main-btn" href="/jgumtow/new">Create new portfolio item</a>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-8" id="port-items">
                        <div className="row py-3">
                            {
                                portfolio.map((portfolioItem, i)=>{
                                    return(
                                        <div className="col-lg-4 col-md-6"  key={i}>
                                            <div className="item" style={{ background:'url('+portfolioItem.img+')'}}>
                                                <a href={`/jgumtow/${portfolioItem.id}`}>
                                                    <div className="item-content text-center">
                                                        <h3>{portfolioItem.title}</h3>
                                                        {/* <img className="img-fluid" src={portfolioItem.img} alt={portfolioItem.title}/> */}
                                                        {/* <p>{portfolioItem.description}</p> */}

                                                    </div>
                                                </a>
                                                
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                

            </Default>
        )
    }
}

// Export
module.exports = Index;