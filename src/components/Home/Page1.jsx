import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import head from '../../assets/head.svg';
import cods from '../../assets/doublecods.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useGSAP(() => {
        const gsapAnim = gsap.timeline();
        gsapAnim.from('.cods', {
            x: -100,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.cods',
                start: 'top 70%',
                end: 'top 10%',
                scrub: true
            }
        });
        gsapAnim.from('.cods1', {
            x: -10,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.cods1',
                start: 'top 70%',
                end: 'top 10%',
                scrub: true
            }
        });
        gsapAnim.from('.pp1', {
            x: 200,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.pp1',
                start: 'top 50%',
                end: 'top 10%',
                scrub: true
            }
        });
        
        gsapAnim.from('.pp', {
            x: -100,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.pp',
                start: 'top 50%',
                end: 'top 10%',
                scrub: true
            }
        });
        
        gsapAnim.from('.box1', {
            x: -100,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.box1',
                start: 'top 50%',
                end: 'top 10%',
                scrub: true
            }
        });
        gsapAnim.from('.box2', {
            x: 100,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.box2',
                start: 'top 50%',
                end: 'top 10%',
                scrub: true
            }
        });
        gsapAnim.from('.box3', {
            x: -100,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.box3',
                start: 'top 50%',
                end: 'top 10%',
                scrub: true
            }
        });
        
        gsapAnim.from('.box4', {
            opacity: 0,
            x: 100,
            duration: 0.6,
            scrollTrigger: {
                trigger: '.main-div',
                start: 'top 90%',
                end: 'top 10%',
                scrub: true
            }
        });
        gsapAnim.from('.box5', {
            opacity: 0,
            x: 300,
            delay:1,
            duration: 0.6,
            scrollTrigger: {
                trigger: '.main-div',
                start: 'top 60%',
                end: 'top 10%',
                scrub: true
            }
        });
        gsapAnim.from('.box6', {
            opacity: 0,
            x: -200,
            delay:1,
            duration: 0.6,
            scrollTrigger: {
                trigger: '.main-div',
                start: 'top 60%',
                end: 'top 10%',
                scrub: true
            }
        });

        gsapAnim.from('.head-img', {
            opacity: 0,
            duration: 0.6,
            x:-400,
            scrollTrigger: {
                trigger: '.head-img',
                start: 'top 90%',
                end: 'top 10%',
                scrub: true
            }
        });

        gsapAnim.from('.content-div', {
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: '.content-div',
                start: 'top 90%',
                end: 'top 10%',
                scrub: true
            }
        });
    });

    return (
        <>
            <div className='w-full relative md:h-[95vh] bg-gradient-to-r from-[#CDE6EA] to-[#E5F0F2] overflow-hidden main-div'>
                <div className='md:w-2/3 h-full ml-auto'>
                    <img src={head} className='md:w-[80%] hidden lg:block md:h-[100%] object-cover md:ml-52 head-img' alt="" />
                </div>
                <div className='w-full h-full absolute top-0 px-24 py-5 md:flex hidden content-div'>
                    <div className='w-[60%] h-full'>
                        <img src={cods} className='cods w-14' alt="" />
                        <p className='pp text-7xl font-semibold mt-5 w-[70%]'>
                            <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5]'>
                                The Importance of Choosing the Right Education
                            </span>
                        </p>
                        <div className='box6 w-[44rem] h-64 bg-[#E5C0B8] mt-8 ml-16 rounded-xl flex flex-col justify-center gap-5 p-8'>
                            <p className='text-4xl font-bold text-center'>
                                Influence on Professional Success and Personal Growth
                            </p>
                            <p className='text-3xl text-center'>
                                The quality of education, infrastructure, and faculty can significantly influence your professional success and personal growth.
                            </p>
                        </div>
                    </div>
                    <div className='w-[40%] h-full mt-44'>
                        <div className='box4 w-[25rem] h-52 bg-[#F4E9E3] ml-32  rounded-xl flex flex-col justify-center gap-5 p-8'>
                            <p className='text-xl font-bold text-center'>
                                Guidance and Assurance in Making Informed Decisions
                            </p>
                            <p className='text-xl text-center'>
                                We ensure you make informed decisions and secure a place in the best possible institutions.
                            </p>
                        </div>
                        <div className='box5 w-[30rem] h-52 bg-[#F2F2F2] mt-10 rounded-xl flex flex-col justify-center gap-5 p-8'>
                            <p className='text-2xl font-bold text-center'>
                                Importance of Choosing the Right Medical Program and Institution
                            </p>
                            <p className='text-2xl text-center'>
                                Selecting the right medical program and institution is crucial for your career.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:hidden gap-5 w-full h-fit  p-8 bg-gradient-to-r from-[#CDE6EA] to-[#E5F0F2]'>
                <div>
                    <img src={cods} className='cods1 w-10 mb-5' alt="" />
                    <p className='pp1  text-4xl font-semibold'>
                        <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5]'>
                            The Importance of Choosing the Right Education
                        </span>
                    </p>
                </div>
                <div className='box1 w-full min-h-60 bg-[#E5C0B8]  rounded-xl flex flex-col justify-center gap-3 p-5'>
                    <p className='md:text-2xl text-xl font-bold text-center'>
                        Influence on Professional Success and Personal Growth
                    </p>
                    <p className='md:text-xl text-lg text-center font-normal'>
                        The quality of education, infrastructure, and faculty can significantly influence your professional success and personal growth.
                    </p>
                </div>
                <div className='box2 w-full min-h-52 bg-[#F4E9E3]  rounded-xl flex flex-col justify-center gap-3 p-5'>
                    <p className='md:text-2xl text-xl font-bold text-center'>
                        Guidance and Assurance in Making Informed Decisions
                    </p>
                    <p className='md:text-xl text-lg text-center font-normal'>
                        We ensure you make informed decisions and secure a place in the best possible institutions.
                    </p>
                </div>
                <div className='box3 w-full min-h-52 bg-[#F2F2F2] rounded-xl flex flex-col justify-center gap-3 p-5'>
                    <p className='md:text-2xl text-xl font-bold text-center'>
                        Importance of Choosing the Right Medical Program and Institution
                    </p>
                    <p className='md:text-xl text-lg text-center font-normal'>
                        Selecting the right medical program and institution is crucial for your career.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Page1;
