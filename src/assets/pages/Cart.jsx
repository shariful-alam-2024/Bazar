import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
     const [cartItems, setCartItems] = useState([
       {
         id: 1,
         name: 'Product 1',
         price: 20,
         quantity: 1,
         image: '/download.jpg',
       },
       {
         id: 2,
         name: 'Product 2',
         price: 15,
         quantity: 2,
         image: '/download.jpg',
       },
       {
         id: 3,
         name: 'Product 2',
         price: 15,
         quantity: 2,
         image: '/download.jpg',
       },
       {
         id: 4,
         name: 'Product 2',
         price: 15,
         quantity: 2,
         image: '/download.jpg',
       },
       {
         id: 5,
         name: 'Product 2',
         price: 15,
         quantity: 2,
         image: '/download.jpg',
       },
     ])

     // Update Quantity
     const handleQuantityChange = (id, quantity) => {
       setCartItems((prevItems) =>
         prevItems.map((item) =>
           item.id === id
             ? { ...item, quantity: parseInt(quantity) || 1 }
             : item
         )
       )
     }

     // Remove Item
     const handleRemove = (id) => {
       setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
     }

     // Calculate Total
     const subtotal = cartItems.reduce(
       (acc, item) => acc + item.price * item.quantity,
       0
     )
     const tax = subtotal * 0.1 // 10% tax
     const delivery = 3 // fixed delivery charge
     const total = subtotal + tax + delivery

     return (
       <>
         <div className="bg-gray-100 min-h-screen p-4">
           <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
             <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

             {/* Cart Items */}
             <div className="flex flex-col gap-4">
               {cartItems.map((item) => (
                 <div
                   key={item.id}
                   className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
                 >
                   <div className="flex items-center gap-4">
                     <img
                       src={item.image}
                       alt={item.name}
                       className="w-20 h-20 object-cover rounded"
                     />
                     <div>
                       <h2 className="text-lg font-semibold">{item.name}</h2>
                       <p className="text-gray-500">${item.price.toFixed(2)}</p>
                     </div>
                   </div>

                   <div className="flex items-center gap-4 mt-4 md:mt-0">
                     <input
                       type="number"
                       min="1"
                       value={item.quantity}
                       onChange={(e) =>
                         handleQuantityChange(item.id, e.target.value)
                       }
                       className="w-16 border rounded p-2 text-center"
                     />
                     <p className="font-semibold">
                       ${(item.price * item.quantity).toFixed(2)}
                     </p>
                     <button
                       onClick={() => handleRemove(item.id)}
                       className="text-red-500 hover:text-red-700"
                     >
                       Remove
                     </button>
                   </div>
                 </div>
               ))}

               {cartItems.length === 0 && (
                 <p className="text-center text-gray-500 py-10">
                   Your cart is empty.
                 </p>
               )}
             </div>

             {/* Order Summary */}
             {cartItems.length > 0 && (
               <div className="mt-8">
                 <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                 <div className="space-y-2">
                   <div className="flex justify-between">
                     <p>Subtotal</p>
                     <p>${subtotal.toFixed(2)}</p>
                   </div>
                   <div className="flex justify-between">
                     <p>Tax (10%)</p>
                     <p>${tax.toFixed(2)}</p>
                   </div>
                   <div className="flex justify-between">
                     <p>Delivery</p>
                     <p>${delivery.toFixed(2)}</p>
                   </div>
                   <div className="flex justify-between font-bold text-lg">
                     <p>Total</p>
                     <p>${total.toFixed(2)}</p>
                   </div>
                 </div>

                 {/* Buttons */}
                 <div className="mt-6 flex flex-col md:flex-row gap-4">
                   <Link
                     to="/CheckoutPage"
                     className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full md:w-auto"
                   >
                     Proceed to Checkout
                   </Link>
                   <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded hover:bg-gray-200 w-full md:w-auto">
                     Continue Shopping
                   </button>
                 </div>
               </div>
             )}
           </div>
         </div>
       </>
     )
};

export default Cart;