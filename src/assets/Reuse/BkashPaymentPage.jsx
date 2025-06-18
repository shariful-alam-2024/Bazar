import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BkashPaymentPage = () => {
  const navigate = useNavigate()
  const [bkashNumber, setBkashNumber] = useState('')
  const [pin, setPin] = useState('')

  const handlePayment = (e) => {
    e.preventDefault()

    if (bkashNumber.length !== 11 || pin.length !== 5) {
      alert('Please enter valid bKash number and PIN!')
      return
    }

    // এখানে বাস্তবে Payment API কল করা হবে
    alert('Payment Successful!')

    // সফল হলে Success পেজে নিয়ে যাবে
    navigate('/order-success')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          bKash Payment
        </h2>

        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              bKash Number
            </label>
            <input
              type="text"
              value={bkashNumber}
              onChange={(e) => setBkashNumber(e.target.value)}
              placeholder="01XXXXXXXXX"
              required
              className="w-full border p-3 rounded focus:outline-pink-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              PIN/OTP
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="*****"
              required
              className="w-full border p-3 rounded focus:outline-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default BkashPaymentPage
