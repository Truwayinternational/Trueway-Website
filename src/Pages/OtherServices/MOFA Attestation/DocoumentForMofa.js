import React from 'react'
import section_img from '../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'



function DocoumentForMofa() {


  return (
    <>
        <div className='bg-zinc-200 h-full w-full my-10'>
        <div className='flex  max-w-[1240px] mx-auto place-content-center '>
            <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5'>
                <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500'> <b className='text-black'> Documents Required For <br/> </b> MOFA Attestation</h1>
                    <p className='text-gray-500 font-poppins md:text-xl lg:text-lg'>
                    MOFA attestation basically takes 2-3 weeks. To complete the MOFA attestation rapidly and smoothly you must have some documents with you. 
                    <b> They are: </b>
                    </p>
                    <div className='max-w-2xl my-4 font-HeadingFont'>
                        <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-semibold cursor-pointer'>
                            <li className='bg-transparent rounded-full md:hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Original copies of your education certificates
                            </li>
                            <li className='bg-transparent rounded-full md:hover:bg-white py-2  w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Copy of passport
                            </li>
                            <li className='bg-transparent rounded-full md:hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Authentication Letter
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=' py-auto'>
                    <img className='lg:w-[400px] px-14 py-4 mx-auto lg:my-10' src={section_img} alt="section_img" />
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default DocoumentForMofa