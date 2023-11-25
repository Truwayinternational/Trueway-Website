import React from 'react'

import ParamedicalWEB from '../../../../Assets/goodstanding/Web Paramedical Council.webp'
import ParamedicalMOB from '../../../../Assets/mobile banners/paramedicalMOB.webp'


function KeralaParamedicalHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={ParamedicalWEB} alt="paramedical nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={ParamedicalMOB} alt=" paramedical nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10 md:mx-10 font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>  India's Fastest Agency for <b className='text-green-500'> Kerala Pharmaceutical Good Standing Certificates</b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                When the candidate migrates to another nation, their respective department will definitely need a good standing certificate. A good standing certificate is mandatory for visa application requirements, job opportunities, licence process, etc. In India, Trueway is the one and only fastest consultancy that helps you get a Kerala Pharmaceutical Good Standing Certificate without any hassle or trouble. Our dedicated team members have 15 years of experience in this process, and they will look after the entire process when you submit the documents.
                </p>
            </div>    
      </div>
    </>
  )
}

export default KeralaParamedicalHero