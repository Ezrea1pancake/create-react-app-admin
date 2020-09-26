import { combineReducers } from 'redux';
import todos from './example/todos';
import visibilityFilter from './example/visibilityFilter';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
});

export default todoApp;
