import { combineReducers } from 'redux';
import todos from './example/todos';
import visibilityFilter from './example/visibilityFilter';
import login from './user/login';
import userInfo from './user/info';

const store = combineReducers({
    todos,
    visibilityFilter,
    login,
    userInfo,
});

export default store;
