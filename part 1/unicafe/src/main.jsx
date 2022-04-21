import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

const Statistics = (props) => {
  return (
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>
    </div>

  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(3)
  const [positive, setPositive] = useState(0)

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
  const valores = {
    good: 1,
    neutral: 0,
    bad: -1
  }

  useEffect(() => {
    setAll(good + bad + neutral)
    const sumValues = (valores.good * good) + (valores.neutral * neutral) + (valores.bad * bad)
    setAverage(sumValues / all)
    setPositive((good / all) * 100 + '%')
  }, [good, bad, neutral, average, all])

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleClick('good')}>good</button>
      <button onClick={handleClick('neutral')}>neutral</button>
      <button onClick={handleClick('bad')}>bad</button>
      {
      all
        ? (<Statistics good={good} bad={bad} neutral={neutral} all={all} average = {average} positive = {positive}/>)
        : <p>No feedback given</p>
      }

    </div>
  )
}

createRoot(document.getElementById('root')).render(<App tab="home" />)
