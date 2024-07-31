import React, { useEffect, useRef } from 'react';
import { gsap, TextPlugin } from 'gsap/all';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const Page7 = () => {
    const textRef = useRef();

    useEffect(() => {
        const text = " Contact us today for a free consultation!";
        const typingSpeed = 0.2; // Duration per character for typing
        const erasingSpeed = 0.1; // Duration per character for erasing
        const delayBeforeErase = 1; // Delay before starting to erase
        const delayBetweenCycles = 0.5; // Delay between each cycle

        const tl = gsap.timeline({ repeat: -1, repeatDelay: delayBetweenCycles });

        // Typing animation
        tl.to(textRef.current, {
            duration: text.length * typingSpeed,
            text: {
                value: text,
                delimiter: '',
            },
            ease: 'none',
        }).to(textRef.current, {
            duration: delayBeforeErase,
            text: {
                value: text,
                delimiter: '',
            },
            ease: 'none',
        });

        // Erasing animation
        for (let i = text.length; i >= 0; i--) {
            tl.to(textRef.current, {
                duration: erasingSpeed,
                text: {
                    value: text.substring(0, i),
                    delimiter: '',
                },
                ease: 'none',
            });
        }

        // Cleanup function to ensure the animation restarts correctly on refresh
        return () => {
            tl.kill();
        };

    }, []);

    return (
        <div className='w-full md:h-[70vh] md:w-[80%] m-auto h-fit py-10 bg-[#EED5CE] flex items-center md:rounded-2xl justify-center flex-col gap-10 p-5'>
            <h1 className='md:text-6xl text-2xl font-bold md:w-[70%] text-center'>Ready to take the next step towards your medical career?</h1>
            <h1 ref={textRef} className='md:text-6xl text-2xl font-bold md:w-[70%] text-center -mt-10 '></h1>
            <button className='md:px-8 px-24 py-3 text-lg bg-[#84DDDC] hover:bg-black md:text-2xl rounded-full text-white font-semibold'>Get Started Now</button>
        </div>
    )
}

export default Page7;
