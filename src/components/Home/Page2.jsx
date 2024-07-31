import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import svg1 from '../../assets/svg1.svg';
import svg1in from '../../assets/svg1in.svg';
import svg2in from '../../assets/svg2in.png';
import svg3in from '../../assets/svg3in.png';
import svg4in from '../../assets/svg4in.png';
import svg2 from '../../assets/svg2.svg';
import svg3 from '../../assets/svg3.svg';
import svg4 from '../../assets/svg4.svg';
import rec1 from '../../assets/rec1.svg';
import rec2 from '../../assets/rec2.svg';
import rec3 from '../../assets/rec3.svg';
import rec4 from '../../assets/rec4.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page2 = () => {

    useGSAP(() => {
        const gsapAnim = gsap.timeline();
        gsapAnim.from('.image', {
            opacity: 1,
            scale:0,
            scrollTrigger: {
                trigger: '.image',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.textp', {
            opacity: 0,
            y:-100,
            scrollTrigger: {
                trigger: '.textp',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.textpp', {
            opacity: 0,
            y:100,
            scrollTrigger: {
                trigger: '.textpp',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.rec1', {
            opacity: 0,
            x:100,
            scrollTrigger: {
                trigger: '.rec1',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.rec2', {
            opacity: 0,
            x:-100,
            scrollTrigger: {
                trigger: '.rec2',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.rec3', {
            opacity: 0,
            x:100,
            scrollTrigger: {
                trigger: '.rec3',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.rec4', {
            opacity: 0,
            x:-100,
            scrollTrigger: {
                trigger: '.rec4',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
    })
    return (
        <div className='main w-full mt-10'>
            <div className='lg:w-[70%] m-auto'>
                <p className='text-center md:text-6xl text-3xl font-bold'>
                    <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5]'>
                        How We Can Help You
                    </span>
                </p>

                <p className='md:text-3xl text-sm font-medium text-center md:mt-4 mt-3'>
                    Our team of experts is dedicated to providing personalized admission services. We assist you at every step, from application to admission, ensuring a smooth and hassle-free process.
                </p>
            </div>

            <div className='w-full h-[88vh] lg:block hidden px-16 mt-8 relative overflow-hidden'>
                <div className='w-[88%] m-auto flex items-start'>
                    <div className='flex items-center'>
                        <div className='w-72 h-7 top-[18rem] -left-10 bg-[#84DDDC] absolute'></div>
                        <img
                            src={svg1}
                            className='relative'
                            alt=''
                        />
                        <img
                            src={svg1in}
                            className='image absolute scale-75 ml-7'
                            alt=''
                        />
                        <div >
                            <p className='textp text-3xl'>Assistance with application forms and documentation</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img
                            src={svg2}
                            alt=''
                        />
                        <div className='w-52 m-8 mt-14 h-52 absolute'>
                            <img

                                src={svg2in}
                                className='image w-full h-full object-cover'
                                alt=''
                            />
                        </div>
                        <div >
                            <p className='textp text-3xl'>Support with financial planning and scholarships</p>
                        </div>
                    </div>
                </div>
                <div className='w-[86%] h-1/2 absolute flex top-[16.5rem] ml-28'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='textpp text-3xl'>Expert counseling for course and college selection</p>
                        </div>
                        <img
                            src={svg3}
                            alt=''
                        />
                        <div className='w-52 ml-[21.5rem] mt-10 h-52 absolute'>
                            <img

                                src={svg3in}
                                className=' image w-full h-full object-cover'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div
                        >
                            <p className='textpp text-3xl'>Guidance for entrance exams and interviews</p>
                        </div>
                        <img
                            src={svg4}
                            alt=''
                        />
                        <div className='w-52 ml-72 mt-16 h-52 absolute'>
                            <img

                                src={svg4in}
                                className=' image w-full h-full object-cover'
                                alt=''
                            />
                        </div>
                        <div className='w-72 h-7 bottom-[16.7rem] -right-20 bg-[#C3AAB0] absolute'></div>
                    </div>
                </div>
            </div>

            <div className='my-10 lg:hidden flex items-center justify-center flex-col'>
                <div className='rec1 flex items-center justify-between w-72 relative'>
                    <div>
                        <p>Expert counseling for course and college selection</p>
                    </div>
                    <img
                        // Example of a hover animation
                        src={rec1}
                        className='relative'
                        alt=''
                    />
                    <img

                        src={svg1in}
                        className='absolute w-24 left-40 top-10'
                        alt=''
                    />
                </div>
                <div className='rec2 flex items-center justify-between -mt-10 w-72 relative'>
                    <img
                        src={rec2}
                        alt=''
                    />
                    <div>
                        <p>Assistance with application forms and documentation</p>
                    </div>
                    <img

                        src={svg3in}
                        className='absolute w-24 left-[2.5rem] top-10'
                        alt=''
                    />
                </div>
                <div className='rec3 flex items-center justify-between -mt-10 w-72 relative '>
                    <div>
                        <p>Guidance for entrance exams and interviews</p>
                    </div>
                    <img
                        src={rec3}
                        alt=''
                    />
                    <img
                        src={svg2in}
                        className='absolute w-24 left-40 top-10'
                        alt=''
                    />
                </div>
                <div className='rec4 flex items-center justify-between -mt-12 ml-5 w-80 relative'>
                    <img
                        src={rec4}
                        alt=''
                    />
                    <div>
                        <p>Support with financial planning and scholarships</p>
                    </div>
                    <img

                        src={svg4in}
                        className='absolute w-24 left-[2.5rem] top-8'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
}

export default Page2;
