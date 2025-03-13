import React from 'react'

function SearchFilter({ search, setSearch, filter, setFilter, country, setCountry }) {

    const handleInput = (e) => {
        setSearch(e.target.value)
    };

    const handleFilter = (e) => {
        setFilter(e.target.value)
    };

    const sortCountries = (order) => {
        const sortedCountries = [...country].sort((a, b) => {
            if (order === "asc") {
                return a.name.common.localeCompare(b.name.common)
            } else {
                return b.name.common.localeCompare(a.name.common)
            }
        })
        setCountry(sortedCountries)
    }

  return (
    <section>
       <div className='search-filter-container'>
            <input type='text' placeholder='Search' value={search} onChange={handleInput} />

            <div>
                <button onClick={() => sortCountries("asc")}>Asc</button>
            </div>

            <div>
                <button onClick={() => sortCountries("dsc")}>Dsc</button>
            </div>


            <select value={filter} onChange={handleFilter}>
                <option value='all'>All</option>
                <option value='africa'>Africa</option>
                <option value='americas'>Americas</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default SearchFilter