import React, {useState} from 'react'
import attestation_img from '../../../Assets/embassy attestation/Group 852.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function NonEducational() {

  const [readMore, setReadMore] = useState(false);

  const extraContent =
  <div className='grid'>
      <div className='text-green-500'>
          <ol className='list-none font-semibold text-lg md:text-xl py-3 ml-4'>
                <BiSolidChevronRightCircle />
                <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Foreign Affairs (FA) Attestation/Legalization</li> 
                <BiSolidChevronRightCircle />
                <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Transfer Certificate (TC) Attestation</li> 
                <BiSolidChevronRightCircle />
                <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Experience/ Employment Certificate Attestation</li> 
                <BiSolidChevronRightCircle />
                <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Medical Certificate Attestation</li>
                <BiSolidChevronRightCircle />
                <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Ministry of health department attestation</li>
                <BiSolidChevronRightCircle />
                <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Ministry of Justice attestation</li>
                <BiSolidChevronRightCircle />
                <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Chamber of commerce attestation</li>
                <BiSolidChevronRightCircle />
                <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Labour department attestation</li>
                <BiSolidChevronRightCircle />
                <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Death Certificate Attestation</li>
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
                        <ol className='list-none font-semibold text-lg md:text-xl py-3 ml-4'>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'> Birth Certificate Attestation</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Marriage Certificate    Attestation</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Salary Certificate Attestation</li> 
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Equivalence Certificate</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Single Status Certificate Attestation</li>
                            <BiSolidChevronRightCircle />
                            <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Ministry of education department attestation</li>
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
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Foreign Affairs (FA) Attestation/Legalization</li> 
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Transfer Certificate (TC) Attestation</li> 
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Experience/ Employment Certificate Attestation</li> 
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Medical Certificate Attestation</li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Ministry of health department attestation</li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Ministry of Justice attestation</li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Chamber of commerce attestation</li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Labour department attestation</li>
                        <BiSolidChevronRightCircle />
                        <li className='cursor-pointer mt-[-40px] font-HeadingFont ml-5'>Death Certificate Attestation</li>
                    </ol>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NonEducational