import React from 'react'
import hero1 from '../../assets/services/hero1.svg'
const ServicesPage1 = () => {
  return (
   <>
   <div className='w-full md:h-screen h-[50vh]  bg-white relative' >
      <img src={hero1} className='w-full h-full object-cover object-right ' alt="" />

      <div className='w-full h-fit absolute top-0 '>
        <div className='md:w-1/2 h-full md:py-32 md:px-16 p-8'>
          <h1 className='md:text-7xl text-3xl font-bold w-[40%] md:w-full'>Welcome to Premier <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Admission Services</span></h1>
          <p className='mt-10 text-xl hidden md:block'>Medical Admission is your trusted partner in navigating the complexities of medical and health science admissions. We simplify the journey for MBBS, BDS, BHMS, and BAMS programs at both undergraduate and postgraduate levels. Our mission is to provide expert guidance and comprehensive support, helping you achieve your academic and career aspirations in the medical field.
          </p>
          <button className="md:mt-8 inline-block items-center bg-[#E5C0B8] text-white md:text-3xl font-light text-sm md:py-3 md:px-20 px-5 py-1 mt-3 rounded-full md:rounded-2xl hover:bg-black">
            Join Us <i class="ri-arrow-left-s-fill"></i>
          </button>
        </div>
      </div>
    </div>

    <div className='px-5'>
    <p className='mt-10 text-xl md:hidden text-center'> 
    Medical Admission is your trusted partner in navigating the complexities of medical and health science admissions. We simplify the journey for MBBS, BDS, BHMS, and BAMS programs at both undergraduate and postgraduate levels. Our mission is to provide expert guidance and comprehensive support, helping you achieve your academic and career aspirations in the medical field.
          </p>
    </div>
   </>
  )
}

export default ServicesPage1