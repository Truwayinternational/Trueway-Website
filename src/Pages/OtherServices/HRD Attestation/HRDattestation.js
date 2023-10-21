import React, {useState} from 'react'
import HRD_banner from '../../../Assets/HRD Attestation/HRD banner.png'
import banner_mob from '../../../Assets/mobile banners/HRDattestation.png'
import HeroSidebar from '../HeroSidebar';

function HRDattestation() {

    const [readMore, setReadMore] = useState(false);

    const extraContent =<div>
            <p className='md:hidden text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3'>
            TrueWay's commitment to genuine and efficient services, including timely delivery of stamped and translated certificates, marks us as the optimal choice for HRD attestation, ensuring client satisfaction while simplifying complex procedures for global academic and professional recognition.
            </p>
    </div>
  
    const linkName = !readMore && 'Read More...';

  return (
    <>
      <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
              <img className='object-cover ' src={HRD_banner} alt="page_banner" />
              <h3 className='absolute lg:text-4xl font-HeadingFont font-extrabold text-black pl-10 py-20 '>HRD <br/> Attestation</h3>
            </div>

            {/* responsive banner of HRD attestation */}
            <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
              <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0 text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide'>Top  <br/><b className='text-green-500'>HRD Attestation Services <br/> </b>Provider in India </h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins mt-10 px-4 lg:p-0'>
              <b>Trueway International</b> stands out as India's premier HRD attestation service provider, streamlining the often intricate and time-consuming process. With dedicated 24/7 support, we ensure tension-free document authentication through state-level HRD departments and subsequent embassy attestation. Our efficient services add to client convenience, allowing easy online submission and secure transactions for various document types. </p>
              {/* readMore add in paragraph */}
              <div className='md:hidden flex'>
                <p  onClick={()=> {setReadMore (!readMore)}}>
                  <span className='text-green-500 ml-3 text-lg cursor-pointer font-poppins'>{linkName} </span>
                </p>
                { readMore && extraContent }
              </div>
              <p className='hidden md:flex text-md lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 px-4 pr-3 lg:p-0'>
              TrueWay's commitment to genuine and efficient services, including timely delivery of stamped and translated certificates, marks us as the optimal choice for HRD attestation, ensuring client satisfaction while simplifying complex procedures for global academic and professional recognition.
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

export default HRDattestation