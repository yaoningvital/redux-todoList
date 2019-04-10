import React from 'react'

class TodoItem extends React.Component {
  render () {
    let {id, text, completed, toggleTodo} = this.props
    return (
      <li
        onClick={() => toggleTodo(id)}
        style={{textDecoration: completed ? 'line-through' : ''}}>
        {text}
      </li>
    )
  }
}

export default TodoItem