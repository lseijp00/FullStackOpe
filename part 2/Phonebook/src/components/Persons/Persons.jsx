import './Persons.css'
import service from '../../services/service'

export default function Persons({
  personsFiltered,
  filter,
  persons,
  setPersons
}) {
  const handleDelete = (id) => {
    service
      .deleteContact(id)
      .then(setPersons(persons.filter((person) => person.id !== id)))
  }
  return (
    <ul className='item__group'>
      {personsFiltered.length === 0 && filter.length > 0 ? (
        <div>No coincide nada</div>
      ) : personsFiltered.length > 0 && filter.length > 0 ? (
        personsFiltered.map((person, i) => (
          <li key={i} className='item__list'>
            <div className='contact__item'>
              <p>{person.name}</p>
              <p> {person.number}</p>
            </div>
            <button
              onClick={() => handleDelete(person.id)}
              className='delete__item'
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        persons.map((person, i) => (
          <li key={i} className='item__list'>
            <div className='contact__item'>
              <p>{person.name}</p>
              <p> {person.number}</p>
            </div>
            <button
              onClick={() => handleDelete(person.id)}
              className='delete__item'
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  )
}
