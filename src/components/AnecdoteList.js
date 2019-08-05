import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState().anecdotes
    return (
      <>
        <h2>Anecdotes</h2>
        {anecdotes
          .filter(anecdote =>
            anecdote.content.toLowerCase().includes(store.getState().filter.toLowerCase()))
          .sort((a, b) => b.votes - a.votes)
          .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
                <button onClick={() => {
                  store.dispatch(vote(anecdote.id))
                  store.dispatch(showNotification(`you voted '${anecdote.content}'`))
                  setTimeout(() => {
                    store.dispatch(hideNotification())
                  }, 5000)
                }}>vote</button>
            </div>
          </div>
        )}
      </>
    )
}

export default AnecdoteList