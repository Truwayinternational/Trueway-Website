import React, {useState} from 'react'
import ACLS_BLS_WEB from '../../../Assets/acls:bls/ACLS WEB.webp'
import ACLS_BLS_MOB from '../../../Assets/acls:bls/ACLS MOB.webp';

import HeroSidebar from '../HeroSidebar';

function AclsBlsHero() {

    const [readMore, setReadMore] = useState(false);

    const extraContent = <div>
          <p className='md:hidden text-md md:text-xl text-justify text-gray-500 font-poppins mb-10 pr-3 pt-2'>
          ACLS and BLS teach the basics of saving a person's life during a critical period outside a hospital, whereas ACLS is a more advanced certification. BLS is a certification based on knowledge. BLS is designed to enable professionals in the medical sector to recognize several hospital emergencies, provide CPR, use an AED, and relieve choking in a safe, timely, and effective manner. We have years of experienced faculty members to teach and guide you. Trueway is the best ACLS and BLS coaching centre in Kerala. We will also provide the study material while the coaching class is started.
          </p>
        </div>

    const linkName = readMore ? '' : 'Read More...'

  return (
    <>
        <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
              <img className='object-cover ' src={ACLS_BLS_WEB} alt="page_banner" />
            </div>

            {/* responsive banner of Certificate attestation */}
            <div className='w-full top-0 relative lg:hidden'>
              <img className='object-cover w-full ' src={ACLS_BLS_MOB} alt="page_banner" />
            </div>

            {/* web content sections */}
            <div className='m-3 my-10 lg:ml-20'>
              <h1 className='text-3xl px-4 lg:px-0 text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide'>Best <br /><p className='text-green-500'>ACLS & BLS Coaching</p> class in Kerala </h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins mt-10 px-4 lg:p-0'>
              Looking for the best ACLS and BLS coaching classes? Trueway International offers the best ACLS and BLS coaching classes in Kerala. If you are a medical professional who plans to move abroad for a job, then an ACLS or BLS certificate is mandatory. For that, you should attend three days of coaching classes in ACLS and BLS. We are providing American Heart Association (AHA)-approved certificates for Basic Life Support and Advanced Cardiac Life Support. This AHA-approved certificate is to be considered proficient in their service field.</p>
              {/* readMore add in paragraph */}
              <div className='md:hidden flex'>
                <p  onClick={()=> {setReadMore (!readMore)}}>
                  <h2 className='text-green-500 pl-4 text-lg cursor-pointer font-poppins'>{linkName}</h2>
                </p>
                { readMore && extraContent }
              </div>
              <p className='hidden md:flex text-md lg:text-lg md:text-xl text-justify text-gray-500 font-poppins mb-10 px-4 pr-3 lg:p-0'>
              ACLS and BLS teach the basics of saving a person's life during a critical period outside a hospital, whereas ACLS is a more advanced certification. BLS is a certification based on knowledge. BLS is designed to enable professionals in the medical sector to recognize several hospital emergencies, provide CPR, use an AED, and relieve choking in a safe, timely, and effective manner. We have years of experienced faculty members to teach and guide you. Trueway is the best ACLS and BLS coaching centre in Kerala. We will also provide the study material while the coaching class is started.
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

export default AclsBlsHero