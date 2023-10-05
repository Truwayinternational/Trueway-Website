import React, {useState} from 'react'
import Avatar_1 from '../../../Assets/certificate attestation/avatar_1.png'

function WhatisCertificationAttestation() {

  const [readMore, setReadMore] = useState(false);

  const extraContent =<div>
          <p className='md:hidden flex text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3'>
          If you are planning to move to a foreign country for any purposes like employment, higher studies, or business setup then certificate attestation is so crucial. It involves obtaining sales and signatures from designated authorities and making them acceptable for use in foreign countries. This will help to prevent fraud activities and maintain the credibility of certificates across borders. This facilitates smooth international interactions in education, trade, and personal matters.
          </p>
  </div>

const linkName = !readMore && 'Read More...'

return (
  <div>
      <div className='max-w-[1240px] mx-auto place-content-center py-10'>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_1} alt="Avatar_1" />
            <h2 className='md:text-5xl lg:px-48 text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is<br/><p className='text-green-500'>Certificate Attestation ?</p></h2>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_1} alt="avatar_1" />
          </div>
          <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins pr-3 lg:p-0'>
            Certificate attestation is the process of validating the authenticity of your documents such as commercial, educational and personal for international recognition. Thus your certificate becomes valid in your destination country.
            </p>
            {/* readMore add in paragraph */}
            <div className='md:hidden flex'>
              <p  onClick={()=> {setReadMore (!readMore)}}>
                <h2 className='text-green-500 text-lg cursor-pointer font-poppins'>{linkName}</h2>
              </p>
              { readMore && extraContent }
            </div>
            <p className='hidden md:flex text-md  lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3 lg:p-0'>
            If you are planning to move to a foreign country for any purposes like employment, higher studies, or business setup then certificate attestation is so crucial. It involves obtaining sales and signatures from designated authorities and making them acceptable for use in foreign countries. This will help to prevent fraud activities and maintain the credibility of certificates across borders. This facilitates smooth international interactions in education, trade, and personal matters.
            </p>
          </div>    
        </div>                          
      </div>
  </div>
)
}


export default WhatisCertificationAttestation