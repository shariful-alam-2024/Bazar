import React, { useState } from 'react'

const National = () => {
  const [hasNationalId, setHasNationalId] = useState('')

  const handleChange = (event) => {
    setHasNationalId(event.target.value)
  }

  return (
    <div className="md:flex lg:flex gap-2">
      <label htmlFor="national-id">Your National ID:</label>
      <select
        name="national-id"
        id="national-id"
        onChange={handleChange}
        className=" flex-1 rounded border"
      >
        <option value="select">Select</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>

      {hasNationalId === 'yes' && (
        <div id="national-id-container">
          <label htmlFor="national-id-input">[National ID Number]:</label>
          <input
            type="text"
            id="national-id-input"
            name="national-id-input"
            className="w-full flex-1 rounded border"
            required
          />
        </div>
      )}
    </div>
  )
}

export default National
