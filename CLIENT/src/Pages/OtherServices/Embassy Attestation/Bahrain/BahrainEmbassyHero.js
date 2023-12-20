import React from 'react'

import BahrainEmbassyBanner from '../../../../Assets/embassy attestation/bahrain/BAHRAIN Embassy Banner.webp'
import MobBahrainEmbassy from '../../../../Assets/mobile banners/MOB BAHRAIN Embassy.webp'


function BahrainEmbassyHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={BahrainEmbassyBanner} alt="Bahrain embassy banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MobBahrainEmbassy} alt="Bahrain embassy Mobile " />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Top<b className='text-green-500'> Bahrain Embassy <br/> attestation </b> services in India
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Trueway International is known as the leading Embassy attestation agency in India because of its ability to solve the complexity of attestation procedures. The procedure for having your documents attested by an embassy can be difficult and time-consuming. It can be very difficult for regular people to handle and comprehend. Trueway International provides stress-free embassy certificate attestation services with an online document monitoring tool to make things easy for you.
                </p>
            </div>    
      </div>
    </>
  )
}

export default BahrainEmbassyHero