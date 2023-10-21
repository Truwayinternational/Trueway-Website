import React, {useState} from 'react'

import home_banner from '../../../Assets/MOFA : HOME/HOME_WEB.png'
import banner_mob from '../../../Assets/mobile banners/homeAttestation.png'

import HeroSidebar from '../HeroSidebar';

function HomeAttestation() {

    const [readMore, setReadMore] = useState(false);

    const extraContent =<div>
            <p className='md:hidden text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3'>
            Our unwavering dedication to excellence has earned us a reputation for reliability and transparency in the field of attestation and apostille services. Our dedicated team of professionals upholds principles of fairness, and our mission is to provide the best attestation service possible. We view each accomplishment as a stepping stone toward your continuous growth.
            </p>
    </div>
  
    const linkName = !readMore && 'Read More...';

  return (
    <>
      <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
              <img className='object-cover ' src={home_banner} alt="page_banner" />
              <h3 className='absolute lg:text-4xl font-HeadingFont font-extrabold text-black pl-10 py-20 '>Home<br/> Attestation</h3>
            </div>

            {/* responsive banner of MOFA attestation */}
            <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
              <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0  text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide'>Best <b className='text-green-500'>Home Department attestation Service agency in India</b></h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins mt-10 px-4 lg:p-0'>
              <b>At Trueway International, </b>  we are more than just a service provider; we are your trusted partner in securing your document authentication needs and building lasting connections with our valued clients. We ensure top service quality for the authentication of vital documents such as birth certificates and marriage certificates, guaranteeing the highest standards of accuracy and legitimacy. This commitment provides peace of mind to our clients.</p>
              <br/>
              {/* readMore add in paragraph */}
              <div className='md:hidden flex'>
                <p  onClick={()=> {setReadMore (!readMore)}}>
                  <h2 className='text-green-500 ml-3 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                </p>
                { readMore && extraContent }
              </div>
              <p className='hidden md:flex text-md lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 px-4 pr-3 lg:p-0'>
              Our unwavering dedication to excellence has earned us a reputation for reliability and transparency in the field of attestation and apostille services. Our dedicated team of professionals upholds principles of fairness, and our mission is to provide the best attestation service possible. We view each accomplishment as a stepping stone toward your continuous growth.
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

export default HomeAttestation