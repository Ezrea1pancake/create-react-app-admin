import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = connect((state) => ({ isLogin: state.login.isLogin }))(
    ({ component: Comp, isLogin, ...rest }) => {
        return (
            <Route
                {...rest}
                render={(props) =>
                    isLogin ? (
                        <Comp />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { redirect: props.location.pathname },
                            }}
                        />
                    )
                }
            />
        );
    },
);

export default PrivateRoute;
