import React from 'react'
import back from '../../assets/process.svg'
import box from '../../assets/box.png'
import boxs from '../../assets/boxs.svg'
const Page6 = () => {
    return (
        <div className='w-full '>
           <h1 className='md:text-7xl font-bold text-4xl text-center'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Our Process</span></h1>
            <p className='md:text-4xl text-xl mt-5 w-[85%] text-center m-auto'>Our streamlined process ensures a seamless experience
                from start to finish</p>

            <div className='w-full h-full my-10 flex items-center justify-center px-5 md:px-0'>
            <div className='w-[90%] m-auto h-full my-10 hidden md:block'>
                <img src={box} className='w-full h-full object-cover' alt="" />
            </div >
                <img src={boxs} className='md:hidden w-full' alt="" />
            </div>
        </div>
    )
}

export default Page6