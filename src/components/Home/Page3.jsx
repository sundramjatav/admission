import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import circle from '../../assets/circle.svg';
import dil from '../../assets/dil.svg';
import setting from '../../assets/setting.png';
import setting1 from '../../assets/setting1.png';
import setting2 from '../../assets/setting2.png';
import setting3 from '../../assets/setting3.png';
import study from '../../assets/study.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page3 = () => {
    useGSAP(() => {
        const gsapAnim = gsap.timeline();
        gsapAnim.from('.dil', {
            opacity: 0,
            x:-100,
            scrollTrigger: {
                trigger: '.dil',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.text', {
            opacity: 0,
            x:-100,
            scrollTrigger: {
                trigger: '.text',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.gol', {
            opacity: 0,
            x:100,
            scrollTrigger: {
                trigger: '.gol',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.study', {
            opacity: 0,
            x:100,
            scrollTrigger: {
                trigger: '.study',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.setting', {
            opacity: 0,
            x:100,
            scrollTrigger: {
                trigger: '.setting',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.text1', {
            opacity: 0,
            x:-100,
            scrollTrigger: {
                trigger: '.text1',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.setting1', {
            opacity: 0,
            x:100,
            scrollTrigger: {
                trigger: '.setting1',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.text2', {
            opacity: 0,
            x:-100,
            scrollTrigger: {
                trigger: '.text2',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.setting2', {
            opacity: 0,
            x:100,
            scrollTrigger: {
                trigger: '.setting2',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.text3', {
            opacity: 0,
            x:-100,
            scrollTrigger: {
                trigger: '.text3',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.setting3', {
            opacity: 0,
            x:100,
            scrollTrigger: {
                trigger: '.setting3',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnim.from('.text4', {
            opacity: 0,
            x:-100,
            scrollTrigger: {
                trigger: '.text4',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
    })
    useGSAP(() => {
        const gsapAnime = gsap.timeline();
        gsapAnime.from('.gol1', {
            opacity: 0,
            x:-500,
            scrollTrigger: {
                trigger: '.gol1',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnime.from('.h1text', {
            opacity: 0,
            x:100,
            scrollTrigger: {
                trigger: '.h1text',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnime.from('.study1', {
            opacity: 0,
            delay:2,
            x:-1200,
            scrollTrigger: {
                trigger: '.study1',
                start: 'top 50%',
                end: 'top 20%',
                scrub: true, 
            }
        })
        gsapAnime.from('.boximg1', {
            opacity: 0,
            delay:2,
            x:100,
            scrollTrigger: {
                trigger: '.boximg1',
                start: 'top 50%',
                end: 'top 20%',
                scrub: true, 
            }
        })
        gsapAnime.from('.boximg2', {
            opacity: 0,
            delay:2,
            x:200,
            scrollTrigger: {
                trigger: '.boximg2',
                start: 'top 50%',
                end: 'top 20%',
                scrub: true, 
            }
        })
        gsapAnime.from('.boximg3', {
            opacity: 0,
            delay:2,
            x:300,
            scrollTrigger: {
                trigger: '.boximg3',
                start: 'top 50%',
                end: 'top 20%',
                scrub: true, 
            }
        })
        gsapAnime.from('.boximg4', {
            opacity: 0,
            delay:2,
            x:-200,
            scrollTrigger: {
                trigger: '.boximg4',
                start: 'top 50%',
                end: 'top 20%',
                scrub: true, 
            }
        })
       
    })
    return (
        <div className='w-full lg:h-[150vh] h-fit flex flex-col lg:flex-row'>
            <div
                className='relative lg:w-2/3 w-full h-full hidden lg:block'>
                <img src={circle} className='gol1 w-full h-full' alt='' />
                <div className='absolute top-0 w-full h-full flex items-center justify-center flex-col md:block'>
                    <div className='study1 w-[750px] hidden md:block h-[750px] rounded-full border-4 border-white p-24 bg-gradient-to-r from-[#CDE6EA] to-[#E5F0F2]'>
                        {/* Animate the study image */}
                        <img
                            src={study}
                            className=' w-full h-full object-cover rounded-full'
                            alt=''
                            
                        />
                    </div>
                    <div className='w-full boximg4 h-fit py-5 hidden md:flex items-start md:gap-10 gap-5 justify-center mt-5 mx-5'>
                        <div className='w-[20%]'>
                            <div className='w-28 h-28 bg-[#EED5CE] rounded-full p-3 overflow-hidden'>
                                {/* Animate the setting3 image */}
                                <img
                                    src={setting3}
                                    className='w-full h-full object-cover'
                                    alt=''
                                   
                                />
                            </div>
                        </div>
                        <div>
                            <p className='md:text-4xl text-3xl font-bold'>Comprehensive Support</p>
                            <p className='md:text-3xl text-lg mt-2 md:w-[60%]'>
                                From initial counseling to final admission, we stand by you at every step.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 w-full h-full p-8 hidden lg:block'>
                <h1 className='h1text md:text-5xl text-4xl font-bold'>
                    Why <br />{' '}
                    <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>
                        Choose Us?
                    </span>
                </h1>
                <div className='w-full h-full flex flex-col gap-5 my-16'>
                    <div className='w-full h-fit boximg1 py-5 flex-col md:flex-row flex items-start md:gap-10 gap-5 justify-between'>
                        <div className='w-1/3'>
                            <div className='w-28 h-28 bg-[#F4E9E3] rounded-full p-3 overflow-hidden'>
                                <img
                                    src={setting}
                                    className='w-full h-full object-cover'
                                    alt=''
                                />
                            </div>
                        </div>
                        <div>
                            <p  className='md:text-4xl text-3xl font-bold'>Experienced Professionals</p>
                            <p  className='md:text-3xl text-lg mt-2 md:w-[80%]'>
                                The quality of education, infrastructure, and faculty can significantly influence your professional success and personal growth.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-fit boximg2 flex-col md:flex-row py-5 flex items-start md:gap-10 gap-5 justify-between'>
                        <div className='w-1/3'>
                            <div className='w-28 h-28 bg-[#CFE2E6] rounded-full p-3 overflow-hidden'>
                                <motion.img
                                    src={setting1}
                                    className='w-full h-full object-cover'
                                    alt=''
                                    
                                />
                            </div>
                        </div>
                        <div>
                            <p  className='md:text-4xl text-xl font-bold'>Personalized Service</p>
                            <p  className='md:text-3xl text-lg mt-2 md:w-[80%]'>
                                We offer tailored services to meet your unique needs and aspirations.
                            </p>
                        </div>
                    </div>
                    <div  className='w-full h-fit boximg3 py-5 flex-col md:flex-row flex items-start md:gap-10 gap-5 justify-between'>
                        <div className='w-1/3'>
                            <div className='w-28 h-28 bg-[#C3AAB0] rounded-full p-3 overflow-hidden'>
                                <motion.img
                                    src={setting2}
                                    className='w-full h-full object-cover'
                                    alt=''
                                    
                                />
                            </div>
                        </div>
                        <div>
                            <p  className='md:text-4xl text-xl font-bold'>Success Stories</p>
                            <p  className='md:text-3xl text-lg mt-2 md:w-[80%]'>
                                The quality of education, infrastructure, and faculty can significantly influence your professional success and personal growth.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-fit py-5 flex-col md:flex-row md:hidden flex items-start md:gap-10 gap-5 justify-between'>
                        <div className='w-1/3'>
                            <div className='w-28 h-28 bg-[#EED5CE] rounded-full p-3 overflow-hidden'>
                                <img
                                    src={setting3}
                                    className='w-full h-full object-cover'
                                    alt=''
                                    
                                />
                            </div>
                        </div>
                        <div>
                            <div className='md:text-4xl text-xl font-bold'>Comprehensive Support</div>
                            <div className='md:text-3xl text-lg mt-2 md:w-[80%]'>
                                From initial counseling to final admission, we stand by you at every step.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:w-1/2 w-full min-h-[200vh] md:hidden relative overflow-hidden'>
                <div  className='gol w-[30rem] h-[30rem] flex items-center justify-start bg-gradient-to-r from-[#cde6ea51] to-[#e5f0f28b] rounded-full ml-52'>
                    <div  className='study w-60 h-60 rounded-full bg-red-200 ml-2 overflow-hidden'>
                        <img src={study}  className=' w-full h-full object-cover ' alt='' />
                    </div>
                </div>

                <div className='w-[40rem] h-[40rem] mt-80 -ml-64 bg-gradient-to-r from-[#cde6ea51] to-[#e5f0f28b] rounded-full '></div>
                <div className='w-full h-full absolute top-0'>
                    <img src={dil} className='dil' alt='' />
                    <div className='p-8'>
                        <h1  className='text md:text-5xl text-4xl font-bold'>
                            Why <br />{' '}
                            <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>
                                Choose Us?
                            </span>{' '}
                        </h1>
                        <div className='w-full h-full flex flex-col my-16'>
                            <div   className='w-full h-fit py-3 flex-col md:flex-row flex items-start md:gap-10 gap-3 justify-between'>
                                <div className='setting w-1/3'>
                                    <div className='w-28 h-28 bg-[#F4E9E3] rounded-full p-3 overflow-hidden'>
                                        <img
                                            src={setting}
                                            className='w-full h-full object-cover'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='text1'>
                                    <p className='md:text-4xl text-2xl font-bold'>Experienced Professionals</p>
                                    <p className='md:text-3xl text-lg mt-2 md:w-[80%]'>
                                        The quality of education, infrastructure, and faculty can significantly influence your professional success and personal growth.
                                    </p>
                                </div>
                            </div>
                            <div  className='w-full h-fit flex-col md:flex-row py-3 flex items-start md:gap-10 gap-3 justify-between'>
                                <div className='setting1 w-1/3'>
                                    <div className='w-28 h-28 bg-[#CFE2E6] rounded-full p-3 overflow-hidden'>
                                        <img
                                            src={setting1}
                                            className='w-full h-full object-cover'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='text2'>
                                    <p className='md:text-4xl text-2xl font-bold'>Personalized Service</p>
                                    <p
                                    className='md:text-3xl text-lg mt-2 md:w-[80%]'>
                                        We offer tailored services to meet your unique needs and aspirations.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full h-fit py-3 flex-col md:flex-row flex items-start md:gap-10 gap-3 justify-between'>
                                <div className='setting2 w-1/3'>
                                    <div className='w-28 h-28 bg-[#C3AAB0] rounded-full p-3 overflow-hidden'>
                                        <img
                                            src={setting2}
                                            className='w-full h-full object-cover'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='text3'>
                                    <p
                                     className='md:text-4xl text-2xl font-bold'>Success Stories</p>
                                    <p
                                     className='md:text-3xl text-lg mt-2 md:w-[80%]'>
                                        The quality of education, infrastructure, and faculty can significantly influence your professional success and personal growth.
                                    </p>
                                </div>
                            </div>
                            <div  className='w-full h-fit py-3 flex-col md:flex-row md:hidden flex items-start md:gap-10 gap-3 justify-between'>
                                <div className='setting3 w-1/3'>
                                    <div className='w-28 h-28 bg-[#EED5CE] rounded-full p-3 overflow-hidden'>
                                        <img
                                            src={setting3}
                                            className='w-full h-full object-cover'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='text4'>
                                    <p
                                     className='md:text-4xl text-2xl font-bold'>Comprehensive Support</p>
                                    <p
                                     className='md:text-3xl text-lg mt-2 md:w-[80%]'>
                                        From initial counseling to final admission, we stand by you at every step.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
