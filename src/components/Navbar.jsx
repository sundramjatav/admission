import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close dropdowns and mobile menu when route changes
    setDropdownOpen(null);
    setNestedDropdownOpen(null);
    setMobileMenuOpen(false);
  }, [location]);

  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
    setNestedDropdownOpen(null); // Close nested dropdowns when toggling a parent dropdown
  };

  const handleNestedDropdownToggle = (dropdown) => {
    setNestedDropdownOpen(nestedDropdownOpen === dropdown ? null : dropdown);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <div className='sticky top-0 bg-white z-50 border-b-2 border-black'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='flex justify-between items-center py-5 md:px-20 px-10'
      >
        <div>
          <img src={logo} className='md:w-32 w-24' alt="logo" />
        </div>
        <div className='lg:flex gap-10 items-center hidden'>
          <NavLink
          to={'/'}
            className={({ isActive }) =>
              `text-2xl cursor-pointer relative after:content after:absolute after:w-full after:rounded-full after:h-1 ${isActive ? 'after:left-0 after:-bottom-1 after:bg-[#52C6C5]' : 'after:-left-52 hover:after:left-0 hover:after:-bottom-1 hover:after:bg-[#52C6C5]'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-2xl transition-all duration-300 cursor-pointer relative after:content after:absolute after:w-full after:rounded-full after:h-1 ${isActive ? 'after:left-0 after:-bottom-1 after:bg-[#52C6C5]' : 'after:-left-52 hover:after:left-0 hover:after:-bottom-1 hover:after:bg-[#52C6C5]'}`
            }
          >
            About
          </NavLink>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="text-2xl m-2 relative after:content after:absolute after:w-full after:rounded-full after:h-1"
              onClick={() => handleDropdownToggle('services')}
            >
              Services <i class="ri-arrow-down-s-line"></i>
            </div>
            <ul tabIndex={0} className={`dropdown-content bg-base-100 z-[1] w-60 mt-5 shadow ${dropdownOpen === 'services' ? 'block' : 'hidden'}`}>
              <div className='w-full h-[2px] bg-[#52C6C5]'></div>
              <div className='flex flex-col gap-2 text-lg p-2'>
                <Link to='/services-1' className='cursor-pointer'>Services 1</Link>
                <Link to='/services-2' className='cursor-pointer'>Services 2</Link>
              </div>
            </ul>
          </div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="text-2xl m-2"
              onClick={() => handleDropdownToggle('courses')}
            >
              Courses <i class="ri-arrow-down-s-line"></i>
            </div>
            <ul tabIndex={0} className={`dropdown-content bg-base-100 z-[1] w-40 mt-5 shadow ${dropdownOpen === 'courses' ? 'block' : 'hidden'}`}>
              <div className='w-full h-[2px] bg-[#52C6C5]'></div>
              <div className='p-2 flex flex-col gap-2 text-lg'>
                <li className='cursor-pointer' onClick={() => handleNestedDropdownToggle('MBBS')}>
                 <div className='flex justify-between'> MBBS <i class="ri-arrow-down-s-line"></i></div>
                  {nestedDropdownOpen === 'MBBS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>MBBS 1</Link>
                    </ul>
                  )}
                </li>
                <li className='cursor-pointer' onClick={() => handleNestedDropdownToggle('MDS')}>
                 <div className='flex justify-between'> MDS <i class="ri-arrow-down-s-line"></i></div>
                  {nestedDropdownOpen === 'MDS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>MDS 1</Link>
                    </ul>
                  )}
                </li>
                <li className='cursor-pointer' onClick={() => handleNestedDropdownToggle('BDS')}>
                  <div className='flex justify-between'>BDS <i class="ri-arrow-down-s-line"></i></div>
                  {nestedDropdownOpen === 'BDS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>BDS 1</Link>
                    </ul>
                  )}
                </li>
                <li className='cursor-pointer' onClick={() => handleNestedDropdownToggle('BAMS')}>
                  <div className='flex justify-between'>BAMS <i class="ri-arrow-down-s-line"></i></div>
                  {nestedDropdownOpen === 'BAMS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>BAMS 1</Link>
                    </ul>
                  )}
                </li>
                <li className='cursor-pointer' onClick={() => handleNestedDropdownToggle('BHMS')}>
                  <div className='flex justify-between'>BHMS <i class="ri-arrow-down-s-line"></i></div>
                  {nestedDropdownOpen === 'BHMS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>BHMS 1</Link>
                    </ul>
                  )}
                </li>
              </div>
            </ul>
          </div>
          <NavLink
            to="/admission-process"
            className={({ isActive }) =>
              `text-2xl transition-all duration-300 cursor-pointer relative after:content after:absolute after:w-full after:rounded-full after:h-1 ${isActive ? 'after:left-0 after:-bottom-1 after:bg-[#52C6C5]' : 'after:-left-52 hover:after:left-0 hover:after:-bottom-1 hover:after:bg-[#52C6C5]'}`
            }
          >
            Admission Process
          </NavLink>
          <NavLink
            to="/blog-news"
            className={({ isActive }) =>
              `text-2xl transition-all duration-300 cursor-pointer relative after:content after:absolute after:w-full after:rounded-full after:h-1 ${isActive ? 'after:left-0 after:-bottom-1 after:bg-[#52C6C5]' : 'after:-left-52 hover:after:left-0 hover:after:-bottom-1 hover:after:bg-[#52C6C5]'}`
            }
          >
            Blog/News
          </NavLink>
          <button onClick={()=> navigate('/contact-us')} className='px-5 py-1 bg-[#E5C0B8] text-white hover:bg-black text-2xl rounded-full'>Contact Us</button>
        </div>
        <div className="lg:hidden">
          <i className="ri-menu-3-line text-2xl" onClick={handleMobileMenuToggle}></i>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: -100}}
            animate={{ y: 0 }}
            // exit={{ y: -100 }}
            className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-start`}
          >
            <div className="flex justify-between w-full px-10 p-5">
              <img src={logo} className='w-24' alt="logo" />
              <i className="ri-close-line text-2xl" onClick={handleMobileMenuToggle}></i>
            </div>
            <div className='flex flex-col px-5 items-start'>
              <NavLink to="/" className="text-2xl mb-5" onClick={handleMobileMenuToggle}>
                Home
              </NavLink>
              <NavLink to="/about" className="text-2xl mb-5" onClick={handleMobileMenuToggle}>
                About
              </NavLink>

          {/* Services Dropdown */}
          <div className="mb-5 w-full">
            <div
              role="button"
              className="text-2xl relative"
              onClick={() => handleDropdownToggle('services')}
            >
              Services <i className="ri-arrow-down-s-line"></i>
            </div>
            <ul className={`transition-max-height duration-300 ease-in-out overflow-hidden ${dropdownOpen === 'services' ? 'max-h-screen' : 'max-h-0'}`}>
              <div className='flex flex-col gap-2 text-xl px-5'>
                <Link to='/services-1' className='cursor-pointer' onClick={handleMobileMenuToggle}>Services 1</Link>
                <Link to='/services-2' className='cursor-pointer' onClick={handleMobileMenuToggle}>Services 2</Link>
              </div>
            </ul>
          </div>

          {/* Courses Dropdown */}
          <div className="mb-5 w-full">
            <div
              role="button"
              className="text-2xl"
              onClick={() => handleDropdownToggle('courses')}
            >
              Courses <i className="ri-arrow-down-s-line"></i>
            </div>
            <ul className={`transition-max-height duration-300 ease-in-out overflow-hidden ${dropdownOpen === 'courses' ? 'max-h-screen' : 'max-h-0'}`}>
              <div className='px-5 flex flex-col gap-2 text-xl'>
                <li className='cursor-pointer ' onClick={() => handleNestedDropdownToggle('MBBS')}>
                  MBBS <i class="ri-arrow-down-s-line"></i>
                  {nestedDropdownOpen === 'MBBS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>MBBS 1</Link>
                    </ul>
                  )}
                </li>
                <li className='cursor-pointer' onClick={() => handleNestedDropdownToggle('MDS')}>
                  MDS <i class="ri-arrow-down-s-line"></i>
                  {nestedDropdownOpen === 'MDS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>MDS 1</Link>
                    </ul>
                  )}
                </li>
                <li className='cursor-pointer' onClick={() => handleNestedDropdownToggle('BDS')}>
                  BDS <i class="ri-arrow-down-s-line"></i>
                  {nestedDropdownOpen === 'BDS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>BDS 1</Link>
                    </ul>
                  )}
                </li>
                <li className='cursor-pointer' onClick={() => handleNestedDropdownToggle('BAMS')}>
                  BAMS <i class="ri-arrow-down-s-line"></i>
                  {nestedDropdownOpen === 'BAMS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>BAMS 1</Link>
                    </ul>
                  )}
                </li>
                <li className='cursor-pointer' onClick={() => handleNestedDropdownToggle('BHMS')}>
                  BHMS <i class="ri-arrow-down-s-line"></i>
                  {nestedDropdownOpen === 'BHMS' && (
                    <ul className='ml-4 mt-2'>
                      <Link to={'/mbbs-course'} className='cursor-pointer'>BHMS 1</Link>
                    </ul>
                  )}
                </li>
              </div>
            </ul>
          </div>

          <NavLink to="/admission-process" className="text-2xl mb-5" onClick={handleMobileMenuToggle}>
            Admission Process
          </NavLink>
          <NavLink to="/blog-news" className="text-2xl mb-5" onClick={handleMobileMenuToggle}>
            Blog/News
          </NavLink>
          <button  onClick={()=> navigate('/contact-us')}  className='px-5 py-1 bg-[#E5C0B8] text-white hover:bg-black text-2xl rounded-full'>Contact Us</button>
        </div>
          </motion.div>
        )}
        </AnimatePresence>
    </div>
  );
}

export default Navbar;
