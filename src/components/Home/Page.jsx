import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import girl from '../../assets/girls.png';
import add from '../../assets/add.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Page = () => {
    const controls = useAnimation();

    gsap.registerPlugin(ScrollTrigger);
    const imgref = useRef()
    useGSAP(() => {
        gsap.from('.h1', {
            x: -100,
            duration: 1,
            delay: 1,
            opacity: 0,
        })
        gsap.from('.add', {
            x: 100,
            duration: 1,
            delay: 1,
            opacity: 0,
        })
        gsap.from('.h11', {
            x: 100,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.h11',
                start: 'top 70%',
                end: 'top 10%',
                scrub: true
            }
        })
        gsap.from('.p', {
            x: 100,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.p',
                start: 'top 80%',
                end: 'top 10%',
                scrub: true
            }
        })

        gsap.from('.btn', {
            opacity: 0,
            scale: 1,
            scrollTrigger: {
                trigger: '.btn',
                start: 'top 80%',
                end: 'top 0%',
                scrub: true
            }
        })
        gsap.from('.img', {
            x:-200,
            opacity:0,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: '.img',
                start: 'top 90%',
                end: 'top 10%',
                scrub: true
            }
        })
    })


    return (
        <div
            className='w-full flex lg:h-screen h-fit lg:flex-row flex-col px-8 pt-10'
        >
            <h1

                className='h1 relative md:text-7xl text-4xl font-semibold md:hidden mb-5 w-[85%]'
            >
                Your Gateway to Premier Medical{' '}
                <span className='relative after:-z-10 z-10 after:left-0 after:bottom-1 after:rounded-full after:absolute after:w-full after:h-1 after:bg-[#52C6C5]'>
                    Education
                </span>
            </h1>
            <img
                initial={{ opacity: 0, x: 0 }}
                className='add w-16 absolute md:hidden right-0'
                src={add}
                alt=''
            />
            <div className='flex flex-col md:flex-row md:items-center'>
                <div className='lg:w-1/2 md:h-full h-[50vh] md:p-20'>
                    <img
                        className='img w-full h-full object-contain'
                        src={girl}
                        alt='Girl'
                        ref={imgref}
                    />
                </div>
                <div className='lg:w-1/2 h-fit md:h-full md:py-16 py-10 flex flex-col gap-5 justify-between items-start'>
                    <h1

                        className=' h11 md:text-6xl hidden md:block text-4xl font-semibold pr-20'
                    >
                        Your Gateway to Premier Medical{' '}
                        <span className='relative after:-z-10 z-10 after:left-0 after:bottom-2 after:rounded-full after:absolute after:w-full after:h-2 after:bg-[#52C6C5]'>
                            Education
                        </span>
                    </h1>
                    <p
                        // Use textRef here
                        className='p md:text-[1.6rem] text-lg md:w-[92%] md:leading-[2.5rem] md:text-start text-justify'
                    >
                        Welcome to [Your Admission Service Name], your trusted partner in
                        securing admission to top medical institutions for MBBS, MDS, BDS,
                        BHMS, and BAMS programs. Whether you are aspiring for undergraduate
                        (UG) or postgraduate (PG) courses, we offer comprehensive guidance
                        and support to help you achieve your educational dreams.
                    </p>
                    <button

                        className='btn md:px-14 px-8 shadow-md py-2 text-2xl rounded-full md:rounded-xl hover:bg-black bg-[#E5C0B8] text-white'
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
