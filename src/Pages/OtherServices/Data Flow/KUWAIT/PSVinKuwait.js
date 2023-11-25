import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.webp'

function PSVinKuwait() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-1'>
                <h2 className='md:text-5xl lg:w-2/3 lg:px-6 text-3xl pb-5  font-HeadingFont font-extrabold text-black  md:tracking-wide '> Why is<b className='text-green-500'> Primary Source Verification(PSV)</b> important in Kuwait ?</h2>
                <img className='lg:hidden grid  w-[100px]  mt-[-50px] md:mr-10' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-24 px-3'>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                            PSV ensures the authenticity and legitimacy of medical professionals through their submitted certificates, helping to identify fake documents from fraudulent ones. Candidates must submit proper, genuine, and appropriate documents. Through these processes, DHAMAN can verify the authenticity of professionals practising in Kuwait. Candidates should note that the required documents will be verified only once, but they may need to repeat the PSV process for newly acquired credentials and qualifications as necessary for credentialing purposes.
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

export default PSVinKuwait