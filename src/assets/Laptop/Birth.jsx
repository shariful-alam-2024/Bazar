import React, { useState } from 'react';

const Birth = () => {
     const [hasBirthId, setHasBirthId] = useState('');
     const handleChange = (event) => {
          setHasBirthId(event.target.value)
     };
     return (
       <>
         <div className="md:flex lg:flex gap-2">
           <label htmlFor="" className="md:text-sm">
             your Birth Number :
           </label>
           <select
             name=""
             id=""
             className="flex-1 rounded border"
             onChange={handleChange}
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
           {hasBirthId === 'Yes' && (
             <div className="">
               <label htmlFor="" className="">
                 [Your Birth Number]:
               </label>
               <input
                 type="text"
                 className="w-full flex-1 rounded border"
                                   required
                                   placeholder='Enter Your Birth Number'
               />
             </div>
           )}
         </div>
       </>
     )
};

export default Birth;