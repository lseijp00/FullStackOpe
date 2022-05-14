import { useState } from 'react'
import service from '../../services/service'
import './PersonForm.css'
import { v4 as uuidv4 } from 'uuid'

export default function PersonForm({ persons, setPersons }) {
  const [newName, setNewName] = useState('')
  const [previousName, setPreviousName] = useState('')

  const [newNumber, setNewNumber] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const handleNameChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
  }
  const showSuccess = () => {
    setPreviousName(newName)
    setShowSuccessMessage(true)
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 5000)
  }
  const showError = () => {
    setPreviousName(newName)

    setShowErrorMessage(true)
    setTimeout(() => {
      setShowErrorMessage(false)
    }, 5000)
  }

  const addContact = (e) => {
    e.preventDefault()
    const newContact = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: uuidv4()
    }
    const arrNames = persons.map((person) => person.name)

    if (arrNames.includes(newContact.name)) {
      const editableContact = persons.find(
        (person) => person.name === newContact.name
      )
      service
        .editContact(editableContact.id, newContact)
        .then(() => {
          setPersons(
            persons.map((person) =>
              person.id !== editableContact.id ? person : newContact
            )
          )
          showSuccess()
        })
        .catch(() => showError())
    } else {
      service.create(newContact)
      setPersons([...persons, newContact])
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
          flexDirection: 'column'
        }}
        onSubmit={addContact}
      >
        Name <input value={newName} onChange={handleNameChange} />
        Number <input value={newNumber} onChange={handleNumberChange} />
        <button type='submit'>Add</button>
      </form>
      <div>
        {showSuccessMessage && (
          <div className='message success_message'>
            Success, new contact created with name {previousName}
          </div>
        )}
        {showErrorMessage && (
          <div className='message error_message'>
            Information of {previousName} has already been removed
          </div>
        )}
      </div>
    </div>
  )
}
