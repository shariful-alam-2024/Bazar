import React from 'react'

const OtherExperience = () => {
  return (
    <fieldset className="border rounded-lg p-4 w-full ">
      <legend className="text-lg font-semibold">Other Experiences</legend>

      <div className="mt-4">
        <label
          htmlFor="computer-experience"
          className="block text-sm font-medium"
        >
          1) Do you have expertise in Computer Operation?
        </label>
        <select
          name="computer-experience"
          id="computer-experience"
          className="mt-1 block w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="mt-4">
        <label
          htmlFor="english-experience"
          className="block text-sm font-medium"
        >
          2) Do you have expertise in English Conversation?
        </label>
        <select
          name="english-experience"
          id="english-experience"
          className="mt-1 block w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </fieldset>
  )
}

export default OtherExperience
