export function Total({ parts }) {
  const arrExercises = parts.map((part) => part.exercises)
  return (
    <p>
      <strong>
        total of {arrExercises.reduce((partialSum, a) => partialSum + a, 0)}{' '}
        exercises
      </strong>
    </p>
  )
}
