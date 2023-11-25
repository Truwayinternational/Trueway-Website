import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.webp'

function PSVinOman() {
  return (
    <>
      <div className='max-w-[1240px] mx-auto place-content-center py-10'>
        <div className='flex mx-4  lg:px-16 px-1'>
          <h2 className='md:text-5xl lg:w-2/3 lg:pr-14 text-3xl pb-5  font-HeadingFont font-extrabold text-black  md:tracking-wide '> Why is <b className='text-green-500'> Primary Source Verification (PSV)</b> important in Oman ?</h2>
          <img className='lg:hidden grid  w-[100px]  mt-[-50px] md:mr-10' src={avatar_2} alt="avatar_2" />
        </div>
        <div className='flex'>
          <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-[4.5rem] px-3'>
            <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
              <p className='font-poppins'>
                <b> PSV,</b> in collaboration with the healthcare sector, plays a crucial role in identifying counterfeit certificates. The Dubai Health Authority (DHA) ensures that professionals working in the Emirates of Dubai are not only qualified but also legitimate. Oman employs a thorough verification process to confirm the accuracy of credentialing information provided by the organization that originally granted the credential, including the validation of educational degrees. This verification process is carried out through the Ministry of Health's partnership with the Dataflow group. As part of the licensing application or license renewal process, which includes licensed health professionals whose qualifications have not been previously verified by PSV, all healthcare professionals are required to undergo the PSV procedure. It is important to note that each document only needs to be verified once. For credentialing purposes (such as the acquisition of a new educational degree), health professionals may be required to repeat the PSV process for the verification of newly acquired credentials or qualifications.
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

export default PSVinOman