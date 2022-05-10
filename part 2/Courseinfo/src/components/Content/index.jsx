import { Part } from '../Part/index'

export function Content({ parts }) {
  return (
    <>
      {parts.map((part, index) => (
        <Part
          key={part + index}
          name={part.name}
          exercises={part.exercises}
        ></Part>
      ))}
    </>
  )
}
