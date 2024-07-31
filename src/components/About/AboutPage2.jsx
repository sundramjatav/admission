import React from 'react'
import bg from '../../assets/bg.svg'
import bg1 from '../../assets/bg1.svg'
import bg2 from '../../assets/bg2.svg'
import bg3 from '../../assets/bg3.svg'
const AboutPage2 = () => {
    return (
        <div className='w-full h-fit flex flex-col md:flex-row md:my-20 my-5 overflow-hidden'>
            <div className=''>
                <div className='flex md:hidden flex-col  px-5'>
                    <h1 className='md:text-7xl font-bold text-4xl'> <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>About Us</span></h1>
                </div>
                <p className='md:hidden md:text-justify md:text-2xl text-xl font-normal  py-5 px-5'>At [Company Name], we pride ourselves on our deep understanding of the medical education landscape. Established with the goal of bridging the gap between aspiring medical students and premier educational institutions, we offer tailored admission solutions that cater to your unique needs.
                </p>
            </div>
            <div className='w-full h-fit relative md:hidden '>
                <img src={bg3} className='w-full h-full scale-[0.8] -ml-10' alt="" />
                <img src={bg2} className='absolute top-0 w-full h-full' alt="" />
            </div>
            <div className='w-full h-screen relative hidden md:block '>
                <img src={bg} className='w-full h-full -ml-14' alt="" />
                <img src={bg1} className='absolute -top-8 left-0' alt="" />
            </div>
            <div className='w-full h-full p-5 md:pr-16 '>
                <div className='md:flex  flex-col hidden '>
                    <h1 className='md:text-7xl font-bold text-5xl'> <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>About Us</span></h1>
                </div>
                <div>
                    <p className='md:text-justify md:block hidden md:text-[1.5rem] text-[1.4rem] font-normal  py-5'>At [Company Name], we pride ourselves on our deep understanding of the medical education landscape. Established with the goal of bridging the gap between aspiring medical students and premier educational institutions, we offer tailored admission solutions that cater to your unique needs.
                    </p>
                    <p className='md:text-justify md:text-2xl text-xl font-normal  py-5'>
                        Our services encompass every stage of the admission process, from application guidance and document preparation to interview coaching and final enrollment.
                        <br /><br />
                        Our experienced consultants bring a wealth of knowledge and industry insights, ensuring you receive the best possible advice and support.
                        <br /><br />
                        With a proven track record of successful placements, we are dedicated to helping you achieve your academic and career aspirations in the medical field.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage2