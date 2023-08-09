import React from 'react'
import {BsWhatsapp, BsFillTelephoneFill, BsSearch} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa'


function TopBar() {
  return (
    <div className='h-[60px] w-screen bg-green-500 drop-shadow-lg hidden md:flex items-center'>
        <div className='ps-32 flex justify-between items-center w-full h-full'>
          <div className='flex items-center text-zinc-100 text-md'>
            <span className='flex'> <BsWhatsapp  className='mt-1'/><a href="#!" className='px-2'> +91 83276 26262 </a></span>
            <span className='flex'> <BsFillTelephoneFill  className='mt-1'/><a href="tel:+918327626262" className='px-2'> +91 83276 26262 </a></span>
            <span className='flex'> <TfiEmail  className='mt-1'/><a href="#!" className='px-2'> Email Us </a></span>
          </div>
          <div className='flex text-zinc-100 justify-between'>
            <a href="#!" className='px-2'><FaFacebookF /></a>
            <a href="#!" className='px-2'><FaInstagram /></a>
            <a href="#!" className='px-2'><FaTwitter /></a>
            <a href="#!" className='px-2'><FaLinkedinIn /></a>
          </div>
          <div className='basis-1/3'>
            <div className='relative'>
                <input type="text" className='p-2 bg-gray-100 rounded-lg w-50 pl-10 align-middle focus:outline-0 placeholder:font-light'placeholder='Tracking Number'/>
                <BsSearch  className='absolute left-3 top-3 text-gray-500 cursor-pointer'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TopBar