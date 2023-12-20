import React, { useState } from 'react'

function Simplify() {

    const [readMore, setReadMore] = useState(false);

    const extraContent =<div>
            <p className='md:hidden text-md md:text-xl text-center text-gray-500 font-poppins pr-3 pt-2 '>
            All you have to do is mail us the required documents as mentioned by the university or WES. Within the minimum duration, you will receive your documents verified. After collaborating with us, the process will be hassle-free and properly done. Our assurance is that we have connections with most of the colleges and universities in India, so getting the verification process complete is swift for us.
            </p>
    </div>
  
    const linkName = !readMore && 'Read More...'

  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex lg:px-16 px-3'>
              <h2 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black text-center lg:text-start'>Simplify complications with<br/><b className='text-green-500'> Expert Assistance By Trueway </b></h2>
            </div>
            <div className='flex'>
                <div className='lg:w-5/6 lg:md-12 lg:px-20 '>
                    <div className='text-md md:text-lg text-center lg:text-start text-gray-500 font-poppins px-4 lg:p-0'>
                        <p>
                            Without agency aid, the process may be tough for you to complete, but Trueway can simplify the process and complete it quickly. Our services act like an interface between the university and the candidate who seeks WES verification for Canada. Our whole process involved in WES is fully digitalized, and hence it is fast and secure. The applicant will not be forced to go through repetitive regression cycles and multiple trips to the university since our communication with the university or college is so transparent and accurate.
                        </p>
                        {/* readMore add in paragraph */}
                        <div className='md:hidden flex'>
                            <p  onClick={()=> {setReadMore (!readMore)}}>
                            <h6 className='text-green-500 text-lg cursor-pointer font-poppins text-center'>{linkName}</h6>
                            </p>
                            { readMore && extraContent }
                        </div>
                        <p className='hidden md:flex text-md md:text-lg text-center text-gray-500 font-poppins mb-6 lg:p-0 lg:text-start'>
                            All you have to do is mail us the required documents as mentioned by the university or WES. Within the minimum duration, you will receive your documents verified. After collaborating with us, the process will be hassle-free and properly done. Our assurance is that we have connections with most of the colleges and universities in India, so getting the verification process complete is swift for us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Simplify