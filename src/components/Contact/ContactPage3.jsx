
import React, { useState } from 'react'
import boy from '../../assets/Contact/boy.svg'
const ContactPage3 = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: '',
    contactMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };


  return (
    <div className='w-full lg:h-[120vh] h-fit lg:bg-[#EBD8D3] lg:py-28'>
      <div className='lg:w-[85%] h-full bg-white m-auto lg:rounded-3xl shadow-lg flex flex-col lg:flex-row overflow-hidden'>
        <div className='lg:w-1/3 h-full hidden lg:block p-5'>
          <img src={boy} className='w-full h-full object-contain' alt="" />
        </div>
        <div className='lg:w-2/3 h-full bg-[#D9F1F1] lg:rounded-3xl rounded-xl shadow-lg lg:px-20 p-8'>
          <form onSubmit={handleSubmit} className="w-full  rounded-lg">

              <h1 className='text-3xl font-semibold py-5 '>Inquiry Form</h1>

            <div className="mb-4">
              <label className="block text-[#8A8A8A] bg-transparent text-lg font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Full Name'
                className=" bg-transparent appearance-none border-b-2 text-lg border-[#8A8A8A] rounded w-full py-2 px-3 text-[#8A8A8A] leading-tight focus:outline-none "
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#8A8A8A] text-lg font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className="bg-transparent appearance-none border-b-2 text-lg border-[#8A8A8A]  rounded w-full py-2 px-3 text-[#8A8A8A] leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#8A8A8A] text-lg font-bold mb-2" htmlFor="course">
                Course Interested In
              </label>
              <select
                name="course"
                id="course"
                value={formData.course}
                onChange={handleChange}
                className="bg-transparent appearance-none border-b-2 border-[#8A8A8A]  text-lg rounded w-full py-2 px-3 text-[#8A8A8A] leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">
                  Select a course</option>
                <option value="mbbs">MBBS [UG , PG ]</option>
                <option value="mds">MDS [UG , PG ]</option>
                <option value="bds">BDS [UG , PG ]</option>
                <option value="bhms">BHMS [UG , PG ]</option>
                <option value="bams">BAMS [UG , PG ]</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-[#8A8A8A] text-lg font-bold mb-2" htmlFor="contactMethod">
                Preferred Contact Method
              </label>
              <select
                name="contactMethod"
                id="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="bg-transparent appearance-none border-b-2 border-[#8A8A8A]  text-lg rounded w-full py-2 px-3 text-[#8A8A8A] leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select a contact method</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div className="flex items-center justify-between py-5">
              <button
                type="submit"
                className="bg-[#84DDDC] hover:bg-[#87f7f5] w-full text-black text-2xl font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage3