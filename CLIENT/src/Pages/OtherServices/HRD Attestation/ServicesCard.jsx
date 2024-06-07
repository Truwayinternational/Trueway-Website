import React from 'react'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

import Karnataka from '../../../Assets/HRD Attestation/karnataka.webp'
import TamilNadu from '../../../Assets/HRD Attestation/tamil nadu.webp'
import maharashtra from '../../../Assets/HRD Attestation/state 3.webp'
import Andhra_predhesh from '../../../Assets/HRD Attestation/andhra pradhesh.webp'
import telengana from '../../../Assets/HRD Attestation/telangana.webp'
import Delhi from '../../../Assets/HRD Attestation/delhi.webp'
import Madhyapredhesh from '../../../Assets/HRD Attestation/madhya predhesh.webp'

function ServicesCard() {
  return (
    <>
       <div className='hidden md:flex flex-col justify-center items-center my-10'>
        {/* 1st card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={Karnataka} alt="uae_banner" />
            <h3 className='flex absolute text-2xl lg:text-3xl font-HeadingFont font-bold text-green-500 lg:pl-5  pl-5 pt-5 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 mx-3"/></span>  Karnataka </h3>
            <p className='flex absolute lg:w-[440px] w-[350px] text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-12 pl-10 pt-14 lg:pt-20'>
            Bangalore HRD attestation is compulsory for those who completed their studies in Karnataka.
            </p>
        </div>
        {/* 2nd card   */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover' src={TamilNadu} alt="qatar_banner" />
            <h3 className='flex absolute text-2xl lg:text-3xl font-HeadingFont font-bold text-green-500 lg:pl-[42%] pl-[40%] pt-5 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 mx-3"/></span> Tamil Nadu </h3>
            <p className='flex absolute  text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-[45%] pl-[45%] pr-14  pt-16 lg:pt-20'>
            If you finished your education in Tamil Nadu, then you definitely should do Tamil Nadu HRD attestation.
            </p>
        </div>
        {/* 3rd card */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={maharashtra} alt="uae_banner" />
            <h3 className='flex absolute text-2xl  lg:text-3xl font-HeadingFont font-bold text-green-500 lg:pl-5  pl-5 pt-5 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 mx-3"/></span> Maharashtra </h3>
            <p className='flex absolute lg:w-[420px] w-[350px] text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-12 pl-10 pt-14 lg:pt-20'>
            Maharashtra HRD attestation is mandatory for all who have completed their studies in Maharashtra.
            </p>
        </div>
        {/* 4th card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={Andhra_predhesh} alt="qatar_banner" />
            <h3 className='flex absolute text-2xl lg:text-3xl font-HeadingFont font-bold text-green-500 lg:pl-[42%] pl-[40%] pt-5 lg:pt-5 '><span> <BiSolidChevronRightCircle className="text-green-500 mx-3"/></span> Andhra Pradesh </h3>
            <p className='flex absolute  text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-[45%] pl-[45%] pr-14  pt-16 lg:pt-18'>
            You have to complete an HRD attestation from Andhra Pradesh if you finished your education in Andhra Pradesh.
            </p>
        </div>
        {/* 5th card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={telengana} alt="uae_banner" />
            <h3 className='flex absolute text-2xl  lg:text-3xl font-HeadingFont font-bold text-green-500 lg:pl-5  pl-5 pt-5 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 mx-3"/></span> Telangana </h3>
            <p className='flex absolute lg:w-[450px] w-[350px] text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-12 pl-10 pt-14 lg:pt-20'>
            If you are a Telangana student who is planning to move abroad, then HRD attestation from Telangana is mandatory.
            </p>
        </div>
        {/* 6th card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={Delhi} alt="qatar_banner" />
            <h3 className='flex absolute text-2xl lg:text-3xl font-HeadingFont font-bold text-green-500 lg:pl-[42%] pl-[40%] pt-5 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 mx-3"/></span>  Delhi </h3>
            <p className='flex absolute  text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-[44%] pl-[45%] pr-14  pt-16 lg:pt-20'>
            Delhi HRD Attestation is prime and significant for those who graduated from Delhi Educational Institutions.
            </p>
        </div>
        {/* 7th card  */}
        <div className='flex m-3 md:relative px-8 my-5'>
          <img className='object-cover ' src={Madhyapredhesh} alt="uae_banner" />
            <h3 className='flex absolute text-2xl  lg:text-3xl font-HeadingFont font-bold text-green-500 lg:pl-5  pl-5 pt-5 lg:pt-8 '><span> <BiSolidChevronRightCircle className="text-green-500 mx-3"/></span> Madhya Pradesh  </h3>
            <p className='flex absolute lg:w-[450px] w-[350px] text-sm lg:text-lg font-poppins font-light text-gray-700 lg:pl-12 pl-10 pt-14 lg:pt-20'>
            Madhya Pradesh HRD attestation is one of the procedures you should follow if you completed your education in MP.
            </p>
        </div>
      </div> 
    </>
  )
}

export default ServicesCard