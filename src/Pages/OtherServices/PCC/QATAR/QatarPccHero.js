import React from 'react'


import QatarPccBanner from '../../../../Assets/pcc/PCC for Qatar.png'
import MobQatarPcc from '../../../../Assets/mobile banners/MOB PCC - Qatar.png'

function QatarPccHero() {

  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={QatarPccBanner} alt="qatar pcc banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MobQatarPcc} alt="qatar saudi pcc banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>Get<b className='text-green-500'>  PCC from Qatar </b>  <br/>within minimum days
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                    Qatar PCC is a confirmation certificate that states the applicant is clean, abstain from illegal and offensive activities, has decent conduct, and it is safe to enter him/her into another country. In the case of Qatar, this is one of the legally strict Arab nations; therefore, before giving the candidate a police clearance certificate, the police department will directly examine the applicant’s past activities.
                </p>
            </div>    
      </div>
    </>
  )
}

export default QatarPccHero