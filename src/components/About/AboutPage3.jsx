import React from 'react';
import doctor1 from '../../assets/doctor1.png';

const AboutPage3 = () => {
  return (
    <div className='relative w-full md:h-screen  bg-[#EED5CE]'>
        <div className='w-full h-full absolute top-0 flex'>
            <div className='md:w-2/3 w-full h-full p-16 hidden md:block'>
                <div className='flex flex-col'>
                    <h1 className='md:text-7xl font-bold text-4xl'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Mission</span></h1>
                    
                </div>
                <div>
                    <p className='md:text-[1.8rem] md:w-[80%] font-normal py-5'>
                    Our mission is to empower aspiring medical professionals by providing unparalleled admission services and guidance. We strive to simplify the admission process, making it accessible and stress-free for students from diverse backgrounds. By offering personalized support and expert advice, we aim to help students secure placements in prestigious medical institutions, paving the way for their future success.
                    </p>
                </div>
            </div>
            <div className='w-[45%] h-full md:block hidden '>
                <img src={doctor1} className='w-full h-full bg-cover' alt="" />
            </div>
        </div>
            <div className='w-full h-fit md:hidden' style={{ backgroundImage: `url(${doctor1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='w-full h-full bg-[#eed5ce8c] p-5 flex-col flex justify-between py-16'>
                <div className='flex flex-col'>
                    <h1 className='md:text-7xl font-bold text-4xl'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Mission</span></h1>
                </div>
                <div>
                    <p className='md:text-2xl md:w-[60%] text-xl font-normal py-5'>
                    Our mission is to empower aspiring medical professionals by providing unparalleled admission services and guidance. We strive to simplify the admission process, making it accessible and stress-free for students from diverse backgrounds. By offering personalized support and expert advice, we aim to help students secure placements in prestigious medical institutions, paving the way for their future success.
                    </p>
                </div>
                </div>
            </div>
    </div>
  );
}

export default AboutPage3;
