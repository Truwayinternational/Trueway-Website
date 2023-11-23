import React from 'react'

import TCMCweb from '../../../../Assets/goodstanding/Web TCMC (Travancore- Cochin Medical  Council) for doctors.png'
import TCMCmob from '../../../../Assets/mobile banners/TCMCmob.png'

function TCMChero() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <img className='hidden lg:flex mx-3 mt-10' src={TCMCweb} alt="TCMC nursing banner" />
                {/* mobile banner here */}
                <img className='lg:hidden ' src={TCMCmob} alt=" TCMC nursing banner" />
                {/* content here */}
                <h1 className='md:text-5xl text-4xl py-10  font-HeadingFont font-extrabold text-black tracking-normal text-center px-4'><b className='text-green-500'> India’s Fastest Service for Good Standing Certificate</b> From Travancore Cochin Medical Council
                </h1>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg lg:text-center text-justify text-gray-500 font-poppins lg:p-0'>
                Trueway is an organisation in India that helps you migrate without facing many troubles or headaches. Because Trueway helps complete the process by providing fast-track services, For job opportunities abroad, visa application requirements, the licence process, etc., a good standing certificate is mandatory. Because when the applicant migrates to another country, their respective department asks for a good standing certificate, and the applicant has to produce that. So contacting an authorised agency for the process to be done is the most accurate way.
                </p>
            </div>    
      </div>
    </>
  )
}

export default TCMChero