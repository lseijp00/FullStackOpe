import { useState } from 'react'
import './App.css'

export default function App (props) {
  const [selected, setSelected] = useState(0)

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * (props.anecdotes.length - 0)))
  }
  return (
    <div className='wrapper'>
      {props.anecdotes[selected]}
      <button onClick={handleRandom}>next anecdote</button>

    </div>
  )
}
