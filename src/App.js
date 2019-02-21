import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './blog/components/blogComponents/create.component';
import Archive from './blog/components/blogComponents/archive.component';
import BlogPost from './blog/components/blogComponents/BlogPost';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.updateBlog = this.updateBlog.bind(this);

        this.state = {
            blog: {},
        }
    }

    componentDidMount() {
        console.log("%c***** You're a curious one, aren't you? You must be a fellow developer? Well, regardless, thanks for checking out the code of my website! I built this site using React and React Bootstrap on the front-end, and a Node/Express server and MongoDB on the back-end. If you're interested in contacting me about web development, please feel free to email me directly at timwinfred@gmail.com. Hope to hear from you soon! *****", "color: white; background-color: green; padding: 10px; font-size: 15px");
        this.updateBlog('this-is-the-slug-for-blog-02');
    }

    updateBlog(blog_slug) {
        axios.get('http://localhost:4000/blog/post/' + blog_slug).then(
            response => {
                this.setState({ blog: response.data });
                console.log(this.state);
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <header className="sticky-top bg-white">
                        <Link to={"/"} className="navbar-brand">Confronting Debt</Link>
                        <nav className="navbar navbar-expand-sm navbar-light bg-light" id="mainNav">
                            <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/archives"} className="nav-link">Archives</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/new-blog"} className="nav-link">Create New Post</Link>
                                </li>
                            </ul>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route exact path="/new-blog" component={ Create } />
                        <Route exact path="/archives" component={ Archive } />
                        <Route path="/post/:blog_slug" component= { BlogPost } />
                    </Switch>
                    <footer id="mainFooter">
                        <div className="footer-copyright text-center py-3 bg-light">
                            © 2019 Copyright:&nbsp;
                            <a href="http://timwinfred.com/" target="_blank" rel="noopener noreferrer">TimWinfred.com</a>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
