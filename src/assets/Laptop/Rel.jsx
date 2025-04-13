import React from 'react';
import { myInfo } from './religion';
const Rel = () => {
    
     return (
       <>
         <div className="md:flex lg:flex gap-2 items-center">
           <label htmlFor="registor-your-religion">Select Religion :</label>
           <select
             name="registor-your-religion"
             id="registor-your-religion"
             className="w-full flex-1 rounded border "
           >
             <option value="Select">Select</option>
             {myInfo.map((religion, index) => (
               <option
                 key={index}
                 value={religion.toLowerCase().replace(/\s+/g, '-')}
               >
                 {religion}
               </option>
             ))}
           </select>
         </div>
       </>
     )
};

export default Rel;