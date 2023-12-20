import React from 'react'


import SaudiBaanner from '../../../../Assets/pcc/PCC for Saudi Arabia.webp'
import MobSaudiPCC from '../../../../Assets/mobile banners/MOB PCC - Saudi Arabia.webp'


function SaudiPccHero() {
  return (
    <>
      <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={SaudiBaanner} alt="saudi pcc banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MobSaudiPCC} alt="mobile saudi pcc banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'>India's fastest <br/>Police Clearance Certificate <br/><b className='text-green-500'>  Service from Saudi Arabia </b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Saudi police clearance certificates will be issued by the Saudi government itself. It is needed for an individual who has lived in Saudi Arabia for more than two years with a resident visa. This PCC is proof that this individual didn’t engage in any illegal practices, unlawful offences, or other wrongdoings against other individuals or nations.
                </p>
            </div>    
      </div>
    </>
  )
}

export default SaudiPccHero