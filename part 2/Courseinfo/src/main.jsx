import React from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header/index'
import { Content } from './components/Content/index'
import { Total } from './components/Total/index'
import './index.css'
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header course={courses.name} />

      {courses.map((course) => (
        <div key={course.id}>
          <li key={course.id}>
            <h2>{course.name}</h2>
            <section key={course.id}>
              <Content parts={course.parts} />
            </section>
          </li>
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App tab='home' />)
