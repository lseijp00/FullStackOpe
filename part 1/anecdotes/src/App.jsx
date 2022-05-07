import { useState } from 'react'
import './App.css'

export default function App(props) {
  const [selected, setSelected] = useState(0)
  const [copy, setCopy] = useState(Array(props.anecdotes.length).fill(0))

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * (props.anecdotes.length - 0)))
  }

  const handleVote = () => {
    const poinstCopy = [...copy]
    poinstCopy[selected] += 1
    setCopy(poinstCopy)
  }

  return (
    <div className='wrapper'>
      {<h4>{props.anecdotes[selected]}</h4>}
      <button onClick={handleRandom}>next anecdote</button>
      <button onClick={handleVote}>vote</button>
      <p>It has {copy[selected]} votes</p>
    </div>
  )
}
