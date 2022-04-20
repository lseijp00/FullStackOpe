export function Content ({ exercises, parts }) {
  const arrayCombined = parts.map((part, i) => {
    return [part, exercises[i]]
  })

  return (
    <>
      {
        arrayCombined.map(item =>
          <p key={item}>{item[0]} ------ {item[1]}</p>
        )
      }
    </>
  )
}
