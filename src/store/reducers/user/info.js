const sessionUserState = sessionStorage.getItem('userInfoState') || '';

const initail = (sessionUserState && JSON.parse(sessionUserState)) || {
    username: '',
};

const userInfo = (state = initail, action) => {
    let userInfoState = state;
    switch (action.type) {
        case 'CHANGE_USERINFO':
            userInfoState = {
                username: action.name,
            };
            break;
        default:
            userInfoState = state;
            break;
    }

    sessionStorage.setItem('userInfoState', JSON.stringify(userInfoState));
    return userInfoState;
};

export default userInfo;
