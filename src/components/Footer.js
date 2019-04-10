import React from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from '../actions/actions'
import './Footer.css'

class Footer extends React.Component {
  render () {
    let {visibilityFilter, handleFilter} = this.props
    return (
      <div>
        <button onClick={() => handleFilter(SHOW_ALL)}
                disabled={visibilityFilter === SHOW_ALL}>all
        </button>
        <button onClick={() => handleFilter(SHOW_COMPLETED)}
                disabled={visibilityFilter === SHOW_COMPLETED}>completed
        </button>
        <button onClick={() => handleFilter(SHOW_UNCOMPLETED)}
                disabled={visibilityFilter === SHOW_UNCOMPLETED}>uncompleted
        </button>
      </div>
    )
  }
}

export default Footer