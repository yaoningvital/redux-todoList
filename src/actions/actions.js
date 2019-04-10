export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_UNCOMPLETED = 'SHOW_UNCOMPLETED'

export const ADD_TODO = 'ADD_TODO'
let todoItemId = 0

export function addTodo (text) {
  return {
    type: ADD_TODO,
    id: ++todoItemId,
    text,
    completed: false
  }
}


export const TOGGLE_TODO = 'TOGGLE_TODO'

export function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export function setVisibilityFilter (filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

