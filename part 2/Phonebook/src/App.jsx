import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter/Filter'
import PersonForm from './components/PersonForm/PersonForm'
import Persons from './components/Persons/Persons'
import service from './services/service'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [personsFiltered, setPersonsFiltered] = useState([])

  useEffect(() => {
    service
      .getAll()
      .then((response) => setPersons(response))
      .catch((e) => console.log(e))
  }, [])
  console.log(persons)
  return (
    <div className='App'>
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
        setPersons={setPersons}
        filter={filter}
        personsFiltered={personsFiltered}
      />
    </div>
  )
}

export default App
