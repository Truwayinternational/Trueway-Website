import React from 'react'

import MalaysiaEmbassyBanner from '../../../../Assets/embassy attestation/malaysia/MALAYSIA Embassy Banner.png'
import MobMalaysiaEmbassy from '../../../../Assets/mobile banners/MOB MALAYSIA Embassy.png'


function MalaysiaEmbassyHero() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={MalaysiaEmbassyBanner} alt="malaysiaEmbassyAttestation" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={MobMalaysiaEmbassy} alt="malaysia embassy banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-green-500  tracking-normal text-center px-4'>Malaysia Embassy Attestation <b className='text-black'> Services in India </b>
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                    If you are searching for an agency to make your embassy attestation process quick and easy, then Trueway is the answer. For the general public in places such as Delhi, Chandigarh, Jalandhar, Punjab, Bangalore, Kerala, Kochi, Hyderabad, Telangana, Trivandrum, Maharashtra, Goa, and Dubai, our Malaysian Embassy attestation services are available. Both the Ministry of External Affairs (MEA) of the Indian government and numerous foreign diplomatic offices have given their approval to our organisation, Trueway International Pvt. Ltd. The declaration is authenticated to express that it is genuine, accurate, and legal. We are an authorised co-op in India for the Malaysian Embassy and the Indian Ministry of External Affairs.   
                </p>
            </div>    
      </div>  
    </>
    
  )
}

export default MalaysiaEmbassyHero