import React  from 'react'
import Avatar_1 from '../../../Assets/certificate attestation/avatar_1.png'

function WhatisCertificationAttestation() {
  return (
    <div>
        <div className='flex h-full w-max-1240px py-10'>
            <img className='lg:px-4 lg:w-[-100px] ' src={Avatar_1} alt="avatar_1" />
          <div className='lg:mx-10 lg:pl-5'>
            <div className='mx-4 lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-Philosopher font-extrabold text-black  tracking-wide  '>What is<br/><p className='text-green-500'>Certificate Attestation ?</p></h3>
            </div>
            <div className='lg: w-full ml-3 lg:px-16 px-4 '>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins pr-3 lg:p-0'>
              Certificate attestation is the process of validating the authenticity of your documents such as commercial, educational and personal for international recognition. Thus your certificate becomes valid in your destination country.  If you are planning to move to a foreign country for any purposes like employment, higher studies, or business setup then certificate attestation is so crucial. It involves obtaining sales and signatures from designated authorities and making them acceptable for use in foreign countries. This will help to prevent fraud activities and maintain the credibility of certificates across borders. This facilitates smooth international interactions in education, trade, and personal matters. 
              </p>
            </div> 
          </div>                          
        </div>
    </div>
    
  )
}

export default WhatisCertificationAttestation