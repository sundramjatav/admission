import React from 'react'
import image from '../../assets/bgimage.jpeg'
const AboutPage7 = () => {
    return (
        <div className='w-full h-fit pt-10 ' >
            <div className='overflow-hidden w-full md:w-[90%] m-auto md:rounded-3xl' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-full h-full bg-[#deedf0ed] p-5 py-16'>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col'>
                <h1 className='md:text-7xl text-center font-bold text-4xl hidden md:block'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Team Members and Their Expertise</span></h1>
                <h1 className='md:text-7xl text-center font-bold text-4xl w-[90%] m-auto  md:hidden'>Team Members and <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Their Expertise</span></h1>
                </div>
            </div>
            <div className='md:w-[90%] h-full md:p-5 m-auto mt-10 grid md:grid-cols-2 gap-10 grid-cols-1'>
                <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-24 h-24 rounded-md bg-blue-100 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://images.unsplash.com/photo-1656221009909-4f202547cd94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className=''>
                            <p className='text-xl font-bold'>Dr. [Name], </p>
                            <p className='text-xl'>Founder & CEO</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'><b>Expertise: </b>Medical Education, Admissions Strategy, Career Counseling</p>
                    </div>
                    <div>
                        <p className='text-xl'><b>Background:</b> With over 20 years of experience in the medical field, Dr. [Name] is a visionary leader dedicated to helping students achieve their dreams.</p>
                    </div>
                </div>
                <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-24 h-24 rounded-md bg-blue-100 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className=''>
                            <p className='text-xl font-bold'>Dr. [Name], </p>
                            <p className='text-xl'>Chief Admissions Officer</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'><b>Expertise: </b>Admission Processes, Application Review, Institutional Partnerships</p>
                    </div>
                    <div>
                        <p className='text-xl'><b>Background:</b>  A seasoned professional with a deep understanding of admission protocols and a strong network of academic contacts.</p>
                    </div>
                </div>
                <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-24 h-24 rounded-md bg-blue-100 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className=''>
                            <p className='text-xl font-bold'>Dr. [Name], </p>
                            <p className='text-xl'>Senior Consultant</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'><b>Expertise: </b> Interview Coaching, Document Preparation, Student Mentorship</p>
                    </div>
                    <div>
                        <p className='text-xl'><b>Background:</b> Known for his meticulous attention to detail and student-centered approach, Mr. [Name] has successfully guided numerous students through the admission process.</p>
                    </div>
                </div>
                <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-24 h-24 rounded-md bg-blue-100 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className=''>
                            <p className='text-xl font-bold'>Dr. [Name], </p>
                            <p className='text-xl'> Marketing and Outreach Coordinator</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'><b>Expertise: </b>Student Outreach, Marketing Strategies, Social Media Engagement</p>
                    </div>
                    <div>
                        <p className='text-xl'><b>Background:</b>  With a knack for connecting with students and a talent for effective communication, Ms. [Name] plays a crucial role in spreading awareness about our services</p>
                    </div>
                </div>
                <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-24 h-24 rounded-md bg-blue-100 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://images.unsplash.com/photo-1649433658557-54cf58577c68?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className=''>
                            <p className='text-xl font-bold'>Dr. [Name], </p>
                            <p className='text-xl'>Administrative Manager</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'><b>Expertise: </b>Operations Management, Client Relations, Process Optimization</p>
                    </div>
                    <div>
                        <p className='text-xl'><b>Background:</b> Ensuring smooth day-to-day operations, Mr. [Name] is the backbone of our administrative functions.</p>
                    </div>
                </div>
                
            </div>
            </div>
            </div>
        </div>
    )
}

export default AboutPage7