import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [newCountry, setNewCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [showCountry, setShowCountry] = useState(false)
  const [countryDetails, setShowCountryDetails] = useState([])

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

  const showDetails = (country) => {
    setShowCountry(true)
    setShowCountryDetails(country)
  }

  console.log(countries)
  return (
    <div className='App'>
      <div>
        <label>Find Countries</label>
        <input value={newCountry} type='text' onChange={handleChange} />
      </div>
      <div className='wrapped-sections'>
        <section>
          <h3>Countries</h3>
          {countries.length < 10 && countries.length >= 1 ? (
            countries.map((country) => (
              <div key={country.name.common} className='country'>
                <p key={country.name.common}>{country.name.common}</p>
                <button
                  className='country__button'
                  onClick={() => showDetails(country)}
                >
                  show
                </button>
              </div>
            ))
          ) : (
            <p>No countries found</p>
          )}
        </section>
        <section>
          {showCountry ? (
            <div>
              <h3>{countryDetails.name.common}</h3>
              <p>capital {countryDetails.capital}</p>
              <p>area {countryDetails.area}</p>
              <h5>languages:</h5>
              <ul>
                {Object.values(countryDetails.languages).map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
              <img src={countryDetails.flags.svg} alt='' />
            </div>
          ) : (
            <p>No se han clicado detalles</p>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
