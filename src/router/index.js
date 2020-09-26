import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/base/Home';
import { Article, QuickInfo } from '../pages/information';
// import App from '../components/App';

export default () => (
    <Router basename="/distribute-manager">
        <Switch>
            <Route path="/">
                <Home>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/article">
                            <Article />
                        </Route>
                        <Route path="/quick-info">
                            <QuickInfo />
                        </Route>
                    </Switch>
                </Home>
            </Route>
        </Switch>
    </Router>
);

function About() {
    return <h2>About</h2>;
}
