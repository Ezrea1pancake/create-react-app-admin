import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
    };
};

const PrivateRoute = ({ component: Comp, isLogin, ...rest }) => {
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
};

export default connect(mapStateToProps)(PrivateRoute);
