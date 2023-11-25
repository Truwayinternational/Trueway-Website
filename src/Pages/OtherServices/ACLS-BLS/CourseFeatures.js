import React from 'react'

import CourseFeaturesWEB from '../../../Assets/acls:bls/CourseFeatures.webp'
import CourseFeaturesMOB from '../../../Assets/acls:bls/coursefeaturesMOB.webp'


function CourseFeatures() {
  return (
    <>
        <div className='w-full h-full flex flex-col justify-between bg-zinc-100 '>
            <div className="grid max-w-[1240px] mt-10 mx-auto ">
                <div className='flex flex-col justify-center lg:items-center w-full py-4'>
                    <h4 className='text-4xl md:text-5xl tracking-wide font-bold text-center font-HeadingFont px-8'> Course<b className='text-green-500'> Features</b></h4>
                    <img className=' hidden md:flex py-10 px-5' src={CourseFeaturesWEB} alt="helpyou_content" />
                    <br />
                    <img className='md:hidden py-10 w-full px-5' src={CourseFeaturesMOB} alt="helpyou_content" />
                </div>
            </div>
        </div>
    </>
  )
}

export default CourseFeatures