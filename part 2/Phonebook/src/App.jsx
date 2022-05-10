import { useState } from 'react'
import './App.css'
import Filter from './components/Filter/Filter'
import PersonForm from './components/PersonForm/PersonForm'
import Persons from './components/Persons/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])

  const [filter, setFilter] = useState('')
  const [personsFiltered, setPersonsFiltered] = useState([])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        setFilter={setFilter}
        setPersonsFiltered={setPersonsFiltered}
      />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        personsFiltered={personsFiltered}
      />
    </div>
  )
}

export default App
