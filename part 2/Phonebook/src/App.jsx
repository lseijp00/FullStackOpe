import { useState } from 'react'
import './App.css'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '987456382' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
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
        {persons.map((person, i) => (
          <li key={i}>
            {person.name} --- {person.number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
