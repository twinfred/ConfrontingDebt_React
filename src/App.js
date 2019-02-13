import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './blog/components/create.component';
import Edit from './blog/components/edit.component';
import Archive from './blog/components/archive.component';

class App extends Component {
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
                        <Route path="/archives" component={ Archive } />
                    </Switch>
                    <footer id="mainFooter">
                        <div className="footer-copyright text-center py-3 bg-light">
                            © 2019 Copyright:&nbsp;
                            <a href="http://timwinfred.com/" target="_blank">TimWinfred.com</a>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
