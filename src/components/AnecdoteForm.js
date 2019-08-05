import React from 'react'
import { connect } from 'react-redux'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        props.showNotification(`you created '${content}'`)
        setTimeout(() => {
            props.hideNotification()
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

const mapDispatchToProps = {
    createAnecdote,
    showNotification,
    hideNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)