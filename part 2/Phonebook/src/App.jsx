import { useState } from 'react'
import './App.css'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsFiltered, setPersonsFiltered] = useState([])

  const handleNameChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
  }
  const handleFilter = (e) => {
    e.preventDefault()
    const arr = persons.filter((person) => person.name.includes(e.target.value))
    setPersonsFiltered(arr)
    setFilter(e.target.value)
  }
  const addContact = (e) => {
    e.preventDefault()
    const newContact = { name: newName, number: newNumber }
    const arrNames = persons.map((person) => person.name)
    if (arrNames.includes(newContact.name))
      alert(`${newName} already exists in array`)
    else setPersons([...persons, newContact])

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>filter shown with a </p>
        <input onChange={handleFilter} />
      </div>
      <h3>Add a new</h3>
      <form
        style={{
          display: 'inline-flex',
          gap: '.5rem',
          flexDirection: 'column',
        }}
        onSubmit={addContact}
      >
        name <input value={newName} onChange={handleNameChange} />
        number <input value={newNumber} onChange={handleNumberChange} />
        <button type='submit'>add</button>
      </form>
      <h2>Numbers</h2>
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
    </div>
  )
}

export default App
