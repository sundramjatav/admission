import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import student from '../../assets/student.png';
import students from '../../assets/students.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page4 = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    useGSAP(() => {
        const gsapAnime = gsap.timeline();
        gsapAnime.from('.texth', {
            opacity: 0,
            y:50,
            scrollTrigger: {
                trigger: '.texth',
                start: 'top 100%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnime.from('.textppp1', {
            opacity: 0,
            y:50,
            scrollTrigger: {
                trigger: '.textppp1',
                start: 'top 70%',
                end: 'top 40%',
                scrub: true, 
            }
        })
        gsapAnime.from('.cards', {
            opacity: 0,
            y:100,
            scrollTrigger: {
                trigger: '.cards',
                start: 'top 90%',
                end: 'top 40%',
                scrub: true, 
            }
        })
    })

    return (
        <>
            <div className='page4 w-full h-fit flex items-center justify-center flex-col '>
                <div className='md:w-[85%] w-[88%] flex items-center justify-center flex-col'>
                    <h1 className='texth md:text-7xl text-4xl md:mb-10 mb-2 font-bold text-center' > <br /> <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] ' >
                        Our Products
                    </span>
                    </h1>
                    <h5 className=' textppp1 md:text-4xl text-xl text-center md:w-2/3'> We offer a range of products designed to meet your admission needs</h5>
                    <div className='grid md:grid-cols-2 grid-cols-1 w-full md:gap-16 gap-8 my-10 p-3'>
                        {/* Initial product sections */}
                        <ProductSection image={student} title="UG Programs" className="card1" />
                        <ProductSection image={students} title="PG Programs" className="card2" />

                        {/* Additional product sections when showMore is true */}
                        {showMore && (
                            <>
                                <ProductSection image={student} title="UG Programs" />
                                <ProductSection image={students} title="PG Programs" />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <p className='text-2xl  w-[85%] text-end m-auto'>
                <button onClick={toggleShowMore} className="text-black">
                    {showMore ? 'Hide products' : 'More products'} <i className="ri-arrow-right-line"></i>
                </button>
            </p>
        </>
    );
};
const ProductSection = ({ image, title }) => {

    return (
        <div  className='w-full h-fit py-10 md:py-16 bg-[#EED5CE] flex justify-center items-center gap-3 rounded-md cards'>
            <div className='md:w-2/4 border-r-2 border-black flex flex-col md:px-10 px-5'>
                <div className='md:w-24 md:h-24 w-14 h-14 '>
                    <img src={image} className='w-full h-full object-cover' alt="" />
                </div>
                <h1 className='md:text-3xl text-xl font-bold'>{title}</h1>
            </div>
            <div className='w-1/2 grid grid-cols-2 pr-5 md:gap-4 gap-2'>
                <button className='px-6 py-2 font-bold md:text-lg text-xs rounded-lg shadow hover:bg-[#52C6C5] bg-white'>MBBS</button>
                <button className='px-6 py-2 font-bold md:text-lg text-xs rounded-lg shadow hover:bg-[#52C6C5] bg-white'>MDS</button>
                <button className='px-6 py-2 font-bold md:text-lg text-xs rounded-lg shadow hover:bg-[#52C6C5] bg-white'>BDS</button>
                <button className='px-6 py-2 font-bold md:text-lg text-xs rounded-lg shadow hover:bg-[#52C6C5] bg-white'>BAMS</button>
                <button className='px-6 py-2 font-bold md:text-lg text-xs rounded-lg shadow hover:bg-[#52C6C5] bg-white'>BHMS</button>
            </div>
        </div>
    );
};

export default Page4;
