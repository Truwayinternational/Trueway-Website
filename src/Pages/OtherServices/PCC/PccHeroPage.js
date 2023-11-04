import React from 'react';
import pccBanner from '../../../Assets/pcc/Police Clearance Certificate banner.png'
import MobPccBanner from '../../../Assets/mobile banners/MOB Police ClearanceCertificate.png'


import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'


import HeroSidebar from '../HeroSidebar';

function PccHeroPage() {

  return (
    <>
       <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
              <img className='object-cover ' src={pccBanner} alt="page_banner" />
            </div>

            {/* responsive banner of Certificate attestation */}
            <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
              <img className='object-cover w-full ' src={MobPccBanner} alt="page_banner" />
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
                <h1 className='text-3xl px-4 lg:px-0 text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide text-black'>What is <br /><b className='text-green-500'>Police Clearance Certificate (PCC) ? </b></h1>
                <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins mt-10 px-4 lg:p-0'>
                PCC is the abbreviation for Police Clearance Certificate. This is the document issued to Indian passport holders to migrate. PCC is mandatory for  those who applied for Residential Status, Employment or Long term visa or for immigration. People who fly abroad in tourist visa do not need a police clearance certificate.</p>
                <br/>
                <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins px-4 lg:p-0'>
                Some set of documents are compulsory to apply for PCC. the list of documents vary from skilled workers to unskilled workers, ECR to Non ECR countries etc. 
                <br/>
                Trueway is a leading consultancy which provides services all over the world. Through trueway you can take PCC from GCC countries in a safe and secure way. In the express speed you will get PCC.
                </p>

                {/* reach out to us --  contact button  */}

                <div className='grid justify-center bg-zinc-100 rounded-3xl mx-5 py-3 px-5 my-5'>
                    <h6 className='md:text-2xl font-bold font-HeadingFont text-center text-xl  my-5'> 
                    Reach out to us now
                    </h6>
                    <div className='flex items-center my-3 mx-auto'>
                        <div className='bg-white rounded-full mx-5 p-3 hover:shadow-xl'>
                         <a href='tel:+918327626262' target='_blank' rel="noopener noreferrer">
                            <PiPhoneCallFill className='text-green-500 text-5xl' />
                         </a>
                        </div>
                        <div className='bg-white rounded-full mx-5 p-3 hover:shadow-xl'>
                         <a href='https://wa.link/c3ukjh' target='_blank' rel="noopener noreferrer">
                            <IoLogoWhatsapp className='text-green-500 text-5xl' />
                         </a>
                        </div>
                    </div>
                </div>
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

export default PccHeroPage