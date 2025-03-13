import React, { useEffect, useTransition, useState } from 'react'
import { getCountryData } from '../API/PostData'
import CountryCard from '../pages/CountryCard'
import SearchFilter from '../pages/SearchFilter'


function Country() {
  const [isPending, startTransition] = useTransition()
  const [country, setCountry] = useState([])

  const [search, setSearch] = useState()
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData()
      setCountry(res.data)
      console.log(res)
    })
  }, [])

  if (isPending) {

    return <div>Loading....</div>  
  }



  const searchCountry = (curCountry) => {
    if (search){
      return curCountry.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return curCountry
  }

  const filterRegion = (curCountry) => {
    if (filter === 'all') {
      return curCountry
    } else {
      return curCountry.region.toLowerCase().includes(filter.toLowerCase())
    }
  }

  const filteredCountry = country.filter((curCountry) => {
    return searchCountry(curCountry) && filterRegion(curCountry)
  })

  return (
    <section className='country-section'>
      <div className='country-container'>
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}
        country={country} setCountry={setCountry} />
        <ul className='country-grid'>
          {filteredCountry.map((curCountry, index) => {
            return (
              <CountryCard country={curCountry} key={index} />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Country