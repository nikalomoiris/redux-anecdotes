import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import { statement } from '@babel/template';

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes
    return (
      <>
        <h2>Anecdotes</h2>
        {anecdotes
          .filter(anecdote =>
            anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
          .sort((a, b) => b.votes - a.votes)
          .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
                {/* <button onClick={() => {
                  store.dispatch(vote(anecdote.id))
                  store.dispatch(showNotification(`you voted '${anecdote.content}'`))
                  setTimeout(() => {
                    store.dispatch(hideNotification())
                  }, 5000)
                }}>vote</button> */}
            </div>
          </div>
        )}
      </>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(AnecdoteList)