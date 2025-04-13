import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    setQuery(e.target.value)
    if (onSearch) {
      onSearch(e.target.value)
    }
  }

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white shadow-sm w-full max-w-md ">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="w-full p-2 outline-none bg-transparent text-gray-700"
      />
    </div>
  )
}

const Search = () => {
  return (
    <div>
      <SearchBar onSearch={(query) => console.log('Searching for:', query)} />
    </div>
  )
}

export default Search
