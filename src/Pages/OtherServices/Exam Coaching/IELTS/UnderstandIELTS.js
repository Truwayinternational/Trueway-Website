import React from 'react'

import writing from '../../../../Assets/examCoaching/writing.webp'
import reading from '../../../../Assets/examCoaching/reading.webp'
import listening from '../../../../Assets/examCoaching/listening.webp'
import speaking from '../../../../Assets/examCoaching/speaking.webp'

function UnderstandIELTS() {
  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h4 className='md:text-5xl text-4xl lg:py-10 pb-5  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-12'>Understand <b className='text-green-500'> IELTS Module </b>
                </h4>
            </div>
            <div className='w-full px-10 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins'>
                    IELTS comprises mainly 4 modules. They are
                </p>
            </div>

            {/* services card images */}
            <div className=' w-5/6 grid md:grid-cols-4 grid-cols-2 mx-auto my-5 gap-8 py-5'>

                <div className='flex w-full'>
                    <img className='cursor-pointer lg:rounded-[30px] lg:hover:shadow-xl' src={writing} alt="writing" />
                </div>

                <div className='flex w-full'>
                    <img className='cursor-pointer lg:rounded-[30px] lg:hover:shadow-xl' src={reading} alt="reading" />
                </div>

                <div className='flex w-full'>
                    <img className='cursor-pointer lg:rounded-[30px] lg:hover:shadow-xl' src={listening} alt="listening" />
                </div>

                <div className='flex w-full'>
                    <img className='cursor-pointer lg:rounded-[30px] lg:hover:shadow-xl' src={speaking} alt="speaking" />
                </div>
            </div> 

      </div>
    </>
  )
}

export default UnderstandIELTS