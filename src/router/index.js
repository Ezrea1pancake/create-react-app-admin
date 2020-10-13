import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Router, Switch, Route } from 'react-router';

import Home from '../pages/base/Home';
import { Article, QuickInfo } from '../pages/information';
// import App from '../components/App';
import Login from 'pages/base/Login';
import { browserHistory } from 'router/history';

export default () => (
    <Router history={browserHistory}>
        {/* <Router basename="distribute-manager"> */}
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/">
                <Home>
                    <Switch>
                        <Route path="/article" component={Article} />
                        <Route path="/quick-info" component={QuickInfo} />
                    </Switch>
                </Home>
            </Route>
        </Switch>
    </Router>
);
