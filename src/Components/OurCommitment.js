import React from 'react'

// services cards import
import WhyTruewaycards from './WhyTruewaycards'


function OurCommitment() {
  return (
    <>
        <div className='w-full h-full flex flex-col justify-between'>
            <div className="grid max-w-[1240px] m-auto mt-20 ">
                <div className='flex flex-col justify-center w-full px-2 py-4'>
                    <h5 className='text-4xl md:text-5xl tracking-wide font-bold text-center font-HeadingFont px-3 md:px-[10rem] lg:px-[18rem]'> Our Commitment & Guarantee</h5>
                </div>
            </div>
        </div>
        {/* trueway services cards slider added */}
      <WhyTruewaycards />
    </>
  )
}

export default OurCommitment