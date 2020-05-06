const React = require('react');
const emailjs = require('emailjs-com');

class Default extends React.Component{
    render(){
        return(
            <html>
                <head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500;700&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js"></script>
                   <title>{this.props.title}</title>
                </head>
                <body className="container-fluid">
                        <header className="container-fluid">

                        </header>
                        <main className="container-fluid">
                            <div className="container">
                                {this.props.children}
                            </div>
                        </main>
                        <footer className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="row">
                                            <h4>Contact Me</h4>
                                        </div>
                                        <form className="form-group contact-form" action="mailto:gumtow@gmail.com" method="POST" enctype="text/plain">
                                            Name: <input className="form-control" type="text" name="name" />
                                            Email: <input className="form-control" type="email" name="email" /><br/>
                                            Message: <textarea className="form-control" type="text" name="message" /><br/>
                                            <input className="btn btn-primary main-btn" type="submit" name="" value="Send"/>
                                        </form>


                                        {/* <form id="myform" onsubmit="emailjs.sendForm('default_service', 'jgumtow_portfolio', this); return false;" method="post">
                                            <label>user_email</label>
                                            <input type="text" name="user_email" />
                                            <label>from_name</label>
                                            <input type="text" name="from_name" />
                                            <label>message</label>
                                            <input type="text" name="message" />
                                            <label>user_name</label>
                                            <input type="text" name="user_name" />
                                            <br/><br/>
                                            <button>
                                            Send
                                            </button>
                                        </form>
                                        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
                                        <script type="text/javascript">
                                        {(function(){
                                            emailjs.init("user_3kmbymomOAKe7D8e7YdJ7");
                                        })()};
                                        </script> */}
                                        
                                    </div>
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4"></div>
                                </div>
                            </div>
                            
                        </footer>
               
                </body>
            </html>
        )
    }
}
module.exports = Default;