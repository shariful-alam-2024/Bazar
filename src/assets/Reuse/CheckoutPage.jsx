import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('Card','bkash')

  // Handle Form Changes
  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value })
  }

  // Handle Place Order
  const handlePlaceOrder = (e) => {
    e.preventDefault()
    console.log('Order Placed:', { shippingInfo, paymentMethod })
    alert('Your order has been placed successfully!')
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <form onSubmit={handlePlaceOrder} className="grid md:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={shippingInfo.name}
                onChange={handleChange}
                required
                className="w-full border rounded p-3"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={shippingInfo.address}
                onChange={handleChange}
                required
                className="w-full border rounded p-3"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shippingInfo.city}
                onChange={handleChange}
                required
                className="w-full border rounded p-3"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={shippingInfo.postalCode}
                onChange={handleChange}
                required
                className="w-full border rounded p-3"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={shippingInfo.country}
                onChange={handleChange}
                required
                className="w-full border rounded p-3"
              />
            </div>
          </div>

          {/* Payment and Summary */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>

            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="Card"
                  checked={paymentMethod === 'Card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="bkash"
                  checked={paymentMethod === 'bkash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                bkash
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="Cash"
                  checked={paymentMethod === 'Cash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>

            {/* Order Summary */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>$50.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>$5.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery</p>
                  <p>$3.00</p>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>$58.00</p>
                </div>
              </div>

              {/* Place Order Button */}
              <Link
                to="/BkashPaymentPage"
                className="mt-6 w-full bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
              >
                Place Order
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutPage
