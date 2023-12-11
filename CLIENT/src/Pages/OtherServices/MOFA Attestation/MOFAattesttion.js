import React, {useState} from 'react'

import MOFA_banner from '../../../Assets/MOFA : HOME/MOFA_WEB.webp'
import banner_mob from '../../../Assets/mobile banners/MOFA.webp'

import HeroSidebar from '../HeroSidebar';


function MOFAattesttion() {

    const [readMore, setReadMore] = useState(false);

    const extraContent =<div>
            <p className='md:hidden text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3'>
            To keep you informed, we offer a document tracking system. With service centres strategically located in both metro and non-metropolitan cities across India, we handle all administrative tasks, including document collection and delivery. We are committed to providing our clients with convenient, fast, reliable, and affordable MOFA attestation services while prioritising the security and confidentiality of your data.
            </p>
    </div>
  
    const linkName = !readMore && 'Read More...';


  return (
    <>
      <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
              <img className='object-cover ' src={MOFA_banner} alt="page_banner" />
            </div>

            {/* responsive banner of MOFA attestation */}
            <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
              <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0 text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide'>Complete <br /><b className='text-green-500'>MOFA Attestation Services in India:</b> Fast, Trustworthy, and Secure </h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins mt-10 px-4 lg:p-0'>
              <b>At Trueway International, </b>  we take pride in offering fast and trustworthy MOFA attestation services. Our highly trained team is dedicated to resolving all your queries and ensuring a seamless document attestation procedure. Additionally, we provide professional document language translation services, ensuring your documents are accurately translated into the language of your destination country. </p>
              {/* readMore add in paragraph */}
              <div className='md:hidden flex'>
                <p  onClick={()=> {setReadMore (!readMore)}}>
                  <h2 className='text-green-500 ml-3 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                </p>
                { readMore && extraContent }
              </div>
              <p className='hidden md:flex text-md lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 px-4 pr-3 lg:p-0'>
              To keep you informed, we offer a document tracking system. With service centres strategically located in both metro and non-metropolitan cities across India, we handle all administrative tasks, including document collection and delivery. We are committed to providing our clients with convenient, fast, reliable, and affordable MOFA attestation services while prioritising the security and confidentiality of your data.
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

export default MOFAattesttion