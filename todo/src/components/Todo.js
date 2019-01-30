import React from 'react';
import { CustomInput } from 'reactstrap';

const Todo = props => {
  console.log(props);
  const date = props.todo.id;
  return (
  <div className="todoWrapper">
    <div className="todoList">
      <h4>{props.todo.task}</h4>
      <p> { Date(date).toString()}</p>
      
    </div>

    </div>
  );
};

export default Todo;
