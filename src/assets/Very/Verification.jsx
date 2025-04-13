import React, { useState } from 'react';

const Verification = () => {

 const [input, setInput] = useState('')
 const [code, setCode] = useState('')
 const [sentCode, setSentCode] = useState(null)
     const [verified, setVerified] = useState(false)
     

     const generateCode = () => {
       const upperCase = String.fromCharCode(
         65 + Math.floor(Math.random() * 26)
       )
       const number1 = Math.floor(10 + Math.random() * 90) // Generates a two-digit number
       const lowerCase = String.fromCharCode(
         97 + Math.floor(Math.random() * 26)
       )
       const upperCase1 = String.fromCharCode(
         65 + Math.floor(Math.random() * 26)
       )
       const numbers3 = Math.floor(10 + Math.random() * 90) // Generates another two-digit number
       const lowerCase1 = String.fromCharCode(
         97 + Math.floor(Math.random() * 26)
       )

       return `${upperCase}${number1}${lowerCase}${upperCase1}${numbers3}${lowerCase1}`
     }


 // Random কোড তৈরি করার ফাংশন
//  const generateCode = () => {
//    const letters =
//      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
//      String.fromCharCode(65 + Math.floor(Math.random() * 26))
//    const numbers = Math.floor(1000 + Math.random() * 9000).toString()
//    return letters + numbers
//  }

 // কোড পাঠানোর হ্যান্ডলার
 const sendCode = () => {
   const newCode = generateCode()
   setSentCode(newCode)
   alert(`Verification Code: ${newCode}`) // প্রকৃত অ্যাপে API ব্যবহার করবেন
 }

 // কোড যাচাই করার হ্যান্ডলার
 const verifyCode = () => {
   if (code === sentCode) {
     setVerified(true)
     alert('Verification successful!')
   } else {
     alert('Incorrect code. Try again.')
   }
 }



     return (
       <>
         <div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
           <h2 className="text-xl font-bold mb-4">Verification Form</h2>
           <input
             type="text"
             placeholder="Enter phone or email"
             className="w-full p-2 border rounded mb-2"
             value={input}
             onChange={(e) => setInput(e.target.value)}
           />
           <button
             className="w-full bg-blue-500 text-white p-2 rounded"
             onClick={sendCode}
           >
             Send Code
           </button>
           {sentCode && (
             <div className="mt-4">
               <input
                 type="text"
                 placeholder="Enter verification code"
                 className="w-full p-2 border rounded mb-2"
                 value={code}
                 onChange={(e) => setCode(e.target.value)}
               />
               <button
                 className="w-full bg-green-500 text-white p-2 rounded"
                 onClick={verifyCode}
               >
                 Verify
               </button>
             </div>
           )}
           {verified && (
             <p className="text-green-500 mt-2">✅ Verified Successfully!</p>
           )}
         </div>
       </>
     )
};

export default Verification