import React, { useEffect, useState } from 'react'
import { upa } from './religion'

const Address = () => {
  const [districts] = useState([
    'Barguna',
    'Barisal',
    'Bhola',
    'Jhalokathi',
    'Patuakhali',
    'Pirojpur',
    'Brahmanbaria',
    'Bandarban',
    'Chandpur',
    'Chattogram',
    "Cox's Bazar",
    'Cumilla',
    'Feni',
  ])

  const [presentDistrict, setPresentDistrict] = useState('')
  const [permanentDistrict, setPermanentDistrict] = useState('')
  const [presentUpazila, setPresentUpazila] = useState('')
  const [permanentUpazila, setPermanentUpazila] = useState('')
  const [presentCare, setPresentCare] = useState('')
  const [permanentCare, setPermanentCare] = useState('')
  const [presentVillage, setPresentVillage] = useState('')
  const [permanentVillage, setPermanentVillage] = useState('')
  const [presentPost, setPresentPost] = useState('')
  const [permanentPost, setPermanentPost] = useState('')
  const [presentCode, setPresentCode] = useState('')
  const [permanentCode, setPermanentCode] = useState('')
  const [sameAddress, setSameAddress] = useState(false)

  const handleDistrictChange = (event, setDistrict, setUpazila) => {
    setDistrict(event.target.value)
    setUpazila('') // Reset upazila when district changes
  }

  useEffect(() => {
    if (sameAddress) {
      setPermanentDistrict(presentDistrict)
      setPermanentUpazila(presentUpazila)
      setPermanentCare(presentCare)
      setPermanentVillage(presentVillage)
      setPermanentPost(presentPost)
      setPermanentCode(presentCode)
    }
  }, [
    sameAddress,
    presentDistrict,
    presentUpazila,
    presentCare,
    presentVillage,
    presentPost,
    presentCode,
  ])

  return (
    <div className="md:flex lg:flex justify-between ">
      <div className="">
        <fieldset className="p-6  border rounded-lg">
          <legend className="text-[8px] border rounded p-0.5 ">
            Present Address (বর্তমান ঠিকানা)
          </legend>
          <label>Care of:</label>
          <input
            type="text"
            value={presentCare}
            className="w-full flex-1 rounded border"
            onChange={(e) => setPresentCare(e.target.value)}
            required
          />
          <br />
          <label className="text-[8px]">Village/ Road/ House/ Flat:</label>
          <input
            className="w-full flex-1 rounded border"
            type="text"
            value={presentVillage}
            onChange={(e) => setPresentVillage(e.target.value)}
            required
          />
          <br />
          <label>District:</label>
          <select
            className="w-full flex-1 rounded border"
            value={presentDistrict}
            onChange={(e) =>
              handleDistrictChange(e, setPresentDistrict, setPresentUpazila)
            }
          >
            <option value="">Select</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          <br />
          <label>Upazila:</label>
          <select
            className="w-full flex-1 rounded border"
            value={presentUpazila}
            onChange={(e) => setPresentUpazila(e.target.value)}
          >
            <option value="">Select Upazila</option>
            {presentDistrict &&
              upa[presentDistrict]?.map((upazila) => (
                <option key={upazila} value={upazila}>
                  {upazila}
                </option>
              ))}
          </select>
          <br />
          <label>Post Office:</label>
          <input
            className="w-full flex-1 rounded border"
            type="text"
            value={presentPost}
            onChange={(e) => setPresentPost(e.target.value)}
            required
          />
          <br />
          <label>Post Code:</label>
          <input
            className="w-full flex-1 rounded border"
            type="number"
            value={presentCode}
            onChange={(e) => setPresentCode(e.target.value)}
            required
          />
          <br />
        </fieldset>
      </div>
      {/*  */}
      <div className="">
        <br />
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            checked={sameAddress}
            onChange={() => setSameAddress(!sameAddress)}
          />
          <label className="text-[8px]">Same as Present Address</label>
        </div>
        <br />

        <fieldset className="p-6 border rounded-lg">
          <legend className="text-[8px] border rounded p-0.5 ">
            Permanent Address (স্থায়ী ঠিকানা)
          </legend>
          <label>Care of:</label>
          <input
            className="w-full flex-1 rounded border"
            type="text"
            value={permanentCare}
            onChange={(e) => setPermanentCare(e.target.value)}
            required
            disabled={sameAddress}
          />
          <br />
          <label className="text-[8px]">Village/ Road/ House/ Flat:</label>
          <input
            className="w-full flex-1 rounded border"
            type="text"
            value={permanentVillage}
            onChange={(e) => setPermanentVillage(e.target.value)}
            required
            disabled={sameAddress}
          />
          <br />
          <label>District:</label>
          <select
            className="w-full flex-1 rounded border"
            value={permanentDistrict}
            onChange={(e) =>
              handleDistrictChange(e, setPermanentDistrict, setPermanentUpazila)
            }
            disabled={sameAddress}
          >
            <option value="">Select</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          <br />
          <label>Upazila:</label>
          <select
            className="w-full flex-1 rounded border"
            value={permanentUpazila}
            onChange={(e) => setPermanentUpazila(e.target.value)}
            disabled={sameAddress}
          >
            <option value="">Select Upazila</option>
            {permanentDistrict &&
              upa[permanentDistrict]?.map((upazila) => (
                <option key={upazila} value={upazila}>
                  {upazila}
                </option>
              ))}
          </select>
          <br />
          <label>Post Office:</label>
          <input
            className="w-full flex-1 rounded border"
            type="text"
            value={permanentPost}
            onChange={(e) => setPermanentPost(e.target.value)}
            required
            disabled={sameAddress}
          />
          <br />
          <label>Post Code:</label>
          <input
            className="w-full flex-1 rounded border"
            type="number"
            value={permanentCode}
            onChange={(e) => setPermanentCode(e.target.value)}
            required
            disabled={sameAddress}
          />
          <br />
        </fieldset>
      </div>
    </div>
  )
}

export default Address
