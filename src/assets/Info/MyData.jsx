import React from 'react'
import Rel from '../Laptop/Rel'
import National from '../Laptop/National'
import Birth from '../Laptop/Birth'
import Pasport from '../Laptop/Pasport'
import Driving from '../Laptop/Driving'
import Marital from '../Laptop/Marital'
import Gender from '../Laptop/Gender'
import Mobile from '../Laptop/Mobile'
import Email from '../Laptop/Email'
import Number from '../Laptop/Number'
import Quota from '../Laptop/Quota'
import Departmental from '../Laptop/Departmental'
import Address from '../Laptop/Address'
import Secondary from '../Laptop/Secondary'
import Higher from '../Laptop/Higher'
import Graduation from '../Laptop/Graduation'
import Master from '../Laptop/Master'
import Experience from '../Laptop/Experience'
import OtherExperience from '../Laptop/OtherExperience'
import VerificationCode from '../Laptop/VerificationCode'

const MyData = () => {
  return (
    <form className="pt-32 p-2 max-w-4xl mx-auto">
      <fieldset className="p-4 border rounded-lg">
        <legend className="text-lg font-semibold">Application Form</legend>
        <span className="block mb-4 font-medium">
          <label className="mr-2 font-semibold">Post Name:</label>
          Operations Assistant Route & Fuel (অপারেশন্স অ্যাসিস্ট্যান্ট রুট এন্ড
          ফুয়েল)
        </span>

        <fieldset className="p-2 border rounded-lg mt-4">
          <legend className="text-md font-semibold">Basic Information</legend>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-4">
            {/* Name */}
            <div className="md:flex lg:flex items-center col-span-1">
              <label className="font-bold mx-10">Name :</label>
              <input
                type="text"
                className=" w-full border p-2 flex-1  rounded"
                placeholder="Enter Your Name"
              />
            </div>
            <br />

            {/* Name (Bangla) */}
            <div className="md:flex lg:flex items-center col-span-1">
              <label className="font-medium">আবেদনকারীর নাম (বাংলায়):</label>
              <input
                type="text"
                className="w-full border p-2 flex-1 rounded"
                placeholder="আবেদনকারীর নাম (বাংলায়)"
              />
            </div>
            <br />

            {/* Father's Name */}
            <div className="md:flex lg:flex items-center col-span-1">
              <label className="font-medium">Father's Name:</label>
              <input
                type="text"
                className="w-full border p-2 flex-1 rounded"
                placeholder="Enter your father’s name"
              />
            </div>
            <br />

            {/* Father's Name (Bangla) */}
            <div className="md:flex lg:flex items-center col-span-1">
              <label className="font-medium">পিতার নাম (বাংলায়):</label>
              <input
                type="text"
                className="w-full border p-2 flex-1 rounded"
                placeholder="পিতার নাম (বাংলায়)"
              />
            </div>
            <br />

            {/* Mother's Name */}
            <div className="md:flex lg:flex items-center col-span-1">
              <label className="font-medium">Mother's Name:</label>
              <input
                type="text"
                className="w-full border p-2 flex-1 rounded"
                placeholder="Enter your mother’s name"
              />
            </div>
            <br />

            {/* Mother's Name (Bangla) */}
            <div className="md:flex lg:flex items-center col-span-1">
              <label className="font-medium">মাতার নাম (বাংলায়):</label>
              <input
                type="text"
                className="w-full border p-2 flex-1 rounded"
                placeholder="মাতার নাম (বাংলায়)"
              />
            </div>
            <br />

            {/* Date of Birth (YYYY-MM-DD) */}
            <div className="md:flex lg:flex items-center col-span-1">
              <label className="">Date of Birth (YYYY-MM-DD) :</label>
              <input
                type="date"
                name="dob"
                className="w-full border p-2 flex-1 rounded"
                placeholder="YYYY-MM-DD"
              />
            </div>
            <br />

            {/* Select your country */}
            <div className="md:flex lg:flex gap-2 items-center col-span-1">
              <label className="">Select Country :</label>
              <select
                name=""
                id="name"
                className="w-full flex-1 rounded border"
              >
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
              </select>
            </div>
            <br />

            {/* Religion */}
            <Rel />
            <br />
            {/* national */}
            <National />
            <br />
            {/* birth registation */}
            <Birth />
            {/*pasport number  */}
            <Pasport />
            {/* driving license */}
            <Driving />
            {/*  */}
            <Marital />
            {/* gender */}
            <Gender />
            {/* mobile number  conferm mobile number email id*/}
            <Mobile />
            {/*  */}
            <Number />

            {/* email */}
            <Email />
            {/*  quota*/}
            <Quota />
            {/* departmental */}
            <Departmental />
            {/* address */}
            <Address />
            {/* ssc-equivlant */}
            <Secondary />

            {/* higher-secondary */}
            <Higher />
            {/* graduation */}
            <Graduation />
            {/* masters */}
            <Master />
            {/* experience */}
            <Experience />
            {/*  */}
            <OtherExperience />
            {/*  VerificationCode*/}
            <VerificationCode/>
          </div>
        </fieldset>
      </fieldset>
    </form>
  )
}

export default MyData
