import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CoursesPage2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth = 385; // Width of each card in pixels
    const cardsToShow = 1; // Show one card at a time

    const controls = useAnimation();

    const cards = [
        {
            img: "https://images.unsplash.com/photo-1608213189166-b099855aee3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Booking Admission Bhopal",
            description: "NEET Cutoff 2024 - All India Quota Seats / State Quota Seats / Categories Wise Cutoff"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1697730390709-48bebc012175?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Booking Admission Bhopal",
            description: "NEET Cutoff 2024 - All India Quota Seats / State Quota Seats / Categories Wise Cutoff"
        },
        {
            img: "https://images.unsplash.com/photo-1689002425973-db4318c2d078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Booking Admission Bhopal",
            description: "NEET Cutoff 2024 - All India Quota Seats / State Quota Seats / Categories Wise Cutoff"
        },
        {
            img: "https://images.unsplash.com/photo-1650168410325-88331d3ea43b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Booking Admission Bhopal",
            description: "NEET Cutoff 2024 - All India Quota Seats / State Quota Seats / Categories Wise Cutoff"
        },
        {
            img: "https://images.unsplash.com/photo-1608914847486-1ce323dba66a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Booking Admission Bhopal",
            description: "NEET Cutoff 2024 - All India Quota Seats / State Quota Seats / Categories Wise Cutoff"
        },
        {
            img: "https://images.unsplash.com/photo-1705861145316-73a2edc9e1ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Booking Admission Bhopal",
            description: "NEET Cutoff 2024 - All India Quota Seats / State Quota Seats / Categories Wise Cutoff"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Booking Admission Bhopal",
            description: "NEET Cutoff 2024 - All India Quota Seats / State Quota Seats / Categories Wise Cutoff"
        },
        {
            img: "https://images.unsplash.com/photo-1608213189166-b099855aee3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Booking Admission Bhopal",
            description: "NEET Cutoff 2024 - All India Quota Seats / State Quota Seats / Categories Wise Cutoff"
        },
        // ... add more card objects
    ];

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - cardsToShow, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + cardsToShow, cards.length - cardsToShow));
    };

    useEffect(() => {
        controls.start({ x: -currentIndex * cardWidth });
    }, [currentIndex]);

    return (
        <div className='w-full h-fit py-10 lg:pl-20 lg:pr-10 px-5'>
            <h1 className='md:text-7xl text-4xl lg:inline-block hidden font-semibold relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5]'>Related News</h1>
            <div className='w-full h-full flex items-center justify-center flex-col'>
                <h1 className='md:text-7xl text-4xl lg:hidden font-semibold relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5]'>Related News</h1>
                <div className='w-full flex justify-end gap-5 mt-5'>
                    <button
                        className={`lg:w-16 w-10 lg:h-16 h-10 border-2 ${currentIndex === 0 ? 'border-[#E5C0B8] text-[#E5C0B8]' : 'bg-[#E5C0B8] text-white'} border-[#E5C0B8] flex items-center justify-center text-3xl`}
                        onClick={handlePrevClick}
                        disabled={currentIndex === 0}
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                    <button
                        className={`lg:w-16 w-10 lg:h-16 h-10 ${currentIndex === cards.length - cardsToShow ? 'border-[#E5C0B8] text-[#E5C0B8]' : 'bg-[#E5C0B8] text-white'} border-2 border-[#E5C0B8] text-[#E5C0B8]  flex  items-center justify-center text-3xl`}
                        onClick={handleNextClick}
                        disabled={currentIndex === cards.length - cardsToShow}
                    >
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
                <div
                    className='w-full h-fit p-2 mt-5 flex gap-5 whitespace-nowrap overflow-hidden'

                >
                    {cards.map((card, index) => (
                        <motion.div
                            animate={controls}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{ display: '' }}
                            key={index}
                            className='lg:min-w-96 min-w-[23rem] h-full shadow-md rounded'
                        >
                            <div className='w-full h-52 bg-blue-50'>
                                <img src={card.img} className='w-full h-full object-cover' alt="" />
                            </div>
                            <div className='p-5'>
                                <h1 className='text-2xl whitespace-normal uppercase font-semibold'>{card.title}</h1>
                                <p className='text-xl whitespace-normal'>{card.description}</p>
                                <div className='flex justify-center items-center'>
                                    <button className='px-5 py-2 bg-white rounded-full shadow-md text-lg mt-3'>Read More <i className="ri-arrow-right-line"></i></button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className='flex justify-center items-center mt-5'>
                    {cards.map((_, index) => (
                        <div key={index} className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-[#52C6C5]' : 'bg-gray-300'}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage2;
