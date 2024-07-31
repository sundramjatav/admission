import React from 'react'
import student from '../../assets/Contact/student.svg'
const ContactPage1 = () => {
  return (
    <div className='w-full lg:h-screen h-fit bg-[#CDE6EA] gap-5 flex flex-col lg:flex-row  lg:p-0'>
    <div className='w-full lg:w-[50%] h-full flex items-start justify-center flex-col'>
        
       <div className='flex flex-col items-start gap-5 lg:p-20 p-8'>
       <h1 className='md:text-7xl text-4xl font-semibold   relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '> Contact Us</h1>
       <p className='lg:text-xl text-lg'>Are you ready to take the next step in your medical education journey? Our dedicated team is here to assist you with every aspect of your admission process. Whether you're interested in MBBS (UG, PG), BDS (UG, PG), BHMS (UG, PG), or BAMS (UG, PG), we are committed to providing you with the best guidance and support. Reach out to us today and secure your future in the medical field.</p>
       </div>
        <div className='w-[90%] h-32 bg-[#52C6C5] rounded-r-full px-8 flex items-center justify-center'>
            <h1 className='md:text-4xl text-3xl font-semibold    '>Admission Services for MBBS, BDS, BHMS, BAMS</h1>
        </div>
    </div>
    <div className='w-full lg:w-[50%] h-full  relative pt-10 '>
        <img src={student} className='w-full h-full ml-0' alt="" />
    </div>
</div>
  )
}

export default ContactPage1