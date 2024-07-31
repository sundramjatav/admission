import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        
        gsap.to(".page5 .box", {
            x:-1200,
            duration:2,
            delay:1,
            scrollTrigger: {
                trigger: '.box',
                start: 'top 50%',
                end: 'top 0%',
                scrub: true
              }
        })
       
    })

    return (
        <div className='page5 w-full md:h-[60vh] h-fit bg-[#EED5CE] flex my-10 flex-col md:flex-row gap-5 p-8 md:p-0'>
            <div className='md:w-[40%] h-fit  md:h-full md:flex  justify-center md:flex-col md:p-8 md:gap-8 md:border-r-2  border-black md:ml-10'>
            <div className='flex flex-col '>
                    <h1 className='md:text-7xl font-bold text-4xl'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Our Services</span></h1>
                </div>
                <p className='text-xl md:text-5xl'>We provide a suite of services to facilitate your admission process</p>
            </div>
            <div className=" hidden  md:flex items-center md:gap-10 gap-5 whitespace-nowrap md:overflow-x-auto md:scroll-smooth flex-col md:flex-row md:w-[60%]">
                <div className="box md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Career Counselling</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Personalized guidance to help you choose the right course and college</p>
                    </div>
                </div>
                <div className="box md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full  h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Application Assistance</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Help with filling out application forms and preparing necessary documents.</p>
                    </div>
                </div>
                <div className="box md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full  h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Interview Coaching</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Training to help you excel in admission interviews</p>
                    </div>
                </div>
                <div className="box md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full  h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Exam Preparation</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Resources and coaching for entrance exams.</p>
                    </div>
                </div>
                <div className="box md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full  h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Financial Planning</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Personalized guidance to help you choose the right course and college</p>
                    </div>
                </div>

            </div>
            <div className=" md:hidden flex items-center md:gap-10 gap-5 whitespace-nowrap md:overflow-x-auto md:scroll-smooth flex-col md:flex-row md:w-[60%]">
                <div className="box1 md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Career Counselling</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Personalized guidance to help you choose the right course and college</p>
                    </div>
                </div>
                <div className="box1 md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full  h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Application Assistance</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Help with filling out application forms and preparing necessary documents.</p>
                    </div>
                </div>
                <div className="box1 md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full  h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Interview Coaching</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Training to help you excel in admission interviews</p>
                    </div>
                </div>
                <div className="box1 md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full  h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Exam Preparation</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Resources and coaching for entrance exams.</p>
                    </div>
                </div>
                <div className="box1 md:min-w-[30rem] relative min-w-full rounded-xl h-80 flex items-start justify-center">
                    <div className='w-48 h-48 border-8 rounded-full border-black'></div>
                    <div className='w-full  h-56 md:h-64 bg-white rounded-2xl absolute bottom-6 md:bottom-0 overflow-hidden '>
                        <div className='w-full py-8 relative bg-[#DEEDF0] rounded-2xl flex flex-col items-center justify-center mb-12'>
                            <h1 className='md:text-4xl font-bold text-3xl'>Financial Planning</h1>
                            <div className='w-full h-10  absolute  flex justify-around -bottom-5'>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                    
                                </div>
                                <div className='w-11 rounded-lg h-full  flex items-center justify-center'>
                                    <div className='w-full h-2 bg-[#E8B5A7]'></div>
                                    <div className='w-2 h-full absolute bg-[#E8B5A7]'></div>
                                </div>
                                <div className='w-14 rounded-lg h-full bg-[#E8B5A7] overflow-hidden'>
                                    <div className='w-full h-1/3'></div>
                                    <div className='w-full h-2/3 bg-[#F9D9D0] rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                        <p className='md:text-2xl text-xl whitespace-normal text-center'>Personalized guidance to help you choose the right course and college</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page5
