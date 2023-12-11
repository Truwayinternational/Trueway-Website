import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.webp'


function PrimarySourceVerification() {
  return (
    <>
      <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-1'>
              <h2 className='md:text-5xl lg:pr-14 lg:w-2/3 text-3xl pb-5  font-HeadingFont font-extrabold text-black  md:tracking-wide '> Why is <b className='text-green-500'> Primary Source Verification (PSV)</b> important in  MOH?</h2>
              <img className='lg:hidden grid  w-[100px]  mt-[-50px] md:mr-10' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-[4.5rem] px-3'>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                          PSV assists the healthcare industry in identifying any fake certificates. In light of this, MOH will make sure that the professionals working in the Emirates of Dubai are qualified and legitimate. the procedure through which the MOH verifies credentialing data from the organisation that first granted or issued the credential (for example, the legitimacy of academic degrees). Through their collaboration with Dataflow Group, MOH does this. All applicants for initial licensure or licence renewals (for qualified health professionals whose qualifications had not previously undergone PSV) must go through the PSV process. Please take note that only one verification is necessary for each document. If new credentials or qualifications are required for credentialing purposes (such as the acquisition of a new educational degree), health professionals may need to redo the PSV procedure.
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

export default PrimarySourceVerification