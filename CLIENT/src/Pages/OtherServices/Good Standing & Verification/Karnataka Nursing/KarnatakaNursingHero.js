import React from 'react'


import karnatakaNursingWEB from '../../../../Assets/goodstanding/Web Karnataka Nursing Council.webp'
import KarnatakaNursingMOB from '../../../../Assets/mobile banners/karnataka nursing MOB.webp'

function KarnatakaNursingHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={karnatakaNursingWEB} alt="karnataka nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={KarnatakaNursingMOB} alt="mobile karnataka nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Quick and safe <b className='text-green-500'> Karnataka Nursing Council </b> Certificate of good standing
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                The Karnataka State Nursing Council regulates the nursing sector in Kerala. As a result, in order to obtain a licence or other documents relevant to the nursing industry, the candidate must contact this nursing council. To relocate abroad or pursue higher education abroad, a nurse must apply for a good standing certificate from the Karnataka State Nursing Council.<br/>
                You can only apply if you are a registered nurse, and you must also have a current Karnataka Nursing Council licence. The good standing certificate is a report that validates nurses' goodwill and behaviour in their Karnataka careers. You must be a registered nurse with the KSNC to get a good standing certificate.
                </p>
            </div>    
      </div>
    </>
  )
}

export default KarnatakaNursingHero