import React, { useState } from 'react'
import { employmentTypes } from './religion' // Ensure correct import
import { IoMdAddCircleOutline } from 'react-icons/io'

import DateTime from './DateTime'
const Experience = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [experiences, setExperiences] = useState([])
 

  // 

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev)
    
  }
  
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: experiences.length + 1,
        employmentType: '',
        designation: '',
        startDate: '',
        endDate: '',
        organization: '',
        address: '',
        description: '',
      },
    ])
  }

  return (
    <div className=" ">
      {/* Checkbox for applicability */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="job-experience"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-4 h-4"
        />
        <label htmlFor="job-experience" className="text-gray-700 font-medium">
          If applicable
        </label>
      </div>

      {/* Experience Fieldset */}
      <fieldset
        disabled={!isChecked}
        className="mt-4 p-4 border rounded-md opacity-45"
      >
        <legend className="font-semibold text-lg flex justify-between items-center">
          Job Experience
          <button
            type="button"
            onClick={addExperience}
            disabled={!isChecked}
            className="px-3 py-1 text-xs flex gap-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            <IoMdAddCircleOutline className="w-4 h-4" />
            Add Experience
          </button>
        </legend>

        {/* Experience Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Employment Type</label>
            <select className="w-full p-2 border rounded-md">
              <option value="">Select</option>
              {employmentTypes.map((type, index) => (
                <option
                  key={index}
                  value={type.toLowerCase().replace(/\s+/g, '-')}
                >
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Designation/Post
            </label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
        </div>
        {/*  */}
        <DateTime />
        {/*  */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Organization</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Job Description</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows="3"
          ></textarea>
        </div>
      </fieldset>

      {/* Display Added Experiences */}
      {experiences.map((exp, index) => (
        <fieldset key={exp.id} className="mt-6 p-4 border rounded-md">
          <legend className="font-semibold text-lg">
            Job Experience {index + 1}
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium">
                Employment Type
              </label>
              <select className="w-full p-2 border rounded-md">
                <option value="">Select</option>
                {employmentTypes.map((type, idx) => (
                  <option
                    key={idx}
                    value={type.toLowerCase().replace(/\s+/g, '-')}
                  >
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Designation/Post
              </label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium">Start Date</label>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">End Date</label>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium">Organization</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Job Description</label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows="3"
            ></textarea>
          </div>
        </fieldset>
      ))}
    </div>
  )
}

export default Experience
