import React from 'react';
import propTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo) => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            completed: propTypes.bool.isRequired,
            text: propTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onTodoClick: propTypes.func.isRequired,
};

export default TodoList;
