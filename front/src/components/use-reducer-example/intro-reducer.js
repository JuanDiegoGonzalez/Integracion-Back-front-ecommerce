const initialState = [
  {
    id: 1,
    todo: "Estudiar React",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "add") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Estudiar accesibilidad",
  done: false,
};

const agregarTodoAction = {
  type: "add",
  payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
