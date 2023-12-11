import React from 'react'

import BLS from '../../../Assets/acls:bls/basic.webp'

function BasicLife() {
  return (
    <>
        <div className='max-w-6xl mx-auto place-content-center py-10'>
            <div className='flex flex-col mx-4 lg:px-16 md:px-3 px-1'>
                <div className='grid lg:grid-cols-2 '>

                    <div className='hidden lg:flex justify-center'>
                        <img src={BLS} alt="BLS" />
                    </div>
                    <div className='grid '>
                        <h2 className='text-4xl px-4 lg:px-0 text-center lg:text-start  md:text-5xl font-HeadingFont font-bold tracking-wide'>
                            Basic Life  Support - <b      className='text-green-500'> BLS
                            </b>
                        </h2>
                    </div>
                    <div className='flex lg:hidden justify-center px-4 py-5'>
                        <img src={BLS} alt="BLS" />
                    </div>
                </div>

                {/* content added here */}
                <div className='flex'>
                <p className='text-md md:text-xl lg:text-lg lg:text-start text-center  text-gray-500 font-poppins mt-5 lg:px-5'>
                Are you a medical staffer going abroad? One of the mandatory things is BLS. BLS, also known as Basic Life Support, is focused on the stabilisation of a patient before and after an emergency situation. This course is mainly structured to enable medical professionals to recognize various life-threatening emergency situations, provide CPR, use an AED, and relieve choking in a safe, timely, and effective manner (ACS, stroke, etc.). The BLS course certificate is valid and is laminated upon completion of the course.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default BasicLife