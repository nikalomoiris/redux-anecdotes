import React from 'react'
import { newFilter } from '../reducers/filterReducer'

const Filter = ({ store }) => {
    return (
      <>
        <div>filter <input value={store.getState().filter}
          onChange={(event) => store.dispatch(newFilter(event.target.value))} /></div>
      </>
    )
}

export default Filter