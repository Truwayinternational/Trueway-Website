import React from 'react'


import OetBanner from '../../../../Assets/examCoaching/OET Coaching.webp'
import MobOetBanner from '../../../../Assets/mobile banners/Mob OET  Coaching.webp'

function OetHero() {
  return (
    <>
      <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={OetBanner} alt="Oet exam coaching banner" />
                {/* mobile banner here */}
                <img className='lg:hidden w-screen ' src={MobOetBanner} alt="mobile oet banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Join the Best <b className='text-green-500'> OET online & OET coaching centre </b> in Kerala
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                OET is a mandatory qualification in major English-speaking countries for healthcare professionals. It is one of the vital steps you must take to pass the OET exam before your overseas migration. If you're eagerly searching for the best OET coaching in Kerala, Trueway can provide you with the best and most promising OET coaching in the region. With years of experience and highly qualified faculty, we are well-equipped to guide you and offer perfect coaching with updated study materials. Our coaching program specializes in training healthcare professionals in medical English, such as doctors, nurses, pharmacists, dentists, veterinarians, dietitians, and other healthcare professionals.
                </p>
            </div>    
      </div>
    </>
  )
}

export default OetHero