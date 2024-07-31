import React from 'react'
import one from '../../assets/one.svg'
import two from '../../assets/two.svg'
import three from '../../assets/three.svg'
import four from '../../assets/four.svg'
import five from '../../assets/five.svg'
const AboutPage5 = () => {
    return (
        <div className='w-full h-fit bg-gradient-to-r from-[#CDE6EA] to-[#E5F0F2] md:py-20 py-5'>
            <div className=''>
                    <h1 className='md:text-7xl font-bold md:text-center px-6 text-4xl'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>We aspire to</span></h1>
            </div>
            <div className='w-[90%] h-full md:p-5 m-auto mt-10 grid md:grid-cols-3 md:gap-20 gap-10 grid-cols-1'>
                <div className='h-64 w-full flex flex-col items-center justify-center bg-[#EED5CE] p-5'>
                    <div className='p-2'>
                        <img src={one} className='w-20' alt="" />
                    </div>
                    <p className='text-2xl text-center'>  Foster a culture of excellence and continuous improvement in our services.</p>
                </div>
                <div className='h-64 w-full flex flex-col items-center justify-center bg-[#EED5CE] p-5'>
                    <div className='p-2'>
                        <img src={two} className='w-20' alt="" />
                    </div>
                    <p className='text-2xl text-center'>  Build long-lasting relationships with educational institutions to provide students with exclusive opportunities</p>
                </div> <div className='h-64 w-full flex flex-col items-center justify-center bg-[#EED5CE] p-5'>
                    <div className='p-2'>
                        <img src={three} className='w-20' alt="" />
                    </div>
                    <p className='text-2xl text-center'> Innovate and adapt to the evolving needs of the medical education sector </p>
                </div>
                <div className='h-64 w-full flex flex-col items-center justify-center bg-[#EED5CE] p-5'>
                    <div className='p-2'>
                        <img src={four} className='w-20' alt="" />
                    </div>
                    <p className='text-2xl text-center'>Advocate for transparency and ethical practices in the admission process.  </p>
                </div>
                <div className='h-64 w-full flex flex-col items-center justify-center bg-[#EED5CE] p-5'>
                    <div className='p-2'>
                        <img src={five} className='w-20' alt="" />
                    </div>
                    <p className='text-2xl text-center'> Support students not just academically, but holistically, preparing them for the challenges of a medical career. </p>
                </div>
                
            </div>
        </div>
    )
}

export default AboutPage5