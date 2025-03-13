import React from 'react'
import { NavLink } from 'react-router-dom'

function CountryCard({ country }) {
  const { name, flags, population, region, capital } = country
  return (
    <li className='country-card'>
      <img src={flags.svg} alt={flags.alt} />
      <div className='country-info'>
        <h3>{name.common.length > 10 ? name.common.slice(0,10) + "..." : name.common}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
      <NavLink to={`/country/${name.common}`}>
        <button className='read-more-btn'>Read More</button>
      </NavLink>
    </li>
  )
}

export default CountryCard