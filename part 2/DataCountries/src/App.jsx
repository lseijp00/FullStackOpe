import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './Weather'

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

  return (
    <div className='App'>
      <div className='header'>
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
            <div className='details'>
              <h3>{countryDetails.name.common}</h3>
              <p>Capital {countryDetails.capital}</p>
              <p>Area {countryDetails.area}</p>
              <h5>Languages:</h5>
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
        <Weather showCountry={showCountry} country={countryDetails} />
      </div>
    </div>
  )
}

export default App
