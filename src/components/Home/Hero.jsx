import React from 'react';
import { motion } from 'framer-motion';
import back from '../../assets/background.png';

const Hero = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-zinc-900 text-white md:h-screen h-[40vh] bg-cover bg-repeat"
      style={{ backgroundImage: `url(${back})`, objectFit: 'cover', objectPosition: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="bg-gradient-to-r from-[#CDE6EA] via-[#d4e9ece2] to-[#e5f0f200] h-[100%] w-[100%] p-[.1px] bg-opacity-40 flex items-start flex-col justify-center"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="md:pl-20 px-8"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:text-7xl leading-none text-4xl font-bold text-black relative"
          >
            Welcome To <br />{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5]"
            >
              Booking Admission
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-4 md:w-[55%] w-3/4 leading-6 md:text-3xl text-lg text-black"
          >
            India's leading consultancy with one stop solution for medical aspirants
          </motion.p>
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            href="#contact"
            className="md:mt-6 inline-block items-center bg-[#E5C0B8] text-white md:text-3xl font-light text-sm md:py-4 md:px-20 px-5 py-1 mt-3 rounded-full md:rounded-2xl hover:bg-black"
          >
            Join Us <i className="ri-arrow-left-s-fill"></i>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Hero;
