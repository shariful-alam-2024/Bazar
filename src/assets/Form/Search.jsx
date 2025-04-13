import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="flex justify-center pt-[6.5rem] py-4">
      <form className="flex w-full max-w-2xl relative">
        {/* Search Input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search your favorite product"
          className="w-full py-2 px-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Close Icon (visible only when there is text) */}
        {searchTerm && (
          <MdClose
            className="absolute right-14 top-1/2  w-5 h-5 transform bg-gray-100 rounded-full -translate-y-1/2 text-black cursor-pointer"
            onClick={() => setSearchText('')}
          />
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <IoSearch className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}

export default Search
