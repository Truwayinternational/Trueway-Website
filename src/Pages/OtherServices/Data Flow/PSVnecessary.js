import React from 'react'
import avatar_2 from '../../../Assets/certificate attestation/avatar_2.png'


function PSVnecessary() {

  return (
    <>
      <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '> Why is <br/><b className='text-green-500'>PSV necessary ?</b></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-50px]' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:pl-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500  pr-3 lg:p-0 lg:mr-0'>
                        <p className='font-poppins'>
                        Dataflow's experienced team verifies the applicant's documents immediately at the source using its vast network of more than 100K Issuing Authorities. PSV is used to verify that the data provided by a person is accurate and that it was taken straight from the original, reliable source. PSV helps compliance with industry regulations and standards, protects against fraud, enhances safety and promotes trust.
                        </p>
                    </div>
                </div>
                <div className='hidden md:grid md:w-[80rem] lg:w-[13%] h-full md:mr-10 xl:mt-[-100px] my-8'>
                    <img className='md:mt-[-100px] lg:mt-[-40px]' src={avatar_2} alt="avatar_2" />
                </div>
            </div>
      </div>
    </>
  )
}

export default PSVnecessary