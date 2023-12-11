import React from 'react'

import TelanganaNursingWEB from '../../../../Assets/goodstanding/Web Telangana Nursing Council.webp'
import TelenganaNursingMOB from '../../../../Assets/mobile banners/TelenganaMOB.webp'
function TelenganaHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={TelanganaNursingWEB} alt="telengana nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={TelenganaNursingMOB} alt=" telengana nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Good standing certificate from<b className='text-green-500'> Telangana Nursing Council</b> quickly and securely
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Every nurse working in the Telangana state who plans to migrate has to apply for a good standing certificate. Without this certificate, you cannot prove the validity of your professional credentials. That is why it is said that a good standing certificate is so crucial and important. In cases of professional recognition, credentialing, licence renewal, legal requirements, visas, and immigration, this certificate is mandatory. Trueway helps you pursue this certificate without giving you any burden.
                </p>
            </div>    
      </div>
    </>
  )
}

export default TelenganaHero