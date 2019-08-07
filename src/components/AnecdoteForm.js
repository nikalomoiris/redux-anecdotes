import React from 'react'
import { connect } from 'react-redux'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        props.createAnecdote(newAnecdote)
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