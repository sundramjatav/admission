import React from 'react'
import doctor1 from '../../assets/eye.png';
const Aboutpage4 = () => {
  return (
    <div className='relative w-full md:h-screen  bg-[#EED5CE]'>
      <div className='w-full h-full absolute top-0  hidden md:flex ' style={{ backgroundImage: `url(${doctor1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-full h-full bg-gradient-to-r from-[#bfdadf9f] to-[#ffffff] hidden md:flex flex-row-reverse'>
        <div className='md:w-1/2 w-full h-full p-12  '>
          <div className='flex flex-col'>
            <h1 className='md:text-7xl font-bold text-4xl'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Vision</span></h1>
            {/* <div className='md:w-[24rem] w-52 h-2 rounded-full bg-[#84DDDC]'></div> */}
          </div>
          <div>
            <p className='md:text-[1.8rem]  text-[1.4rem] font-normal py-5'>
              Our vision is to be the leading admission consultancy for medical education, recognized for our integrity, expertise, and commitment to excellence. We envision a future where every aspiring medical student has the opportunity to pursue their dreams without the barriers of complex admission procedures.
              <br /><br />
              Through our dedicated efforts, we seek to contribute to the growth and development of the healthcare industry by nurturing the next generation of medical professionals.

            </p>
          </div>
        </div>
        </div>
        
      </div>
      <div className='w-full h-fit md:hidden' style={{ backgroundImage: `url(${doctor1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-full h-full ] p-5 flex-col flex justify-between py-16 bg-gradient-to-r from-[#bfdadf9f] to-[#ffffff]'>
          <div className='flex flex-col'>
          <h1 className='md:text-7xl font-bold text-4xl'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Vision</span></h1>
            {/* <h1 className='md:text-7xl font-bold text-6xl'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Vision</span></h1> */}
            {/* <div className='md:w-[24rem] w-52 h-2 rounded-full bg-[#84DDDC]'></div> */}
          </div>
          <div>
            <p className='md:w-[60%] text-xl font-normal py-5'>
            Our vision is to be the leading admission consultancy for medical education, recognized for our integrity, expertise, and commitment to excellence. We envision a future where every aspiring medical student has the opportunity to pursue their dreams without the barriers of complex admission procedures.
              <br /><br />
              Through our dedicated efforts, we seek to contribute to the growth and development of the healthcare industry by nurturing the next generation of medical professionals.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage4