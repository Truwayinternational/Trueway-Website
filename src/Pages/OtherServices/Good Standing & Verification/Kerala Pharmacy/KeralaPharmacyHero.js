import React from 'react'

import keralaPharmacyWEB from '../../../../Assets/goodstanding/Web Kerala Pharmacy Council.webp'
import KeralaPharmacyMOB from '../../../../Assets/mobile banners/PharmacyMOB.webp'

function KeralaPharmacyHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={keralaPharmacyWEB} alt="kerala Pharmacy council banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={KeralaPharmacyMOB} alt=" kerala pharmacy council MOB banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10 font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'> Trueway- India's Fastest Agency for <b className='text-green-500'> Kerala Pharmacy Good Standing Certificates</b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                    Trueway is a recognized agency located in India that helps in obtaining good standing certificates from Kerala pharmacy rapidly. The speciality of Trueway is that they are well versed in documentation, application, and verification processes, so we can complete the process efficiently. Trueway ensures fast-track services, thus saving you time and money and also helping you reduce potential stress. To get employment abroad, a visa, immigration purposes, licence renewal, etc., good standing is mandatory.
                </p>
            </div>    
      </div>
    </>
  )
}

export default KeralaPharmacyHero