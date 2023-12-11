import React from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.webp'

function PorposeOfSaudiPcc() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h2 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is the  <br/><b className='text-green-500'>Purpose of Saudi Arabia PCC?</b></h2>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                        <p>
                        With PCC, the country can represent if a person with wrongdoings migrates. To understand the character of the immigrant, this is useful. The prime aim of PCC is to put an end to the entry of people who engage in illicit activities and can be a threat to the country. In the case of Saudi Arabia, individuals under 18 years old do not need to take a PCC for migration.
                        </p>
                    </div>
                </div>
                <div className='hidden md:flex md:w-full lg:w-1/6 h-full  lg:mr-10 xl:mt-[-180px] mt-[-20px] my-8'>
                    <img src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PorposeOfSaudiPcc