import React from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header/index'
import { Content } from './components/Content/index'
import { Total } from './components/Total/index'

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total number={exercises.length}/>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App tab="home" />)
