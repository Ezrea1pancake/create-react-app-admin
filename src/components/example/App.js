import React from 'react';
import Footer from './Footer';
import AddTodo from '../../containers/example/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};

export default App;
