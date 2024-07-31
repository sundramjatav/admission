import React from 'react'
import hero from '../../assets/services/hero.svg'
const Services1Page1 = () => {
  return (
   <>
    <div className='w-full md:h-screen h-[50vh]  bg-white relative' >
      <img src={hero} className='w-full h-full object-cover object-right ' alt="" />

      <div className='w-full h-fit absolute top-0 '>
        <div className='md:w-1/2 h-full md:py-20 md:px-16 p-8'>
          <h1 className='md:text-7xl text-3xl font-bold w-[40%] md:w-full'>Welcome to Your Trusted Partner for  <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5]'>Medical Admissions</span></h1>
          <p className='mt-10 text-xl hidden md:block'>Welcome to our comprehensive medical admission services platform. We specialize in assisting students and professionals in securing admissions for a range of medical courses.
          <br /> <br /> Whether you're pursuing undergraduate (UG) or postgraduate (PG) degrees in MBBS, BDS, BHMS, BAMS, or  , our expert guidance and personalized services ensure a smooth and successful admission process.
            Our dedicated team understands the intricacies of medical admissions and is committed to helping you achieve your educational and career goals.
          </p>
          <button className="md:mt-6 inline-block items-center bg-[#E5C0B8] text-white md:text-3xl font-light text-sm md:py-3 md:px-20 px-5 py-1 mt-3 rounded-full md:rounded-2xl hover:bg-black">
            Join Us <i class="ri-arrow-left-s-fill"></i>
          </button>
        </div>
      </div>
    </div>

    <div className='px-5'>
    <p className='mt-10 text-xl md:hidden text-center'>Welcome to our comprehensive medical admission services platform. We specialize in assisting students and professionals in securing admissions for a range of medical courses.
          <br /> <br /> Whether you're pursuing undergraduate (UG) or postgraduate (PG) degrees in MBBS, BDS, BHMS, BAMS, or  , our expert guidance and personalized services ensure a smooth and successful admission process. <br /> <br />
            Our dedicated team understands the intricacies of medical admissions and is committed to helping you achieve your educational and career goals.
          </p>
    </div>
   </>
  )
}

export default Services1Page1