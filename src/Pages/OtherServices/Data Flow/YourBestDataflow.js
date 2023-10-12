import React from 'react'
import thumb_img from '../../../Assets/ISO/thumb.png'
import YourBestDataflowCards from './YourBestDataflowCards'


function YourBestDataflow() {

  return (
    <>
        <div className='flex justify-center items-center bg-zinc-200 h-full w-full'>
            <div className='grid md:grid-cols-2 max-w-[1240px] py-10 '>
                <div className='md:pt-10 lg:pl-[120px]'>
                    <img className='lg:w-[300px] w-[250px]  m-auto' src={thumb_img} alt="thumb_img" />
                </div>
                <div className='flex flex-col lg:pr-20 md:pr-10 pr-4 md:px-0  px-5'>
                    <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold '> <b className='text-green-500'> Trueway:</b> Your Best DataFlow Choice for Gulf Countries</h1>
                    <p className='text-gray-500 font-poppins '>
                        For healthcare professionals who need help through the DataFlow procedure and credential verification required by governmental authorities including DHA, MOH, HAAD, QCHP, OMSB, and SLE, we provide thorough guidance.Our services streamline exam registration with DHA, HAAD, and MOH, ensuring compliance with licensing requirements in Dubai, Abu Dhabi, Saudi Arabia, Qatar, Oman, and the UAE.
                    </p>
                </div>
            </div>
        </div>
        {/* SOME CONTENT ADD LIKE COUROUSEL CARDS  */}
        <YourBestDataflowCards/>

        <div  className='flex  bg-zinc-200 mx-auto place-content-center'>
            <p className='text-gray-500 font-poppins md:text-lg mb-10 px-6 md:px-8 lg:px-0 max-w-5xl'>
                Several associated professionals, like anesthesiologists, audiologists, physical therapists, medical coders, radiographers, and more are supported by our full assistance. We help with the verification of their credentials and make sure they meet all organisational and governmental standards.
            </p>
        </div>
    </>
  )
}

export default YourBestDataflow