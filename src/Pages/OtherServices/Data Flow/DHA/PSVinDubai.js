import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.png'

function PSVinDubai() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-1'>
                <h2 className='md:text-5xl lg:w-2/3 lg:px-6 text-3xl pb-5  font-HeadingFont font-extrabold text-black  md:tracking-wide '> Why is<b className='text-green-500'> Primary Source Verification (PSV)</b> important in Dubai?</h2>
                <img className='lg:hidden grid  w-[100px]  mt-[-50px] md:mr-10' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-24 px-3'>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                            The Dubai Health Authority (DHA) verifies the qualifications of professionals wishing to work in Dubai's human services sector using the Dataflow Group's customized Primary Source Verification (PSV) responses. The Dubai Health Authority's mission is to maintain and improve the quality and quantity of healthcare services.  Trueway provides Dubai Health Authority Dataflow to Doctors, Pharmacists, Nurses, and others. The DHA also focuses on providing services through DHA human services offices, including clinics, hospitals, and other facilities.
                        </p>
                    </div>
                </div>
                <div className='hidden lg:grid lg:w-[15%] xl:mt-[-140px] my-auto'>
                    <img src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PSVinDubai