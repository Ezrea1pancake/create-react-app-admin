import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// 容器组件
import Home from 'containers/base/Home';

// 页面组件
import { Article, QuickInfo } from 'pages/information';
import Login from 'pages/login';

// 功能组件
import PrivateRoute from 'containers/base/PrivateRoute';

import { DEFAULT_ROUTE } from 'configs/authorized/sideBarList';

export default () => (
    <Router basename="distribute-manager">
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/">
                <Home>
                    <Switch>
                        <PrivateRoute path="/article" component={Article} />
                        <PrivateRoute path="/quick-info" component={QuickInfo} />
                        <Redirect to={`/${DEFAULT_ROUTE}`} />
                    </Switch>
                </Home>
            </Route>
        </Switch>
    </Router>
);
