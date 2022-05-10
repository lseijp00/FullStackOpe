export default function Persons({ personsFiltered, filter, persons }) {
  return (
    <ul>
      {personsFiltered.length === 0 && filter.length > 0 ? (
        <div>No coincide nada</div>
      ) : personsFiltered.length > 0 && filter.length > 0 ? (
        personsFiltered.map((person, i) => (
          <li key={i}>
            {person.name} --- {person.number}
          </li>
        ))
      ) : (
        persons.map((person, i) => (
          <li key={i}>
            {person.name} --- {person.number}
          </li>
        ))
      )}
    </ul>
  )
}
