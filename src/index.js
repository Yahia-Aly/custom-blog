import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';

// Pages
import Home from "./pages/Home.jsx";
import Coffee from "./pages/Coffee.jsx";
import Plant from "./pages/Plant.jsx";
import Write from "./pages/Write.jsx";
import Login from "./pages/Login.jsx";
import Blogs from './pages/Blogs';
import Post from './pages/Post';

import BlogPost from './components/BlogPost/BlogPost';

import * as serviceWorker from "./serviceWorker";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./components/StyledComponents/StyledComponents.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./components/StyledComponents/Theme";

import Posts from '../src/posts/Posts';

// Google Analytics
import ReactGA from "react-ga";

const history = createBrowserHistory();

class App extends Component {

    render () {

        if(window.location.hostname !== "localhost") {
            
            // Google Analytics ID goes here.
            let trackingId = "123";

            ReactGA.initialize(trackingId);
            ReactGA.pageview('/home');
        }


        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter history={history}>
                    <AnimatePresence>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/blogs" component={Blogs} />
                            <Route path="/plant" component={Plant} />
                            <Route path="/coffee" component={Coffee} />
                            <Route path="/post/:id" component={Post} />
                            {/* Catch-all route for invalid paths */}
                            <Route render={({ location }) => {
                                const validRoutes = ['/', '/blogs', '/plant', '/coffee', '/post'];
                                const currentPath = location.pathname;
                                
                                // Check if the current path is valid
                                const isValidRoute = validRoutes.some(route => {
                                    // Special handling for post routes
                                    if (route === '/post') {
                                        return currentPath.startsWith('/post/');
                                    }
                                    return currentPath.startsWith(route);
                                });
                                
                                if (!isValidRoute) {
                                    // Redirect to home if the route is invalid
                                    return <Redirect to="/" />;
                                }
                                
                                return null;
                            }} />
                        </Switch>
                    </AnimatePresence>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

serviceWorker.unregister();
ReactDOM.render(<App />, document.getElementById('root'))
