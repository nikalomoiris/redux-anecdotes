import React from 'react'
import { connect } from 'react-redux'
import { newFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    return (
      <>
        <div>filter <input value={props.filter}
          onChange={(event) => props.newFilter(event.target.value)} /></div>
      </>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    newFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)