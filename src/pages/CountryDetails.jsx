import React from 'react'
import { useParams } from 'react-router-dom'
import { useTransition, useEffect, useState } from 'react'
import { getindData } from '../API/PostData'
import { NavLink } from 'react-router-dom'

function CountryDetails() {
  const params = useParams()
  console.log(params)

  const [isPending, startTransition] = useTransition()
  const [country, setCountry] = useState({})

  useEffect(() => {
    startTransition(async () => {
      const res = await getindData(params.id)
      console.log(res)
      if (res.status === 200) {
        setCountry(res.data[0])
      }
    })
  }, [])

  if (isPending) {
    return <div>Loading....</div>
  }

  return (
    <section className='country-details-section'>
      <div className='country-details-container'>

    {country && (
        <div className='country-details-card'>
          <div>
            <img src={country.flags?.png} alt={country.flags?.alt} />
          </div>
          <div className='country-details-info'>
            <h1>{country.name?.common}</h1>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Subregion: {country.subregion}</p>
          </div>
        </div>
      )}

     <div className='country-details-btn'>
     <NavLink to='/country'>
        <button className='back-btn'>Back</button>
      </NavLink>
     </div>

      
      </div>
    </section>
  )
}

export default CountryDetails