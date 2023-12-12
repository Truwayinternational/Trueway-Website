import React from 'react'

import ACLS from '../../../Assets/acls:bls/advanced.webp'
function AdvancedCardio() {
  return (
    <>
        <div className='max-w-6xl mx-auto place-content-center py-10'>
            <div className='flex flex-col mx-4 lg:px-16 md:px-3 px-1'>
                <div className='grid lg:grid-cols-2 '>
                    <div className='grid '>
                        <h2 className='text-2xl px-4 text-center lg:text-start  md:text-5xl font-HeadingFont font-bold tracking-wide'>
                            Advanced Cardiovascular Life  Support - <b      className='text-green-500'> ACLS
                            </b>
                        </h2>
                    </div>
                    <div className='flex justify-center px-4 py-5 lg:px-10 lg:py-0'>
                        <img src={ACLS} alt="ACLS" />
                    </div>
                </div>

                {/* content added here */}
                <div className='flex'>
                <p className='text-md md:text-xl lg:text-lg lg:text-start text-center  text-gray-500 font-poppins mt-5 lg:px-5'>
                    Looking for the best ACLS and BLS coaching classes? Trueway International offers the best ACLS and BLS coaching classes in Kerala. If you are a medical professional who plans to move abroad for a job, then an ACLS or BLS certificate is mandatory. For that, you should attend three days of coaching classes in ACLS and BLS. We are providing American Heart Association (AHA)-approved certificates for Basic Life Support and Advanced Cardiac Life Support. This AHA-approved certificate is to be considered proficient in their service field.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdvancedCardio