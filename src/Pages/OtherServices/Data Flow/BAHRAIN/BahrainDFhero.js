import React from 'react'

import Bahrain_Banner from '../../../../Assets/dataflow/bahrainWeb.png'
import Bahrain_MobileBanner from '../../../../Assets/mobile banners/bahrainMob.png'

function BahrainDFhero() {
  return (
    <>
      <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={Bahrain_Banner} alt="dataflow-MOH bannner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={Bahrain_MobileBanner} alt="dataFlow Mobile banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black  tracking-wider text-center px-4'>India's <b className='text-green-500'> Fast & Secure Dataflow Verification Services </b> for National Health Regulatory Authority </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                To migrate to Bahrain initially, you have to do the dataflow process. For that, all information about the candidate should be checked and verified by Bahrain's dataflow group, and those documents should be forwarded to the National Health Regulatory Authority (NHRA) in Bahrain. We can complete this process online within a few days. By finishing this procedure successfully, the candidate completed the dataflow, and after that, they have to appear for a licensure examination for further qualifying.
                <br/>
                By providing these services in an affordable range, Trueway does all these processes in a fast and secure manner. A dedicated team is working round the clock; therefore, anytime, you can contact the executive for updates.
                </p>
            </div>    
      </div>
    </>
  )
}

export default BahrainDFhero