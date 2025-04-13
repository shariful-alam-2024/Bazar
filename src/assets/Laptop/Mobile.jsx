import React, { useState } from 'react';
import { countryCodes } from './religion';
const Mobile = () => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [phoneNumber,setPhoneNumber] = useState('');
     return (
       <>
         <div className="md:flex lg:flex gap-2 items-center">
           <label htmlFor="" className="">
             Enter Your Mobile Number :
           </label>
           <div className="sm:flex gap-2 w-full">
             <select
               name=""
               value={selectedCode}
               id=""
               className="border rounded p-1 bg-white"
               onChange={(e) => setSelectedCode(e.target.value)}
             >
               {countryCodes.map((item) => (
                 <option key={item.code} value={item.code} className="">
                   {item.country}({item.code})
                 </option>
               ))}
             </select>
             <input
               type="number"
               className="w-full flex-1 rounded border p-2"
               required
               onChange={(e) => setPhoneNumber(e.target.value)}
               value={phoneNumber}
               placeholder="Enter Your Phone Number"
             />
           </div>
         </div>
         {/*  */}
         
       </>
     )
};

export default Mobile;