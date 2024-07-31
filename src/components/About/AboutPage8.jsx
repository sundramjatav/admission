import React from 'react'
import Carousel from './Carousel'

const AboutPage8 = () => {
    return (
        <div className='w-full md:h-[110vh] h-fit py-20 bg-white '>
            <div className='md:w-[90%] w-full p-5 h-full  m-auto'>
                <div className='flex flex-col'>
                    <h1 className='md:text-7xl font-bold text-4xl text-center hidden md:block'> <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Testimonials from Previous Clients</span></h1>
                    <h1 className='md:text-7xl font-bold text-4xl text-center md:hidden'> Testimonials from <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Previous Clients</span></h1>
                    
                </div>
                <div className='mt-5 mb-16 text-xl md:text-2xl text-center'>
                    <p>Our clients' success stories speak volumes about our commitment to excellence. Here are a few testimonials from students who have benefited from our services</p>
                </div>
                {/* <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-10'>
                    <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 border'>
                        <div className='flex gap-5 items-center'>
                            <div className='w-24 h-24 rounded-md bg-blue-100'></div>
                            <div className=''>
                                <p className='text-xl font-bold'>[Client Name]</p>
                                <p className='text-xl'>
                                MBBS Student</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className='text-xl'>Securing admission to my dream medical college seemed daunting until I found [Company Name]. Their expert guidance and support were instrumental in my success</p>
                        </div>
                    </div>
                    <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 border'>
                        <div className='flex gap-5 items-center'>
                            <div className='w-24 h-24 rounded-md bg-blue-100'></div>
                            <div className=''>
                                <p className='text-xl font-bold'>[Client Name] </p>
                                <p className='text-xl'>MBBS Student</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className='text-xl'>The personalized attention I received was amazing. The team at [Company Name] helped me navigate the complexities of postgraduate admissions with ease</p>
                        </div>
                    </div>
                </div> */}

                <Carousel/>
            </div>
        </div>
    )
}

export default AboutPage8