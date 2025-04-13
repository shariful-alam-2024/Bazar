import React, { useState } from 'react';

const Driving = () => {
     const [isDrivingLicense, setDrivingLicense] = useState('');
     const handelChange = (event) => {
          setDrivingLicense(event.target.value);
     }
     return (
       <>
         <div className="md:flex lg:flex gap-2">
           <label htmlFor="" className="md:text-sm">
             Your driving License Number :
           </label>
           <select
             name=""
             id=""
             className="flex-1 rounded border"
             onChange={handelChange}
           >
             <option value="select" className="">
               select
             </option>
             <option value="No" className="">
               No
             </option>
             <option value="Yes" className="">
               Yes
             </option>
           </select>
           {isDrivingLicense === 'Yes' && (
             <div className="">
               <label htmlFor="" className="">
                 [Your driving License Number]:
               </label>
               <input
                 type="text"
                 className="w-full flex-1 rounded border"
                 placeholder="Pasport Number"
               />
             </div>
           )}
         </div>
       </>
     )
};

export default Driving;