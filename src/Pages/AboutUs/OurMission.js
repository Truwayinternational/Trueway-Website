import React from 'react'
import OurMissionImg from '../../Assets/AboutUs/Our Mission.png'

function OurMission() {
  return (
    <> 
        <div className='bg-zinc-200 h-full w-full mt-10'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid lg:grid-cols-2 max-w-[1280px] pb-10 md:pt-20 pt-10'>
                    <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5 '>
                        <div className='lg:hidden py-auto'>
                            <img className='w-[300px] px-14 py-4 mx-auto lg:my-10' src={OurMissionImg} alt="section_img" />
                         </div>
                        <h5 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold  text-black'>Our <b className='text-green-500'> Mission </b> </h5>
                        <p className='text-gray-500 font-poppins text-md md:text-lg '>
                        Our mission is to become World's No.1 organisation  that offers all the services that migrants require. Our commitment is to deliver hassle free and efficient solutions that solve every challenge and help you to go stress free during the migration process.
                        </p>
                    </div>
                    <div className='hidden lg:grid py-auto'>
                        <img className='w-[400px] px-14 py-auto mx-auto lg:my-10' src={OurMissionImg} alt="section_img" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurMission