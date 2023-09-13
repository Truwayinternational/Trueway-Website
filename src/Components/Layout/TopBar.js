import React from 'react'
import {BsWhatsapp, BsFillTelephoneFill, BsSearch} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'


function TopBar() {
  return (
    <div className='h-[80px] w-screen bg-green-600 drop-shadow-lg flex items-center'>
        <div className='ps-32 flex justify-between items-center w-full h-full'>
          <div className='hidden lg:flex items-center text-zinc-100 text-md'>
            <span className='flex'> <BsWhatsapp  className='mt-1'/><a href="https://wa.link/c3ukjh" className='px-2'> +91 83276 26262 </a></span>
            <span className='flex'> <BsFillTelephoneFill  className='mt-1'/><a href="tel:+918327626262" className='px-2'> +91 83276 26262 </a></span>
            <span className='flex'> <TfiEmail  className='mt-1'/><a href="mailto:social@truewayinternational.com" className='px-2'> Email Us </a></span>
          </div>
          <div className='hidden lg:flex text-zinc-100 justify-between'>
            <a href="https://www.facebook.com/truewayinternational" className='px-2'><FaFacebookF /></a>
            <a href="https://www.instagram.com/truewayinternational/?hl=en" className='px-2'><FaInstagram /></a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTruewayinterna1" className='px-2'><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/trueway-international-tvm/" className='px-2'><FaLinkedinIn /></a>
          </div>

            {/* responsive top bar */}
          
          <div className='ml-[-120px]'>
          <div className='md:me-32 lg:hidden flex flex-row justify-between items-start'>
              <div className='bg-white p-2 rounded-full mx-2 my-7'>
                <a href="https://wa.link/c3ukjh" className='text-xl text-green-700'><IoLogoWhatsapp /></a>
              </div>
              <div className='bg-white p-2 rounded-full mx-2 my-7'>
                <a href="tel:+918327626262" className='text-xl text-green-700'><BsFillTelephoneFill /></a>
              </div>
          </div>
          </div>

          <div className='lg:basis-1/3 me-5'>
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