import React from 'react'
import image5 from '../../assets/services/image5.jpeg'
import image6 from '../../assets/services/image6.jpeg'
const ServicesPage3 = () => {
  return (
    <div className='w-full h-fit pt-10 md:my-10 md:px-8'>  
        <h1 className='md:text-[5rem] leading-none text-3xl  font-bold text-center  text-black relative'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Documentation Support</span></h1>

        <div className='w-full grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 md:px-10 px-8 md:mt-12 mt-8'>
            <div className='w-full md:h-[49rem] h-fit shadow-md rounded-lg overflow-hidden bg-[#ffffff]'>
                <div className='w-full h-1/2 bg-red-200 relative'>
                    <img src={image5} className='w-full h-full object-cover object-top' alt="" />
                    
                </div>
                <div className='md:p-8 p-4'>
                    <div className='flex gap-5 items-center justify-center '>
                        <h1 className=' md:text-4xl text-2xl font-semibold text-center'>Application Form Filling</h1>
                    </div>
                    <div className='py-5 md:text-[1.8rem] md:leading-9 text-xl text-center  text-black/50'>
                        <p>
                        Accurately completing application forms is crucial to avoid delays and rejections. Our team assists you in filling out these forms meticulously, ensuring all information is correct and complete. This service minimizes the risk of errors and omissions that could potentially impact your application.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full md:h-[49rem] h-fit shadow-md rounded-lg overflow-hidden bg-[#ffffff]'>
            <div className='w-full h-1/2 bg-red-200 relative'>
                    <img src={image6} className='w-full h-full object-cover object-top' alt="" />
                    
                </div>
                <div className='md:p-8 p-4'>
                    <div className='flex gap-5 items-center justify-center '>
                        <h1 className=' md:text-4xl text-2xl font-semibold text-center'>Document Verification Guidance</h1>
                    </div>
                    <div className='py-5 md:text-[1.8rem] md:leading-9 text-xl text-center  text-black/50'>
                        <p>
                        Proper documentation is essential for a successful application. We guide you in gathering, verifying, and organizing all required documents, ensuring they meet the specific requirements of the institutions you are applying to. This comprehensive support ensures your application is thorough and professional, increasing your chances of acceptance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesPage3