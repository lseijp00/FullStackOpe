import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [newCountry, setNewCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const arrCountries = response.data.filter((country) =>
        country.name.common.toLowerCase().includes(newCountry.toLowerCase())
      )
      setCountries(arrCountries)
    })
  }, [newCountry])

  const handleChange = (e) => {
    e.preventDefault()
    setNewCountry(e.target.value)
  }
  console.log(countries)
  return (
    <div className='App'>
      <label>Find Countries</label>
      <input value={newCountry} type='text' onChange={handleChange} />
      <section>
        <h3>Countries</h3>
        {countries.length < 10 && countries.length > 1 ? (
          countries.map((country) => (
            <p key={country.name.common}>{country.name.common}</p>
          ))
        ) : countries.length === 1 ? (
          countries.map((country) => (
            <div key={country}>
              <h3>{country.name.common}</h3>
              <p>capital {country.capital}</p>
              <p>area {country.area}</p>
              <h5>languages:</h5>
              <ul>
                {Object.values(country.languages).map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
              <img src={country.flags.svg} alt='' />
            </div>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </section>
    </div>
  )
}

export default App
