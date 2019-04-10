import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { setVisibilityFilter } from '../actions/actions'

const mapStateToProps = (state) => ({
  visibilityFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => dispatch(setVisibilityFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)