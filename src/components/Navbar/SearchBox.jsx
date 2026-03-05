import React, { useState } from 'react'

<<<<<<< HEAD
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
=======
const SearchBox = () => {
          const [query, setQuery] = useState("");
    
  return (
     <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
>>>>>>> b481925f4c51918eb229cbce41040e1dfaeaac0c

  )
}

export default SearchBox