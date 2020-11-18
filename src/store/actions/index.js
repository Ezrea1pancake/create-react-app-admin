let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter,
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    };
};

export const requestLogin = () => {
    return {
        type: 'REQUEST_LOGIN',
    };
};

export const logined = () => {
    return {
        type: 'LOGINED',
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

export const changeUserInfo = (name) => {
    return {
        type: 'CHANGE_USERINFO',
        name,
    };
};
