import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.png'

function PSVinAbudhabi() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-1'>
                <h2 className='md:text-5xl lg:w-2/3 lg:px-6 text-3xl pb-5  font-HeadingFont font-extrabold text-black  md:tracking-wide '> Why is<b className='text-green-500'> Primary Source Verification (PSV)</b> important in Abu Dhabi?</h2>
                <img className='lg:hidden grid  w-[100px]  mt-[-50px] md:mr-10' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-24 px-3'>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                            Primary source verification (PSV) assures the legality and authenticity of submitted papers by having the issuing authority check them. This will help you to identify fraud and scams. Health professionals can need to undergo PSV once more to certify their newly obtained credentials, for example while getting a new college degree. In Abu Dhabi, PSV is important for confirming credentials, building trust, and maintaining quality job options
                        </p>
                    </div>
                </div>
                <div className='hidden lg:grid lg:w-[15%] xl:mt-[-140px] my-auto'>
                    <img src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PSVinAbudhabi