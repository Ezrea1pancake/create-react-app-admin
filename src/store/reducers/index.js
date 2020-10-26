import { combineReducers } from 'redux';
import todos from './example/todos';
import visibilityFilter from './example/visibilityFilter';
import login from './user/login';

const store = combineReducers({
    todos,
    visibilityFilter,
    login,
});

export default store;
