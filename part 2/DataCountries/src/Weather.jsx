import { API_KEY } from '../api.js'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Weather({ country }) {
  const [weather, setWeather] = useState([])

  const name = country?.name?.common

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
      )
      .then((response) => setWeather(response.data))
  }, [name])
  return (
    <section>
      {weather.length !== 0 ? (
        <section>
          <h3>{`Weather in ${name}`}</h3>
          <p>temperature {(weather?.main?.temp - 273.15).toFixed(2)} Celsius</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather?.[0].icon}@2x.png`}
          ></img>
          <p>wind {weather?.wind?.speed} m/s</p>
        </section>
      ) : (
        <section>
          <h3>Weather</h3>
        </section>
      )}
    </section>
  )
}
