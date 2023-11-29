import React from 'react'
import thumb_img from '../../../Assets/ISO/thumb.webp'

function YourBestChoice() {
  return (
    <>
        <div className='flex justify-center items-center bg-zinc-100 h-full w-full mb-10'>
            <div className='grid md:grid-cols-2 max-w-[1280px] py-10 '>
                <div className='md:pt-10 lg:pl-32'>
                    <img className='lg:w-[400px] px-10' src={thumb_img} alt="thumb_img" />
                </div>
                <div className='flex flex-col lg:pr-20 md:pr-10 pr-4 md:px-0  px-5'>
                    <h5 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold '> <b className='text-green-500'> Trueway:</b> Your best choice for Embassy Attestation</h5>
                    <p className='text-gray-500 font-poppins '>
                    Trueway International's vast network of registered offices in India and abroad enables efficient global attestation services. Our ISO-assured recognition enhances credibility while offering admission guidance and fair, honest administrative verifications. Providing cost-effective HRD attestation and a client-centric approach, we prioritize client satisfaction. With a strong track record and commitment to your success, Trueway International stands as a top choice for Embassy Attestation Services in Kerala and beyond.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default YourBestChoice