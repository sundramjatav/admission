import React from 'react'
import img from '../../assets/img.jpeg'
import one1 from '../../assets/one1.svg'
import two1 from '../../assets/two2.svg'
import three1 from '../../assets/three1.svg'

const AboutPage6 = () => {
    return (
        <div className='w-full h-fit md:h-screen '>
            <div className='flex w-fit flex-col m-auto mt-10'>
                <h1 className='md:text-7xl text-center font-bold text-4xl'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>History of the Company </span></h1>
            </div>
            <div className='p-6 text-lg md:hidden'>
                <p>Founded in [Year], [Company Name] started as a small consultancy with a big vision: to transform the medical admission landscape. Our journey began with a team of passionate educationists and medical professionals who recognized the challenges faced by students in securing admissions to reputable medical colleges.
                    <br /><br />
                    In our early years, we focused on building a robust network of partnerships with top medical institutions across the country. Our dedication to excellence and personalized service quickly earned us a reputation for reliability and success. As we grew, we expanded our services to include postgraduate admissions, catering to the increasing demand for advanced medical education.
                    <br /><br />
                    Over the years, we have helped thousands of students achieve their dreams of becoming medical professionals. Our success stories are a testament to our commitment and expertise. Today, we are proud to be a leading name in medical admission consultancy, continuously evolving and expanding our services to meet the needs of aspiring students.
                </p>
            </div>

            <div className='w-full  md:flex hidden'>
                <div className='w-1/2 h-full p-10 pl-24'>
                    <div className='w-96 h-[28rem] rounded-tl-[100px] overflow-hidden  '>
                        <img src={img} className='w-full h-full bg-cover' alt="" />
                    </div>
                    <div className='w-96 h-72 absolute p-3  flex flex-col justify-center gap-5 top bg-white rounded-md -mt-[10.5rem] shadow-md ml-40'>
                        <div className='flex gap-4 text-[1.5rem] '>
                            <div className='p-3 bg-[#84DDDC]'>
                                <img src={one1} className='w-10 h-10' alt="" />
                            </div>
                            <p>Foundation and Early Vision</p>
                        </div>
                        <div className='flex gap-4 text-[1.5rem]'>
                            <div className='p-3 bg-[#DEEDF0]'>
                                <img src={two1} className='w-10 h-10' alt="" />
                            </div>
                            <p>Growth and Service Expansion</p>
                        </div>
                        <div className='flex gap-4 text-[1.5rem]'>
                            <div className='p-3 bg-[#EED5CE]'>
                                <img src={three1} className='w-10 h-10' alt="" />
                            </div>
                            <p>Achievements and Current Standing</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full'>
                    <div className='pt-5 pr-10 text-2xl font-medium '>
                        <p>Founded in [Year], [Company Name] started as a small consultancy with a big vision: to transform the medical admission landscape. Our journey began with a team of passionate educationists and medical professionals who recognized the challenges faced by students in securing admissions to reputable medical colleges.
                            <br /><br />
                            In our early years, we focused on building a robust network of partnerships with top medical institutions across the country. Our dedication to excellence and personalized service quickly earned us a reputation for reliability and success. As we grew, we expanded our services to include postgraduate admissions, catering to the increasing demand for advanced medical education.
                            <br /><br />
                            Over the years, we have helped thousands of students achieve their dreams of becoming medical professionals. Our success stories are a testament to our commitment and expertise. Today, we are proud to be a leading name in medical admission consultancy, continuously evolving and expanding our services to meet the needs of aspiring students.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage6