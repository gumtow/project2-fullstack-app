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
                                    <li><i class="fab fa-js-square"></i> JavaScript</li>
                                    <li><i class="fab fa-html5"></i> HTML</li>
                                    <li><i class="fab fa-css3-alt"></i> CSS</li>
                                    <li><i class="fab fa-node-js"></i> NodeJS</li>
                                    <li><i class="fas fa-database"></i> MongoDB</li>
                                </ul>
                            </div>
                            <div className="row">
                                <h4>Links</h4>
                            </div>
                            <div className="row">
                                <ul>
                                    <li> <a href="https://www.linkedin.com/in/gumtow/" target="_blank"><i class="fab fa-linkedin-in"></i> LinkedIn</a> </li>
                                    <li> <a href="https://github.com/gumtow" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
                                    <li> <a href="https://www.behance.net/gumtow" target="_blank"><i class="fab fa-behance"></i> Behance</a></li>
                                    <li> <a href="https://dribbble.com/gumtow" target="_blank"><i class="fab fa-dribbble"></i> Dribbble</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-8" id="port-items">
                        <div className="row py-3">
                            {
                                portfolio.map((portfolioItem, i)=>{
                                    return(
                                        <div className="col-lg-4 col-md-6 py-3"  key={i}>
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