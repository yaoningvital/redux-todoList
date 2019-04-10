import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

class AddTodo extends React.Component {
  constructor (props) {
    super(props)
    // this.handleAdd = this.handleAdd.bind(this)
    this.myInput = React.createRef()
  }
  
  // handleAdd (e) {
  //   console.log(111)
  //   console.log('e:', e)
  // }
  
  render () {
    let {handleAdd} = this.props
    return (
      <div>
        <input type="text" onKeyDown={(e) => {
          if (e.keyCode === 13) {
            handleAdd(this.myInput.current.value);
            this.myInput.current.value = ''
          }
        }} ref={this.myInput}/>
        <button onClick={() => {
          handleAdd(this.myInput.current.value);
          this.myInput.current.value = ''
        }}>add todo
        </button>
      </div>
    )
  }
}

const handleAdd = (dispatch, text) => {
  console.log('text:', text)
  dispatch(addTodo(text))
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  handleAdd: (text) => handleAdd(dispatch, text)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)