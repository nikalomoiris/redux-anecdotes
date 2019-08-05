import React from 'react'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
    //   store.dispatch(createAnecdote(content))
    //   store.dispatch(showNotification(`you created '${content}'`))
      setTimeout(() => {
        // store.dispatch(hideNotification())
      }, 5000)
    }

    return (
      <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name='anecdote' /></div>
          <button type='submit'>create</button>
        </form>
      </>
    )
}

export default AnecdoteForm