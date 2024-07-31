import React from 'react'
import { FAQ } from './FAQ'

const AboutPage10 = () => {
    return (
        <div className='w-full md:h-screen py-16 bg-white '>
            <div className='md:w-[85%] h-full m-auto p-5'>
                <div className='flex flex-col mb-10'>
                    <h1 className='md:text-7xl font-bold text-3xl text-center'> <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Frequently Asked Questions</span></h1>
                </div>
               <FAQ/>
            </div>
        </div>
    )
}

export default AboutPage10