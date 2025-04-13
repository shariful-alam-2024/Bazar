import React, { useEffect, useState } from 'react'
import { board } from './religion'
import { group } from './religion'

const Secondary = () => {
  const [hasGpa, setGpa] = useState('')
  const handleChange = (event) => {
    setGpa(event.target.value)
  }

  const [years, setYears] = useState([])
  useEffect(() => {
    const yearList = Array.from({ length: 26 }, (_, i) => 2000 + i)
    setYears(yearList)
  }, [])

  return (
    <fieldset className="border p-4 rounded-lg">
      <legend className="text-lg font-semibold">SSC/Equivalent Level</legend>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="roll_no" className="block text-sm font-medium">
              Roll No:
            </label>
            <input
              type="number"
              id="roll_no"
              className="w-full border rounded p-2"
              placeholder="Enter your Roll"
            />
          </div>
          <div>
            <label htmlFor="group" className="block text-sm font-medium">
              Group
            </label>
            <select id="group" className="w-full border rounded p-2">
              <option value="select">Select</option>
              {group.map((myGroup, index) => (
                <option
                  key={index}
                  value={myGroup.toLowerCase().replace(/\s+/g, '-')}
                >
                  {myGroup}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="board" className="block text-sm font-medium">
              Select Board
            </label>
            <select id="board" className="w-full border rounded p-2">
              <option value="select">Select</option>
              {board.map((myBoard, index) => (
                <option
                  key={index}
                  value={myBoard.toLowerCase().replace(/\s+/g, '-')}
                >
                  {myBoard}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="ssc_passing_year"
              className="block text-sm font-medium"
            >
              Passing Year
            </label>
            <select id="ssc_passing_year" className="w-full border rounded p-2">
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
            >
              <option value="select">Select</option>
              <option value="GPA(out-of-5)">GPA(out-of-5)</option>
              <option value="passed">Passed</option>
            </select>
          </div>

          {hasGpa === 'GPA(out-of-5)' && (
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
  )
}

export default Secondary
