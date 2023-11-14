import React from 'react'
import NursingCouncilCards from './NursingCouncilCards'
import NursingCouncilSliderMob from './NursingCouncilSliderMob'

function GetTheGoodStanding() {
  return (
    <>
        <div className='w-full h-full flex justify-between'>
            <div className="max-w-[1240px] m-auto place-content-center">
                <div className='flex justify-center items-center w-full px-2 py-4 max-w-2xl'>
                    <h3 className='text-3xl md:text-5xl tracking-normal font-bold text-center font-HeadingFont text-black'>Get the  <b className='text-green-500 font-bold'> Good Standing And Verification Certificate</b> from the following council
                    </h3>
                </div>
            </div>
        </div>

        {/* Nursing council content added here like cards - Web view  */}
        <NursingCouncilCards/>

        {/* Nursing council content added here like slider - Mobile responsive */}
        <NursingCouncilSliderMob/>
    </>
  )
}

export default GetTheGoodStanding