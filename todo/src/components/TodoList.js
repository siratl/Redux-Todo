import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions';

const TodoList = props => { console.log(props.todos)
  return (
    <div>
      {props.todos.map((todo, id) => (
        <Todo key={id} todo={todo} toggleCompleted={props.toggleCompleted} />
      ))}
      
    </div>
  );
};

const mapPropsToState = state => {
  return { todos: state.todos };
};

export default connect(
  mapPropsToState,
  { toggleCompleted },
)(TodoList);
