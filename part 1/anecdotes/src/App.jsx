import { useEffect, useState } from 'react'
import './App.css'

export default function App(props) {
  const [selected, setSelected] = useState(0)
  const [quoteMostVote, setQuoteMostVote] = useState(0)

  const [copy, setCopy] = useState(Array(props.anecdotes.length).fill(0))

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * (props.anecdotes.length - 0)))
  }

  const handleVote = () => {
    const poinstCopy = [...copy]
    poinstCopy[selected] += 1
    setCopy(poinstCopy)
  }

  useEffect(() => {
    const max = Math.max(...copy)
    const index = copy.indexOf(max)
    setQuoteMostVote(props.anecdotes[index])
  }, [copy])

  return (
    <>
      <div className='wrapper'>
        <h2>Anecdote of the day</h2>
        {<h4>{props.anecdotes[selected]}</h4>}
        <button onClick={handleRandom}>next anecdote</button>
        <button onClick={handleVote}>vote</button>
        <p>It has {copy[selected]} votes</p>
      </div>
      <h2>Anecdote with most votes</h2>
      <p>{quoteMostVote}</p>
    </>
  )
}
