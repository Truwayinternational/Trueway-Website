import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.png'

function PSVinSaudi() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-1'>
              <h2 className='md:text-5xl lg:px-6 lg:w-2/3 text-3xl pb-5  font-HeadingFont font-extrabold text-black  md:tracking-wide '> Why is<b className='text-green-500'> Primary Source Verification (PSV)</b> important in Saudi?</h2>
              <img className='lg:hidden grid  w-[100px]  mt-[-50px] md:mr-10' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-24 px-3'>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                        Due to Saudi Arabia's status as the historical and spiritual center of Islam and its function in defending numerous sectors, primary source verification (PSV) is of utmost importance in this country. As a nation with considerable sway over the Muslim world and the Arabian Peninsula, upholding integrity and guaranteeing public safety are of utmost importance. PSV, particularly in the field of healthcare, ensures the veracity of professional credentials, promoting trust and openness in the licensing procedure. Additionally, it becomes a must for anyone traveling internationally in the context of data flow verification, acting as a vital instrument to confirm the legitimacy of documents and stop fraudulent actions. PSV in Saudi Arabia maintains the country's standing, security, and dependability on both a national and international level.
                        </p>
                    </div>
                </div>
                <div className='hidden lg:grid lg:w-[15%] xl:mt-[-100px] my-10'>
                    <img src={avatar_2} alt="avatar_2" />
                </div>
            </div>
      </div>
    </>
  )
}

export default PSVinSaudi