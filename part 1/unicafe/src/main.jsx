import { useState } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = param => {
    return function (e) {
      e.preventDefault()
      switch (param) {
        case 'good':
          setGood(good + 1)
          break
        case 'neutral':
          setNeutral(neutral + 1)
          break
        case 'bad':
          setBad(bad + 1)
          break
      }
    }
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleClick('good')}>good</button>
      <button onClick={handleClick('neutral')}>neutral</button>
      <button onClick={handleClick('bad')}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

    </div>
  )
}

createRoot(document.getElementById('root')).render(<App tab="home" />)
