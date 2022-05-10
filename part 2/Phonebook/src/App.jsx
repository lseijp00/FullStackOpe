import { useState } from 'react'
import './App.css'
const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleNoteChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }
  const addContact = (e) => {
    e.preventDefault()
    const newContact = { name: newName }
    const arrNames = persons.map((person) => person.name)
    if (arrNames.includes(newContact.name))
      alert(`${newName} already exists in array`)
    else setPersons([...persons, newContact])

    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <input value={newName} onChange={handleNoteChange} />
        <button type='submit'>add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
