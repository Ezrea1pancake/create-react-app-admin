import { combineReducers } from 'redux';
import login from './user/login';
import userInfo from './user/info';

const store = combineReducers({
    login,
    userInfo,
});

export default store;
