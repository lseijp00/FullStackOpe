import { Part } from '../Part'

export function Content ({ exercises, parts }) {
  const arrayCombined = parts.map((part, i) => {
    return [part, exercises[i]]
  })

  return (
    <>
      {
        arrayCombined.map(item =>
          <Part key={item} exercise={item[0]} part={item[1]} />
        )
      }
    </>
  )
}
