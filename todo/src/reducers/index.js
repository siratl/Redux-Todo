const ADD_TODO = "ADD_TODO";
const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
const DELETE_TODO = "DELETE_ONE";
  
  const initialState = {
    todos: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
  
      case TOGGLE_COMPLETED:
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
        };
  
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;