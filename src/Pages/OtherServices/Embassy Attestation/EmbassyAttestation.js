import React, {useState} from 'react';
import EA_banner from '../../../Assets/embassy attestation/Embassy.png'
import banner_mob from '../../../Assets/embassy attestation/Embassy Mob.png'
import HeroSidebar from '../HeroSidebar';

function EmbassyAttestation() {

    const [readMore, setReadMore] = useState(false);

    const extraContent =<div>
            <p className='md:hidden text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3'>
            Getting embassy attestation for your documents can be a complex and time-consuming process. It can be quite challenging for ordinary individuals to handle and understand. To make things easier for you, Trueway International offers stress-free embassy certificate attestation services with an online document tracking facility.
            </p>
    </div>
  
    const linkName = !readMore && 'Read More...'

  return (
    <>
      <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
              <img className='object-cover ' src={EA_banner} alt="page_banner" />
              <h3 className='absolute lg:text-4xl font-HeadingFont font-extrabold text-black pl-10 py-20 '> Embassy <br/> Attestation</h3>
            </div>

            {/* responsive banner of Certificate attestation */}
            <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
              <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
              <h3 className='absolute text-3xl md:text-5xl font-HeadingFont font-extrabold text-black text-center  left-[100px] md:left-[32%] tracking-wider mt-[-100px] md:mt-[-150px]'> Embassy <br/> Attestation</h3>
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0 text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide text-green-500'>Embassy Attestation in India: <br /><p className='text-black'>Quick Attestation Services</p></h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins mt-10 px-4 lg:p-0'>
              <b> Trueway International</b> is the leading Embassy attestation agency in India. The company manages the authentication of documents that are mandatory for various purposes. This verification is required by different authorities, from self-attestation to government bodies and even foreign countries.</p>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins px-4 lg:p-0'>
              The company's attestation solutions portfolio includes Home attestation, Ministry of External Affairs, Embassy Seals, Ministry of Foreign Affairs, HRD Verification of all Universities, Certificate Attestation, Apostille Attestation etc.
              </p>
                {/* readMore add in paragraph */}
                <div className='md:hidden flex'>
                    <p  onClick={()=> {setReadMore (!readMore)}}>
                    <h2 className='text-green-500 ml-3 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                    </p>
                    { readMore && extraContent }
                </div>
              <p className='hidden md:flex text-md lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 px-4 pr-3 lg:p-0'>
              Getting embassy attestation for your documents can be a complex and time-consuming process. It can be quite challenging for ordinary individuals to handle and understand. To make things easier for you, Trueway International offers stress-free embassy certificate attestation services with an online document tracking facility.
              </p>
            </div>
          </div>

          {/* side bar navigation component*/}
          <div className='hidden lg:grid lg:w-1/2'>
            <div className='flex flex-col justify-center items-center'>
              <HeroSidebar/>
            </div>
          </div>
      </div>
    </>
  )
}

export default EmbassyAttestation