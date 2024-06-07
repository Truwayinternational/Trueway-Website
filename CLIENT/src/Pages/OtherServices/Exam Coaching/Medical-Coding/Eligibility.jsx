import React from 'react'

function Eligibility() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h3 className='md:text-5xl text-3xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Eligibility for studying <br/><b className='text-green-500'> Medical Coding Course </b></h3>
            </div>
            <div className='w-full lg:px-20 px-4 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                Candidates with a degree in any field, whether in science, arts, or any other discipline, can pursue a medical coding course. For freshers, the age limit is 30 years, while experienced professionals have no age restrictions. Medical coding is an ideal career shift for those looking for better opportunities in the healthcare sector.
                </p>
            </div>
        </div>
        {/* section 2 */}
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h3 className='md:text-5xl text-3xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Certifications we providing in<br/><b className='text-green-500'> Medical Coding Course </b></h3>
            </div>
            <div className='w-full lg:px-20 px-4'>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                Trueway International offers the Certified Professional Coder (CPC) certification, recognized by the American Academy of Professional Coders (AAPC). This certification validates your expertise in medical coding and enhances your employability in the healthcare industry.
                </p>
            </div>
        </div>
    </>
  )
}

export default Eligibility