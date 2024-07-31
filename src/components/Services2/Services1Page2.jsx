import React from 'react'
import image1 from '../../assets/services/img1.jpeg'
import image2 from '../../assets/services/img2.jpeg'
import image3 from '../../assets/services/img3.jpeg'
import image4 from '../../assets/services/img4.jpeg'
import image5 from '../../assets/services/img5.jpeg'
const Services1Page2 = () => {
    return (
        <div className='w-full h-fit bg-white p-8 py-12'>
            <h1 className='md:text-7xl leading-none text-4xl hidden md:block font-bold text-center  text-black relative'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Admission Assistance Services</span></h1>
            <h1 className='md:text-7xl md:hidden leading-none text-4xl font-bold text-center  text-black relative'>Admission Assistance <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Services</span></h1>
            <p className='md:text-3xl text-center pt-5 text-xl'>We provide tailored admission assistance for the following medical programs:</p>
            <div className='w-full grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 md:px-10 mt-12'>
            <div className='w-full h-fit shadow-md rounded-lg overflow-hidden bg-[#84DDDC]'>
                <div className='w-full h-52 bg-red-200 relative'>
                        <img src={image1} className='w-full h-full object-cover object-top' alt="" />
                    </div>
                    <div className='md:p-8 p-4'>
                        <div className='flex gap-5 items-center '>

                            <h1 className=' md:text-4xl text-2xl font-semibold md:ml-10 ml-7'>MBBS (UG, PG)</h1>
                        </div>
                        <div className='py-5 md:text-2xl text-xl '>
                            <div className='md:w-[80%] mb-4 flex items-start'>
                                <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'>Comprehensive guidance for both undergraduate and postgraduate medical programs. </p>
                            </div>
                            <div className='md:w-[80%] flex items-start'>
                            <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'> Assistance with entrance exams, application processes, and interview preparation.</p>
                            </div>
                        </div>

                        <div className='w-full flex justify-start items-center'>
                            <button className='px-10 hover:bg-[#84DDDC] hover:text-white shadow-md border bg-white py-2 text-xl rounded-full flex items-center gap-2 font-semibold'>More <i class="ri-arrow-right-line text-xl"></i></button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit shadow-md rounded-lg overflow-hidden bg-[#CFE9ED]'>
                    <div className='w-full h-52 bg-red-200 relative'>
                        <img src={image2} className='w-full h-full object-cover object-top' alt="" />
                    </div>
                    <div className='md:p-8 p-4'>
                        <div className='flex gap-5 items-center '>

                            <h1 className=' md:text-4xl text-2xl font-semibold md:ml-10 ml-7'>BDS (UG, PG)</h1>
                        </div>
                        <div className='py-5 md:text-2xl text-xl '>
                            <div className='md:w-[80%] mb-4 flex items-start'>
                                <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'>Support for aspiring dentists at both undergraduate and postgraduate levels. </p>
                            </div>
                            <div className='md:w-[80%] flex items-start'>
                            <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'>Detailed information on curriculum, eligibility, and career prospects.</p>
                            </div>
                        </div>

                        <div className='w-full flex justify-start items-center'>
                            <button className='px-10 hover:bg-[#84DDDC] hover:text-white shadow-md border bg-white py-2 text-xl rounded-full flex items-center gap-2 font-semibold'>More <i class="ri-arrow-right-line text-xl"></i></button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit shadow-md rounded-lg overflow-hidden  bg-[#F4E9E3]'>
                <div className='w-full h-52 bg-red-200 relative'>
                        <img src={image3} className='w-full h-full object-cover object-top' alt="" />
                    </div>
                    <div className='md:p-8 p-4'>
                        <div className='flex gap-5 items-center '>

                            <h1 className=' md:text-4xl text-2xl font-semibold md:ml-10 ml-7'>BHMS (UG, PG)</h1>
                        </div>
                        <div className='py-5 md:text-2xl text-xl '>
                            <div className='md:w-[80%] mb-4 flex items-start'>
                                <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'>Expert advice for homeopathy courses, from UG to PG</p>
                            </div>
                            <div className='md:w-[80%] flex items-start'>
                            <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'>Help with college selection, application procedures, and more.</p>
                            </div>
                        </div>

                        <div className='w-full flex justify-start items-center'>
                            <button className='px-10 hover:bg-[#84DDDC] hover:text-white shadow-md border bg-white py-2 text-xl rounded-full flex items-center gap-2 font-semibold'>More <i class="ri-arrow-right-line text-xl"></i></button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit shadow-md rounded-lg overflow-hidden bg-[#E5C0B8]'>
                <div className='w-full h-52 bg-red-200 relative'>
                        <img src={image4} className='w-full h-full object-cover object-top' alt="" />
                    </div>
                    <div className='md:p-8 p-4'>
                        <div className='flex gap-5 items-center '>

                            <h1 className=' md:text-4xl text-2xl font-semibold md:ml-10 ml-7'>BAMS (UG, PG)</h1>
                        </div>
                        <div className='py-5 md:text-2xl text-xl '>
                            <div className='md:w-[80%] mb-4 flex items-start'>
                                <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'>Specialized services for those interested in Ayurveda. </p>
                            </div>
                            <div className='md:w-[80%] flex items-start'>
                            <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'> Guidance through the entire admission process.</p>
                            </div>
                        </div>

                        <div className='w-full flex justify-start items-center mt-[2.3rem]'>
                            <button className='px-10 hover:bg-[#84DDDC] hover:text-white shadow-md border bg-white py-2 text-xl rounded-full flex items-center gap-2 font-semibold'>More <i class="ri-arrow-right-line text-xl"></i></button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit shadow-md rounded-lg overflow-hidden bg-[#C3AAB0]'>
                <div className='w-full h-52 bg-red-200 relative'>
                        <img src={image5} className='w-full h-full object-cover object-top' alt="" />
                    </div>
                    <div className='md:p-8 p-4'>
                        <div className='flex gap-5 items-center '>

                            <h1 className=' md:text-4xl text-2xl font-semibold md:ml-10 ml-7'>MDS (UG, PG)</h1>
                        </div>
                        <div className='py-5 md:text-2xl text-xl '>
                            <div className='md:w-[80%] mb-4 flex items-start'>
                                <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'>Assistance for advanced dental studies and specializations. </p>
                            </div>
                            <div className='md:w-[80%] flex items-start'>
                            <div className='w-20 h-8 flex items-center justify-center'>
                                    <div className='md:w-4 md:h-4 w-3 h-3 bg-black rounded-full'></div>
                                </div>
                                <p className='text-lg md:text-3xl'> Detailed counseling on various   programs and institutions.</p>
                            </div>
                        </div>

                        <div className='w-full flex justify-start items-center'>
                            <button className='px-10 hover:bg-[#84DDDC] hover:text-white shadow-md border bg-white py-2 text-xl rounded-full flex items-center gap-2 font-semibold'>More <i class="ri-arrow-right-line text-xl"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services1Page2