import React from 'react'

import Helpyou_web from '../../../Assets/certificate attestation/helpyou1.png'
import Helpyou_mob from '../../../Assets/certificate attestation/helpyou2.png'

function HelpYou() {
  return (
    <div>
         <div className='w-full h-full flex flex-col justify-between bg-zinc-200'>
            <div className="grid max-w-[1240px] my-10 m-auto px-5">
                <div className='flex flex-col justify-center lg:items-center w-full px-2 py-4 md:pl-16'>
                    <h2 className=' text-4xl md:text-5xl tracking-wide font-bold text-center font-Philosopher'> We are here to<span className='text-green-500'>help you!</span></h2>
                    <p className='font-poppins mt-5 text-center px-3 lg:px-10 md:px-20 font-extralight text-gray-800'>
                    Experience a swift and secure certificate attestation process in just 4 easy steps. Contact us for attesting educational, personal, and commercial documents for all foreign countries. 
                    </p>
                    <img className=' hidden md:flex lg:px-10 py-3' src={Helpyou_web} alt="helpyou content" />
                    <br />
                    <img className='md:hidden py-3' src={Helpyou_mob} alt="helpyoucontent" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpYou