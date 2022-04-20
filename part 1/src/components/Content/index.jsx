import { Part } from '../Part'

export function Content ({ course }) {
  const { parts } = course

  return (
    <>
      {
        parts.map((part, index) =>
          <Part key={part + index} name={part.name} exercises={part.exercises}></Part>
        )
      }
    </>
  )
}
