import React from 'react'

import uaeEmbassyBanner from '../../../../Assets/embassy attestation/uae/UAE Embassy Banner.png'
import MobuaeEmbassy from '../../../../Assets/mobile banners/MOB UAE Embassy.png'

function UaeEmbassyHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={uaeEmbassyBanner} alt="KuwaitEmbassyBanner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MobuaeEmbassy} alt="kuwait embassy banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>No.1 <b className='text-green-500'> UAE Embassy Attestation </b> Service Provider in India
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                    If you want to use your certificates in the UAE, then you should definitely go through UAE embassy attestation procedures. For foreigners who land in the UAE, they can use their educational, personal, or commercial documents after this procedure. Without proper documentation, you will not get a UAE visa to fly there, which is why attestation is so crucial. Also, to prove the genuineness of the certificates you provided, attestation is needed. To get a work permit and start a new business there, the applicant should follow the attestation procedures of the respective country. After successfully completing the full process, your certificates will be stamped as authentic, and then you are good to go to the relevant embassy and country.
                </p>
            </div>    
      </div>
    </>
  )
}

export default UaeEmbassyHero