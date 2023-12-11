import React from 'react'

import OurFeaturesWeb from '../../../../Assets/examCoaching/ourfeatureWeb.webp'
import OurFeaturesmob from '../../../../Assets/examCoaching/ourfeatureMob.webp'


function OurFeatures() {
  return (
    <>
        <div className='w-full h-full flex flex-col justify-between bg-zinc-100 my-10'>
            <div className="grid max-w-[1240px] mt-10 mx-auto ">
                <div className='flex flex-col justify-center lg:items-center w-full py-4'>
                    <h5 className=' text-4xl md:text-5xl tracking-wide font-bold text-center font-HeadingFont px-8'> Our<b className='text-green-500'> Features</b></h5>
                    <img className=' hidden md:flex py-10 px-5' src={OurFeaturesWeb} alt="helpyou_content" />
                    <br />
                    <img className='md:hidden py-10 w-full px-5' src={OurFeaturesmob} alt="helpyou_content" />
                </div>
            </div>
        </div>
    </>
  )
}

export default OurFeatures