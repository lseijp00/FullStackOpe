import axios from 'axios'
import { useState } from 'react'
import service from '../../services/service'
import './PersonForm.css'

export default function PersonForm({ persons, setPersons }) {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleNameChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
  }
  const showSuccess = () => {
    setShowSuccessMessage(true)
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 5000)
  }

  const addContact = (e) => {
    e.preventDefault()
    const newContact = { name: newName, number: newNumber }
    const arrNames = persons.map((person) => person.name)

    if (arrNames.includes(newContact.name)) {
      const editableContact = persons.find(
        (person) => person.name === newContact.name
      )
      service
        .editContact(editableContact.id, newContact)
        .then(
          setPersons(
            persons.map((person) =>
              person.id !== editableContact.id ? person : newContact
            )
          )
        )
      showSuccess()
    } else {
      service.create(newContact).then(setPersons([...persons, newContact]))
      showSuccess()
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div className='PersonForm'>
      <form
        style={{
          display: 'inline-flex',
          gap: '.5rem',
          flexDirection: 'column',
        }}
        onSubmit={addContact}
      >
        Name <input value={newName} onChange={handleNameChange} />
        Number <input value={newNumber} onChange={handleNumberChange} />
        <button type='submit'>Add</button>
      </form>
      <div>
        {showSuccessMessage && (
          <div className='success_message'>Success muy bien hecho</div>
        )}
      </div>
    </div>
  )
}
