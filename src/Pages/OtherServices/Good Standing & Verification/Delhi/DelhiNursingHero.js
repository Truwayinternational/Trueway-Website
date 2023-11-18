import React from 'react'

import DelhiNursingWEB from '../../../../Assets/goodstanding/Web Delhi Nursing Council.png'
import DelhiNursingMOB from '../../../../Assets/mobile banners/Delhi Nursing Mob.png'


function DelhiNursingHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={DelhiNursingWEB} alt="Delhi nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={DelhiNursingMOB} alt=" Delhi nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Fast & Easy Good standing certificate from <br/><b className='text-green-500'> Delhi Nursing Council</b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Medical professionals who work in Delhi and plan to move abroad to work in the healthcare sector should obtain a good-standing certificate. Otherwise, you can never achieve your goal, which is to secure a job abroad. This is where Trueway is playing a crucial role in this sector. We help you pursue a good-standing certificate hassle-free.
                </p>
            </div>    
      </div>
    </>
  )
}

export default DelhiNursingHero