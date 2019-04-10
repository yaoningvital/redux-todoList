import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED, toggleTodo } from '../actions/actions'

const filterTodoList = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_UNCOMPLETED:
      return todos.filter(todo => !todo.completed)
    default:
      return new Error
  }
}

const mapStateToProps = (state) => ({
  todos: filterTodoList(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)