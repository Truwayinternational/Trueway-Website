import React from 'react'
import avatar_2 from '../../../Assets/certificate attestation/avatar_2.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function PurposeOfApostille() {
  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h2 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is the <b className='text-green-500'> Purpose of</b> <br/><b className='text-green-500'>Apostille Attestation ?</b></h2>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
            <div className='flex'>
                <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                    <div className='text-md md:text-lg lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0 lg:mr-0'>
                        <p className='pb-5'>
                            The Hague Convention developed a universal legalisation system to safeguard the use of foreign public documents in the 1961 Hague Convention Treaty. Approximately 92 countries that are signatories to the Hague Convention employ the apostille to verify the authenticity of documents. Apostille authentication has become a mandatory procedure for immigration into a Hague Convention country. The word 'Apostille' is derived from the French language and signifies the true significance of the term 'Apostille.'
                        </p>
                        <b className='text-xl font-HeadingFont text-gray-800'>
                            The 3 primary types of apostilles are listed below:
                        </b>
                        <ol className='list-none text-green-500 font-semibold text-lg md:text-xl lg:px-5 md:pr-20 py-5 '>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Educational certificate Apostille. </li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Non-educational certificate Apostille.</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Commercial certificate Apostille. </li>
                        </ol>
                        <p>
                            In India, the MEA department is responsible for the duty of providing apostille stamping, which is to validate the document's authenticity with the apostille stamp. The stamp will stick to the back of the document. Apostille approval is mandatory for every outsider to obtain an apostille before moving to any Hague Convention country.
                        </p>
                    </div>
                </div>
                <div className='hidden md:grid md:w-[100rem] lg:w-1/3 h-full md:mr-10 xl:mt-[-10px] my-8'>
                    <img className='' src={avatar_2} alt="avatar_2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PurposeOfApostille