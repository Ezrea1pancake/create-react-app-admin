import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestLogin, logined } from 'store/actions';

const Login = connect(
    (state) => ({
        isLogin: state.login.isLogin,
        loading: state.login.loading,
    }),
    { requestLogin, logined },
)(({ location, history, isLogin, loading, requestLogin, logined }) => {
    const redirect = (location.state && location.state.redirect) || '/';
    if (isLogin) {
        return <Redirect to={redirect} />;
    }

    function loginRequest() {
        requestLogin();
        setTimeout(() => {
            logined();
            history.push('/article');
        }, 1500);
    }

    return (
        <div>
            <p>用户登录</p>
            <hr />
            {/* loading优化 */}
            <button onClick={loginRequest} disabled={loading}>
                {loading ? 'login...' : 'login'}
            </button>
        </div>
    );
});

export default Login;
