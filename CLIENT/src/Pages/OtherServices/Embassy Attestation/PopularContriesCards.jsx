import React from 'react'

import uae_img from '../../../Assets/embassy attestation/uae.webp'
import qatar_img from '../../../Assets/embassy attestation/qatar.webp'
import oman_img from '../../../Assets/embassy attestation/oman.webp'
import kuwait_img from '../../../Assets/embassy attestation/kuwait.webp'
import bahrain_img from '../../../Assets/embassy attestation/bahrain.webp'
import malaysia_img from '../../../Assets/embassy attestation/malaysia.webp'


import {BiSolidChevronRightCircle} from 'react-icons/bi'


function PopularContriesCards() {
  return (
    <>
      <div className='hidden md:flex flex-col justify-center items-center my-10'>
        {/* 1st card uae embassy */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={uae_img} alt="uae_banner" />
            <h6 className='flex absolute text-2xl lg:text-4xl font-HeadingFont font-bold text-green-500 lg:pl-10  pl-5 pt-5 lg:pt-10 '><BiSolidChevronRightCircle className="text-green-500  mr-2"/> UAE Embassy Attestation</h6>
            <p className='flex absolute lg:w-[500px] w-[350px] text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-24 pl-10 pt-14 lg:pt-28'>
            If you want to migrate to the UAE for any purposes then UAE Embassy Attestation is required. Embassy attestation is mandatory for everything from education to starting a new business.
            </p>
        </div>
        {/* 2nd card  qatar embassy */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={qatar_img} alt="qatar_banner" />
            <h6 className='flex absolute text-2xl lg:text-4xl font-HeadingFont font-bold text-green-500 lg:pl-[45%] pl-[40%] pt-5 lg:pt-10 '> <BiSolidChevronRightCircle className="text-green-500 mr-2"/> Qatar Embassy Attestation </h6>
            <p className='flex absolute  text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-[50%] pl-[45%] pr-14  pt-16 lg:pt-28'>
            If Qatar is your dream place to settle then Qatar Embassy Attestation is important since the authorities need to check the authenticity of documents.
            </p>
        </div>
        {/* 3rd card oman embassy */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={oman_img} alt="uae_banner" />
            <h3 className='flex absolute text-[23px] leading-8  lg:text-4xl font-HeadingFont font-bold text-green-500 lg:pl-10  pl-5 pt-5 lg:pt-10 '><span> <BiSolidChevronRightCircle className="text-green-500 mr-2"/></span>  Oman Embassy Attestation </h3>
            <p className='flex absolute lg:w-[500px] w-[350px] text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-24 pl-10 pt-14 lg:pt-28'>
            Oman Embassy Attestation is not needed to get a work permit, get a family visa or continue studies in Oman. This embassy attestation is not essential for documents.
            </p>
        </div>
        {/* 4th card  kuwait embassy */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={kuwait_img} alt="qatar_banner" />
            <h3 className='flex absolute text-[23px] leading-8 lg:text-4xl font-HeadingFont font-bold text-green-500 lg:pl-[45%] pl-[40%] pt-5 lg:pt-10 '><span> <BiSolidChevronRightCircle className="text-green-500 mr-2"/></span>  Kuwait Embassy Attestation </h3>
            <p className='flex absolute  text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-[50%] pl-[45%] pr-14  pt-16 lg:pt-28'>
            To verify the authenticity of documents to start employment or education Kuwait Embassy Attestation is highly needed.
            </p>
        </div>
        {/* 5th card Bahrain embassy */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={bahrain_img} alt="uae_banner" />
            <h3 className='flex absolute text-[22px] leading-8  lg:text-4xl font-HeadingFont font-bold text-green-500 lg:pl-10  pl-5 pt-5 lg:pt-10 '><span> <BiSolidChevronRightCircle className="text-green-500 mr-2"/></span>  Bahrain Embassy Attestation </h3>
            <p className='flex absolute lg:w-[500px] w-[350px] text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-24 pl-10 pt-14 lg:pt-28'>
            To get a Bahrain visa for any purpose, Bahrain embassy attestation is significant. All the papers you submit should be checked by the Bahrain embassy for migration. 
            </p>
        </div>
        {/* 6th card  Malaysia embassy */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={malaysia_img} alt="qatar_banner" />
            <h3 className='flex absolute text-[22px] leading-8 lg:text-4xl font-HeadingFont font-bold text-green-500 lg:pl-[43%] pl-[40%] pt-5 lg:pt-10 '><span> <BiSolidChevronRightCircle className="text-green-500 mr-2"/></span>  Malaysia Embassy Attestation </h3>
            <p className='flex absolute  text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-[48%] pl-[45%] pr-14  pt-16 lg:pt-28'>
            Before getting a visa to Malaysia you have to prove the authenticity of your documents then only you can apply for a job, higher studies or a resident visa.
            </p>
        </div>
      </div>
    </>
  )
}

export default PopularContriesCards