import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/base/Home';
import { Article, QuickInfo } from 'pages/information';
import Login from 'pages/base/Login';
import PrivateRoute from 'components/base/PrivateRoute';

import { DEFAULT_ROUTE } from 'configs/authorized/sideBarList';

export default () => (
    <Router basename="distribute-manager">
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/">
                <Home>
                    <Switch>
                        <PrivateRoute path="/article" component={Article} />
                        <Route path="/quick-info" component={QuickInfo} />
                        <Redirect to={`/${DEFAULT_ROUTE}`} />
                    </Switch>
                </Home>
            </Route>
        </Switch>
    </Router>
);
