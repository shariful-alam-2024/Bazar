import { useState } from 'react'

const DateTime = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [date, setDate] = useState('')

  const handleCheckboxChange = () => {
    if (!isChecked) {
      const today = new Date()
      today.setHours(today.getHours() + 6) // Convert UTC to Bangladesh time (UTC+6)
      const bdDate = today.toISOString().split('T')[0] // Get the date in YYYY-MM-DD format
      setDate(bdDate)
    } else {
      setDate('')
    }
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">Start Date</label>
          <input type="date" className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">End Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <input
          type="checkbox"
          id="current-date"
          className="w-4 h-4"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="current-date" className="text-sm">
          Currently Working
        </label>
      </div>
    </div>
  )
}

export default DateTime
