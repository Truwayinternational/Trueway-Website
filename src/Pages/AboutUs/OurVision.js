import React from 'react'
import OurVisionImg from '../../Assets/AboutUs/Our Vision.png'

function OurVision() {
  return (
    <>
      <div className='flex justify-center items-center bg-zinc-100 h-full w-full mb-10'>
        <div className='grid lg:grid-cols-2 max-w-[1240px] py-10 md:pb-20 pb-10'>
          <div className='md:my-auto'>
            <img className='lg:w-[400px] w-[300px] px-10 mx-auto my-auto' src={OurVisionImg} alt="thumb_img" />
          </div>
          <div className='flex flex-col lg:pr-12 md:pl-10 lg:pl-0 pr-4 px-5'>
            <h5 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold  text-black'>Our <b className='text-green-500'> Vision </b></h5>
              <p className='text-gray-500 font-poppins text-md md:text-lg '>
              Trueway International's vast network of registered offices in India and abroad enables efficient global attestation services. Our ISO-assured recognition enhances credibility while offering admission guidance and fair, honest administrative verifications. Providing cost-effective HRD attestation and a client-centric approach, we prioritize client satisfaction. With a strong track record and commitment to your success, Trueway International stands as a top choice for Embassy Attestation Services in Kerala and beyond.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default OurVision