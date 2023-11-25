import React from 'react'

import Helpyou_web from '../../../Assets/certificate attestation/helpyou1.webp'
import Helpyou_mob from '../../../Assets/certificate attestation/helpyou2.webp'

function HelpYou() {
  return (
    <>
         <div className='w-full h-full flex flex-col justify-between bg-zinc-100'>
            <div className="grid max-w-[1240px] mt-10 mx-auto ">
                <div className='flex flex-col justify-center lg:items-center w-full py-4'>
                    <h2 className=' text-4xl md:text-5xl tracking-wide font-bold text-center font-HeadingFont px-8'> We are here to<b className='text-green-500'> help you!</b></h2>
                    <p className='font-poppins mt-5 text-center lg:px-10 md:px-20 font-extralight text-gray-800 px-3'>
                    Experience a swift and secure certificate attestation process in just 4 easy steps. Contact us for attesting educational, personal, and commercial documents for all foreign countries. 
                    </p>
                    <img className=' hidden md:flex lg:px-10 py-3' src={Helpyou_web} alt="helpyou_content" />
                    <br />
                    <img className='md:hidden py-3 w-full ' src={Helpyou_mob} alt="helpyou_content" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HelpYou