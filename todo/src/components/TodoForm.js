import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';
import { addTodo } from '../actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  addTodo = (ev) => {
    ev.preventDefault();
       this.props.addTodo(this.state.task)
       }
  

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      
        <Form onSubmit={this.addTodo} className="todoForm">
          <Input
            className="form-input"
            onChange={this.handleChange}
            type="text"
            name="task"
            placeholder="Add a task"
            value={this.state.task}
          />
          <Button className="btn" type="submit">
            Add Todo
          </Button>
        </Form>
  
    );
  }
}

export default connect(null, {addTodo})(TodoForm);