import React, { useState } from 'react';
import { myData } from './religion';
const Number = () => {
      const [selectedCodeNumber, setSelectedCodeNumber] = useState(myData[0].code);
     const [confermPhoneNumber, setConfermPhoneNumber] = useState('');
     return (
          <>
               <div className="md:flex lg:flex gap-2 items-center">
                          <label htmlFor="" className="">
                            Enter Your conferm Mobile Number :
                          </label>
                          <div className="sm:flex gap-2 w-full">
                            <select
                              name=""
                              value={selectedCodeNumber}
                              id=""
                              className="border rounded p-1 bg-white"
                              onChange={(e) => setSelectedCodeNumber(e.target.value)}
                            >
                              {myData.map((item) => (
                                <option key={item.code} value={item.code} className="">
                                  {item.country}({item.code})
                                </option>
                              ))}
                            </select>
                            <input
                              type="number"
                              className="w-full flex-1 rounded border p-2"
                              required
                              onChange={(e) => setConfermPhoneNumber(e.target.value)}
                              value={confermPhoneNumber}
                              placeholder="Enter Your conferm Phone Number"
                            />
                          </div>
                        </div>
          </>
     );
};

export default Number;