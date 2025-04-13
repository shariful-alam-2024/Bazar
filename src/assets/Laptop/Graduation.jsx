import React, { useEffect, useState } from 'react'
import { university } from './religion'
import { subject } from './religion'

const Graduation = () => {
  //if you complete graduation then click check button
  

const [isChecked, setIsChecked] = useState(false)
 const handleCheckboxChange = () => {
   setIsChecked((prev) => !prev)
 }

//gpa section
  const [hasGpa, setGpa] = useState('')
  const handleChange = (event) => {
    setGpa(event.target.value)
  }
//passing year section
  const [years, setYears] = useState([])
  useEffect(() => {
    const yearList = Array.from({ length: 26 }, (_, i) => 2000 + i)
    setYears(yearList)
  }, [])

  return (
    <>
      <div className="p-2  ">
        <div className="flex  gap-3">
          <input
            type="checkbox"
            id="toggleButton"
            value={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="toggleButton" className="underline text-green-700">
            If Applicable
          </label>
        </div>

        <fieldset
          id="myFieldset"
          className={`border  p-4 rounded-md ${
            !isChecked ? 'opacity-35 ' : ''
          }`}
        >
          <legend className="font-semibold text-lg">Graduation Details:</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="space-y-4">
              <div>
                <label htmlFor="roll" className="block text-sm font-medium">
                  Roll No/ID:
                </label>
                <input
                  type="number"
                  id="roll"
                  className="w-full border rounded p-2"
                  placeholder="Enter your Roll No/ID"
                />
              </div>

              <div>
                <label
                  htmlFor="university"
                  className="block text-sm font-medium"
                >
                  University:
                </label>
                <select
                  id="university"
                  className="w-full border rounded p-2"
                  defaultValue="select"
                >
                  <option value="select">Select</option>
                  {university.map((myUniversity, index) => (
                    <option
                      key={index}
                      value={myUniversity.toLowerCase().replace(/\s+/g, '-')}
                    >
                      {myUniversity}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject:
                </label>
                <select
                  id="subject"
                  className="w-full border rounded p-2"
                  defaultValue="select"
                >
                  <option value="select">Select</option>
                  {subject.map((mySubject, index) => (
                    <option
                      key={index}
                      value={mySubject.toLowerCase().replace(/\s+/g, '-')}
                    >
                      {mySubject}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="passing_year"
                  className="block text-sm font-medium"
                >
                  Passing Year:
                </label>
                <select
                  id="passing_year"
                  className="w-full border rounded p-2"
                  defaultValue="select"
                >
                  <option value="select">Select</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="result" className="block text-sm font-medium">
                  Result:
                </label>
                <select
                  id="result"
                  className="w-full border rounded p-2"
                  onChange={handleChange}
                  defaultValue="select"
                >
                  <option value="select">Select</option>
                  <option value="GPA(out-of-5)">GPA (out of 5)</option>
                  <option value="GPA(out-of-4)">GPA (out of 4)</option>
                  <option value="passed">Passed</option>
                </select>
              </div>

              {/* GPA Input Field (Conditional Rendering) */}
              {(hasGpa === 'GPA(out-of-5)' || hasGpa === 'GPA(out-of-4)') && (
                <div>
                  <label htmlFor="gpa" className="block text-sm font-medium">
                    Enter GPA:
                  </label>
                  <input
                    type="number"
                    id="gpa"
                    className="w-full border rounded p-2"
                    placeholder="Enter Your GPA"
                  />
                </div>
              )}
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default Graduation
