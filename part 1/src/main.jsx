import React from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header/index'
import { Content } from './components/Content/index'
import { Total } from './components/Total/index'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total number={course.parts.length}/>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App tab="home" />)
