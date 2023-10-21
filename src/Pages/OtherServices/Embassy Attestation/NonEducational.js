import React, {useState} from 'react'
import attestation_img from '../../../Assets/embassy attestation/Group 852.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function NonEducational() {

  const [readMore, setReadMore] = useState(false);

  const extraContent =
  <div className='grid'>
      <div className='text-green-500'>
          <ol className='list-none font-semibold text-lg md:text-xl py-3'>
            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Foreign Affairs (FA) Attestation/Legalization</li> 
            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Transfer Certificate (TC) Attestation</li> 
            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Experience/ Employment Certificate Attestation</li> 
            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Medical Certificate Attestation</li>
            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Ministry of health department attestation</li>
            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Ministry of Justice attestation</li>
            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Chamber of commerce attestation</li>
            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Labour department attestation</li>
            <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Death Certificate Attestation</li>
          </ol>
      </div>
  </div>

  const linkName = !readMore && 'View all'


  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-10 '>
            <div className='flex mx-4  lg:px-16 px-3'>
                <h4 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-wide '> Non-Educational Documents<b className='text-green-500'> We Provide Certificate Attestation </b>For</h4>
            </div>
            <div className='lg:w-full lg:px-20 px-4 '>
                <div className='grid md:flex '>
                    <img src={attestation_img} className='md:h-[250px] object-cover mx-auto md:mx-2' alt="educational document we provide certificate attestation for" />
                    <div className='text-green-500'>
                        <ol className='list-none font-semibold text-lg md:text-xl py-3'>
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/> Birth Certificate Attestation</li> 
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Marriage Certificate Attestation</li> 
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Salary Certificate Attestation</li> 
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Equivalence Certificate</li>
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Single Status Certificate Attestation</li>
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Ministry of education department attestation</li>
                        </ol>
                    </div>
                </div>
                 {/* readMore add in Listing Attestations */}
                 <div className='md:hidden'>
                    <p  onClick={()=> {setReadMore (!readMore)}}>
                    <button className='text-green-500 ml-3 text-md cursor-pointer font-poppins border border-green-500 py-2 px-3 rounded-3xl'>{linkName}</button>
                    </p>
                    { readMore && extraContent }
                </div>
                <div className='hidden md:grid md:mx-32 mx-4'>
                    <div className='text-green-500'>
                    <ol className='list-none font-semibold text-lg md:text-xl py-3'>
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Foreign Affairs (FA) Attestation/Legalization</li> 
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Transfer Certificate (TC) Attestation</li> 
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Experience/ Employment Certificate Attestation</li> 
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Medical Certificate Attestation</li>
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Ministry of health department attestation</li>
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Ministry of Justice attestation</li>
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Chamber of commerce attestation</li>
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Labour department attestation</li>
                        <li className='cursor-pointer py-2 font-HeadingFont'><BiSolidChevronRightCircle className='inline-flex mr-2'/>Death Certificate Attestation</li>
                    </ol>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NonEducational