import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render () {
    let {todos, toggleTodo} = this.props
    return (
      <ul>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
          ))
        }
      </ul>
    )
  }
}

export default TodoList