
const ADD_TODO = "ADD_TODO";
const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
const DELETE_TODO = "DELETE_ONE";
export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      task: todo,
      completed: false,
      id: Date.now(),
    },
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id,
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
