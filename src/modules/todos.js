const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;

export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "출근 찍기",
      done: false,
    },
    {
      id: 2,
      text: "한시반 스크럼 회의 참여하기",
      done: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };

    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };

    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo => {
            if (todo.id === action.id) todo.done = !todo.done;
            return todo;
        })
    };

    case REMOVE:
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id)
        };

    default :
        return state;
  }
};

export default todos;