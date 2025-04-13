import React, { useState } from 'react'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FaSlash } from 'react-icons/fa'

const NotificationIcon = () => {
  const [notificationsOn, setNotificationsOn] = useState(true)
  const [count, setCount] = useState(20)

  const toggleNotifications = () => {
    setNotificationsOn((prev) => !prev)
  }

  return (
    <div className="relative inline-block">
      {/* Notification Icon */}
      <button
        onClick={toggleNotifications}
        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition relative"
      >
        {notificationsOn ? (
          <IoNotificationsOutline className="w-6 h-6 text-gray-700" />
        ) : (
          <div className="relative">
            <IoNotificationsOutline className="w-6 h-6 text-gray-700" />
            <FaSlash className="absolute top-0 left-0 w-6 h-6 text-black" />
          </div>
        )}
      </button>

      {/* Notification Badge */}
      {notificationsOn && count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  )
}

export default NotificationIcon
