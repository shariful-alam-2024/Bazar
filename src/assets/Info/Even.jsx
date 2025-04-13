import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Laptop', price: 1200 },
       { id: 2, name: 'Smartphone', price: 800 },
       { id: 3, name: 'SmartShow', price: 1800 },
       { id: 4, name: 'SmartClock', price: 18000},
       { id: 5, name: 'SmartBook', price: 18003 },
       { id: 6, name: 'SmartPen', price: 18002 },
       { id: 7, name: 'SmartMobile', price: 18004 },
       { id: 8, name: 'SmartTon', price: 18003 },

    
  ])

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center p-2 bg-gray-100 rounded-full hover:bg-gray-200"
      >
        <FaShoppingCart className="w-6 h-6 text-gray-700" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {/* Cart Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-4 z-10">
          <h3 className="font-semibold text-lg">Cart Items</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b py-1"
                >
                  <span>{item.name}</span>
                  <span className="text-gray-600">${item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
       </div>
       
  )
}

export default Cart
