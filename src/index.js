import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
                <BrowserRouter>
                    <AnimatePresence>
                        <Switch>
                            <Route path="/home">
                                <Home />
                            </Route>

                            <Route path="/coffee">
                                <Coffee />
                            </Route>

                            <Route path="/plant">
                                <Plant />
                            </Route>

                            <Route path="/write">
                                <Write />
                            </Route>

                            <Route path="/login">
                                <Login />
                            </Route>

                            <Route path="/blogs">
                                <Blogs />
                            </Route>

                            <Route path="/api/posts/id">
                                <Post />
                            </Route>

                            {Posts.map((post) => (
                                <Route key={post.route} path={`/api/posts/${post.route}`}>
                                    <BlogPost
                                        title={post.title}
                                        date={post.date}
                                        image={post.image}
                                        content={post.content}
                                    />
                                </Route>
                            ))}
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </AnimatePresence>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

serviceWorker.unregister();
ReactDOM.render(<App />, document.getElementById('root'))
