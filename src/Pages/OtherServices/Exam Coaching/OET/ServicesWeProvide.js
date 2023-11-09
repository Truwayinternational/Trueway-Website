import React from 'react'

import writing from '../../../../Assets/examCoaching/writing.png'
import reading from '../../../../Assets/examCoaching/reading.png'
import listening from '../../../../Assets/examCoaching/listening.png'
import speaking from '../../../../Assets/examCoaching/speaking.png'

import graphWeb from '../../../../Assets/examCoaching/graphweb.png'
import graphMob from '../../../../Assets/examCoaching/graphMob.png'


function ServicesWeProvide() {
  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h4 className='md:text-5xl text-4xl lg:py-10 pb-5  font-HeadingFont font-extrabold text-black  tracking-normal text-center px-4'>Services <b className='text-green-500'> We Provide </b>
                </h4>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                Trueway provides complete OET coaching. All four modules will be covered during the coaching, so make sure that the students understand all the points. The four modules are:
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
            
            {/* graph added here */}
            <div className='my-5 mx-6'>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                Grades for each module are from A to E. A is the largest one that can score, and E is the least.
                </p>
                {/* graph in web desktop size */}
                <img className='hidden md:flex my-5 mx-2' src={graphWeb} alt="graph web"/>
                {/* graph in mob size */}
                <img className='flex md:hidden my-5' src={graphMob} alt="graph mob"/>
            </div>

      </div>
    </>
  )
}

export default ServicesWeProvide