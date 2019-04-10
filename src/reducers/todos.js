import { ADD_TODO, TOGGLE_TODO } from '../actions/actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => (
        todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
      ))
    default:
      return state
  }
}

export default todos