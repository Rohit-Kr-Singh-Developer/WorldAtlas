import React from 'react'
import CountryData from '../API/CountryData'

function About() {
  return (
   <div className='about-section'>
    <div className='about-container'>
      <div>
        <h2 className="container-title">
          Here are the Interesting Facts
          <br />
          we are proud of
        </h2>
      </div>
      <div className='about-card'>
          {
            CountryData.map((country,) => {
              const { id, countryName, capital, population, interestingFact } =
            country;
              return(
                  <div className='main-card' key={id}>
                      <h2>{countryName}</h2>
                      <p>capital : {capital}</p>
                    <p>population : {population}</p>
                    <p>interestingFact : {interestingFact}</p>
                  </div>
              )
            })

          }
      </div>
    </div>
   </div>
  )
}

export default About