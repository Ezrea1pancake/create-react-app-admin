const sessionLoginState = sessionStorage.getItem('loginState') || '';

const initail = (sessionLoginState && JSON.parse(sessionLoginState)) || {
    isLogin: false,
    loading: false,
};

const login = (state = initail, action) => {
    let loginState = state;
    switch (action.type) {
        case 'REQUEST_LOGIN':
            loginState = {
                isLogin: false,
                loading: true,
            };
            break;
        case 'LOGINED':
            loginState = {
                isLogin: true,
                loading: false,
            };
            break;
        default:
            loginState = state;
            break;
    }

    sessionStorage.setItem('loginState', JSON.stringify(loginState));
    return loginState;
};

export default login;
