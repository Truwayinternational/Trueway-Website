import React from 'react'

import HAAD_Banner from '../../../../Assets/dataflow/Dataflow - HAAD.webp'
import HAAD_MobileBanner from '../../../../Assets/mobile banners/MOB Dataflow - HAAD.webp'


function HAADdataflowHero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={HAAD_Banner} alt="dataflow-MOH bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={HAAD_MobileBanner} alt="dataFlow Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-wider text-center px-4'>Leading <b className='text-green-500'> HAAD Data flow Services Provider</b> in India </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-justify text-gray-500 font-poppins lg:p-0'>
                    Dataflow HAAD is the process of checking verifying and authenticating the certificates submitted by candidates by the respective authority. Unless they verify your documents you cannot use those documents for migration purposes. Thus dataflow is crucial for migrants and once your certificate is stated as illegal then you cannot appear for a dataflow procedure in your lifetime. So moving for these procedures through a reputed agency is the best. For that, Trueway is here.
                    <br/>
                    Trueway can complete the dataflow process within a minimum working days in a secure and fast way. With an excellent dedicated team in the back end, Trueway can give prompt support and guidance to the applicants around the clock. The only thing the candidate has to do is to gather the required documents and give them to Trueway. Rest will be taken care of by expert staff.
                </p>
            </div>    
        </div>    
    </>
  )
}

export default HAADdataflowHero;