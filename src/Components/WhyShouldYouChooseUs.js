import React from 'react'

// services cards import
import WhyTruewaycards from './WhyTruewaycards'

function WhyShouldYouChooseUs() {
  return (
    <>
        <div className='w-full h-full flex flex-col justify-between'>
            <div className="grid max-w-[1240px] m-auto mt-10 ">
                <div className='flex flex-col justify-center w-full px-2 py-4'>
                    <h3 className='text-4xl md:text-5xl tracking-wide font-bold text-center font-HeadingFont px-3 md:px-[10rem] lg:px-[18rem]'> Why Should You <br/><b className='text-green-500'>Choose Us?</b></h3>
                </div>
            </div>
        </div>
        {/* trueway services cards added */}
        <WhyTruewaycards />
    </>
  )
}

export default WhyShouldYouChooseUs