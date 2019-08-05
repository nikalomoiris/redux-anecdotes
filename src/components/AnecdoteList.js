import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

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
                <button onClick={() => {
                  props.vote(anecdote.id)
                  props.showNotification(`you voted '${anecdote.content}'`)
                  setTimeout(() => {
                    props.hideNotification()
                  }, 5000)
                }}>vote</button>
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

const mapDispatchToProps = {
    hideNotification,
    showNotification,
    vote
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)