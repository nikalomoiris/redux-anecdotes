import React from 'react';
import Notification from './components/Notification'
import Filter from './components/Filter'
import { vote, createAnecdote } from './reducers/anecdoteReducer';
import { showNotification, hideNotification } from './reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(createAnecdote(content))
    store.dispatch(showNotification(`you created '${content}'`))
    setTimeout(() => {
      store.dispatch(hideNotification())
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

const AnecdoteList = ({store}) => {
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

const App = (props) => {
  const store = props.store

  return (
    <div>
      <Notification store={store} />
      <Filter store={store} />
      <AnecdoteList store={store}/>
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App