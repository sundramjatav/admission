import React from 'react'

const AboutPage9 = () => {
    return (
        <div className='w-full h-fit bg-[#F4E9E3] md:p-16 p-5'>
            <div className='flex flex-col'>
                <h1 className='md:text-7xl font-bold text-4xl '>Comprehensive <br /><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '> Support</span>
                    </h1>
            </div>
            <div className='mt-10 mb-16 text-2xl md:w-[40%]'>
                <p>Our team provides end-to-end admission services, ensuring all aspects of the process are covered</p>
            </div>
            <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 border'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-16 h-16 bg-red-50 rounded-md'></div>
                        <p className='text-3xl font-bold'>Expert Guidance </p>
                    </div>
                    <div>
                        <p className='text-2xl'>Benefit from the knowledge and experience of seasoned professionals in the medical education field.</p>
                    </div>
                </div>
                <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 border'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-16 h-16 bg-red-50 rounded-md'></div>
                        <p className='text-3xl font-bold'>Personalized Attention </p>
                    </div>
                    <div>
                        <p className='text-2xl'>Receive tailored advice and support based on your unique needs and goals.</p>
                    </div>
                </div>
                <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 border'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-16 h-16 bg-red-50 rounded-md'></div>
                        <p className='text-3xl font-bold'>Proven Success </p>
                    </div>
                    <div>
                        <p className='text-2xl'>Join the ranks of our many successful clients who have secured admissions to prestigious medical programs</p>
                    </div>
                </div>
                <div className='h-fit w-full bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 border'>
                    <div className='flex gap-5 items-center'>
                        <div className='w-16 h-16 bg-red-50 rounded-md'></div>
                        <p className='text-3xl font-bold'>Ethical Practices </p>
                    </div>
                    <div>
                        <p className='text-2xl'>We uphold the highest standards of integrity and transparency in all our dealings</p>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-2xl text-center'>Ready to embark on your medical career? Let [Company Name] be your guide. Contact us today to schedule a consultation and take the first step toward your future in medicine.</p>
            </div>
        </div>
    )
}

export default AboutPage9