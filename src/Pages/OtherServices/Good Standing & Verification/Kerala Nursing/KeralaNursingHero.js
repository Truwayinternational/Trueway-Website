import React from 'react'


import keralaNursingWeb from '../../../../Assets/goodstanding/Web Kerala  Nursing Council.png'
import keralaNursingMob from '../../../../Assets/mobile banners/kerala Nursing .png'

function KeralaNursingHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={keralaNursingWeb} alt="kerala nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={keralaNursingMob} alt="mobile kerala nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Get Good Standing <br/>Certificate from<b className='text-green-500'>  Kerala <br/>Nursing Council </b> Quickly
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                In Kerala, the nursing sector is regulated by the Kerala Nursing Council. Therefore, in order to issue any licence or any other paperwork related to the nursing field, the candidate has to connect with this nursing council. For a nurse to migrate abroad or to pursue higher studies abroad, they have to apply for a good standing certificate at the Kerala Nursing Council.
                Only if you are a registered nurse can you apply for this, and along with that, you should hold a current Kerala Nursing Council licence.
                </p>
            </div>    
      </div>
    </>
  )
}

export default KeralaNursingHero