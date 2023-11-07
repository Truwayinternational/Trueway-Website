import React from 'react'
import section_img from '../../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentsRequired() {
  return (
    <> 
        <div className='bg-zinc-200 h-full w-full my-10'>
        <div className='flex  max-w-[1240px] mx-auto place-content-center '>
            <div className='grid lg:grid-cols-2 max-w-[1280px] py-10'>
                <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5 '>
                <h4 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500 '> <b className='text-black'> Documents Required for<br/> </b> Qatar Embassy Attestation</h4>
                    <p className='text-gray-500 font-poppins text-md md:text-xl lg:text-lg '>
                    To process the Qatar Embassy attestation, the following documents are needed to be submitted to the Trueway team:
                    </p>
                    <div className='max-w-2xl my-4 font-HeadingFont'>
                        <h4 className='md:text-2xl text-xl  font-semibold'>Main documents needed are:</h4>
                        <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-semibold cursor-pointer'>
                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Original Certificate
                            </li>
                            </div>
                            
                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                                    <BiSolidChevronRightCircle />
                                    <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Passport Copy
                            </li>
                            </div>
                            
                        </ul>
                    </div>
                </div>
                <div className='py-auto'>
                    <img className='lg:w-[400px] px-14 py-4 mx-auto lg:my-10' src={section_img} alt="section_img" />
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default DocumentsRequired