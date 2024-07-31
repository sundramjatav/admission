import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/footerlogo.svg';
import footer from '../assets/footer.svg'; // Assuming this is your background image

const Footer = () => {

    return (
        <div className='w-full md:h-[100vh] h-fit relative overflow-hidden bg-no-repeat' style={{backgroundImage: `url(${footer})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='w-full md:mt-48 mt-16 md:px-16 px-4 '>
                <img src={logo} className='md:w-fit w-[200px] mb-5' alt='' />
                
                <div className='w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-0 gap-3 md:pb-4 pb-4 text-white md:mt-16 mt-3'>
                    <div className='w-full h-full'>
                        <p className='md:w-[60%] w-full leading-[1.2] md:text-xl text-sm'>Welcome to [Your Admission Service Name], your trusted partner in securing admission to top medical institutions for MBBS, MDS, BDS, BHMS, and BAMS programs. </p>
                        <button className='py-1 rounded-full font-medium text-2xl hover:bg-black hover:text-white4 px-16 shadow-md text-black shadow-[#468383] md:flex hidden mt-7 items-center justify-center bg-[#84DDDC]'> <i class="ri-arrow-right-s-fill text-3xl "></i> Join Us</button>
                    </div>
                    <div className='w-full h-full md:grid hidden text-xl grid-cols-1 gap-1'>
                        {/* <Link to={'/about'}>About</Link> */}
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='/services-1'>Services1</a>
                        <a href='/services-2'>Services2</a>
                        <a href='/mbbs-course'>Courses</a>
                        <a href='/admission-process'>Admission Process</a>
                        <a href='/blog-news'>Blog/News</a>
                        <a href='/ocntact-us'>Contact Us</a>
                        
                    </div>
                    <div className='w-full h-full flex flex-col'>
                        <p className='font-medium text-xl'>Contact Us</p>
                        <div className='flex flex-col md:text-xl md:mt-4'>
                            <span>Email : <Link to={'mailto:info@youradmissionservice.com'} className='hover:underline'>info@youradmissionservice.com</Link></span>
                            <span>Phone : <Link to={'tel:+91 6264965313'} className='hover:underline'>+91 6264965313</Link></span>
                        </div>
                        <p className='font-medium md:text-xl md:mt-5 mt-0'>Address</p>
                        <div className='flex flex-col md:text-xl md:mt-4 mt-0'>
                            <span>123 Main Street, City, Country</span>
                        </div>
                    </div>
                </div>
                <div className='w-full border-t-2 pt-4 text-white flex flex-col md:flex-row gap-2 items-center whitespace-nowrap justify-between mb-5 '>
                    <Link className='hover:underline md:text-xl text-xs '>© 2024 [Service Name]. All rights reserved.</Link>
                    {/* <img className='md:h-[35px] h-[20px] md:pr-10' src="https://s3-alpha-sig.figma.com/img/530f/9bed/fc11277290cc7af9bee259cd617cb3db?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sg7HLQBuGfqS528WwcxEPJqVtituZ1DN6DLpRftpVWv~HnP7y2mQCxBgCoGllP82VnqDYLGaJwJ9JkhxYdKb5qwnHzrusp~RgYTZIZkuuQKA9Dr3gbtTGi36NE2Ht2vx3RvkBpLjFX8OBxeK87isKU77FrnQWu3b6MX7Mn3SNLe7NMbQSvQgYhG62O2HwZIJzqcLDAjGgdExwSPokxmIiSWtQy8AC3y9SeTbx66-dXc8mo3ECVJ6te80VoUTir3AJZq3LN3v1fz7AiSnOe-sMx3Dujg~1IUmbacw7cnTeHTjFHqa7iwD9~7IdHryB-H~9t54lh5MrgNlcncWrhAWxQ__" alt='' /> */}
                    <div className='text-2xl flex items-center gap-5'>
                    <i class="cursor-pointer ri-instagram-line"></i>
                    <i class="cursor-pointer ri-facebook-fill"></i>
                    <i class="cursor-pointer ri-twitter-fill"></i>
                    <i class="cursor-pointer ri-youtube-fill"></i>
                    <i class="cursor-pointer ri-linkedin-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
