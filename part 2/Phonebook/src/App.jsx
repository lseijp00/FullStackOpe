import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Filter from './components/Filter/Filter'
import PersonForm from './components/PersonForm/PersonForm'
import Persons from './components/Persons/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [personsFiltered, setPersonsFiltered] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data))
  }, [])

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
