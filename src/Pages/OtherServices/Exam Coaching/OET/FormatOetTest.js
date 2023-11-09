import React from 'react'
import Avatar_4 from '../../../../Assets/embassy attestation/avatar 4.png'


function FormatOetTest() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4 lg:px-16 md:px-3 px-1'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]'src={Avatar_4} alt="Avatar_4"/>
                <h4 className='md:text-5xl lg:pl-40 text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide'>What format does the <br/><b className='text-green-500'> OET test follow? </b></h4>
            </div>
            <div className='flex'>
                <div className='hidden md:flex h-full lg:ml-6 lg:mt-[-130px] py-4 lg:w-[20%]'>
                    <img src={Avatar_4} alt="avatar_4" />
                </div>
                <div className='w-full lg:pl-5 lg:pr-28 px-4 pl-6 '>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                        A structure to evaluate the English language proficiency of healthcare professionals like doctors, nurses, and other medical workers is called The Occupational English Test(OET). Speaking, Writing, Reading, and Listening are its four subtests. Through tasks specific to each profession, the Listening and Reading subtests examine understanding of facts related to healthcare. The Writing sub-test challenges candidates to create a letter or report based on a patient case, and the Speaking sub-test includes role-playing assignments where candidates speak with a fake patient or healthcare professional. Due to its association with the healthcare sector and focus on practical communication skills, OET is a popular choice for healthcare workers who need to show their English language proficiency for employment or immigration purposes.
                    </p>
                </div>    
            </div>
        </div>
    </>
  )
}

export default FormatOetTest