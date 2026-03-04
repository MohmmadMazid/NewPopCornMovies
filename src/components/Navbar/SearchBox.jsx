import React, { useState } from 'react'

const SearchBox = ({ query, setQuery }) => {

  const handleSearchQuery = (e) => {
    setQuery(e.target.value)
    console.log(e.target.value)
  }
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleSearchQuery}
    />

  )
}

export default SearchBox