import React from 'react'
import {BsWhatsapp,BsFillTelephoneFill} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube} from 'react-icons/fa'


function TopBar() {
  return (
    <div className='h-[80px] w-screen bg-green-600 drop-shadow-lg hidden  lg:flex items-center'>
        <div className='ms-44 flex justify-between items-center w-full h-full'>
          <div className='hidden lg:flex items-center text-zinc-100 text-md'>
            <span className='flex'> <BsWhatsapp  className='mt-1'/><a href="https://wa.link/c3ukjh" className='px-2'> +91 83276 26262 </a></span>
            <span className='flex'> <BsFillTelephoneFill  className='mt-1'/><a href="tel:+918327626262" className='px-2'> +91 83276 26262 </a></span>
            <span className='flex'> <TfiEmail  className='mt-1'/><a href="mailto:tvm@truewayinternational.com" className='px-2'> Email Us </a></span>
          </div>
          <div className='hidden lg:flex me-44 text-zinc-100 justify-between'>
            <a href="https://www.facebook.com/truewayinternational" className='px-2' target='_blank' rel="noopener noreferrer"><FaFacebookF className='text-xl'/></a>
            <a href="https://www.instagram.com/truewayinternational/?hl=en" className='px-2'target='_blank' rel="noopener noreferrer"><FaInstagram className='text-xl'/></a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTruewayinterna1" className='px-2' target='_blank' rel="noopener noreferrer"><FaTwitter className='text-xl'/></a>
            <a href="https://www.linkedin.com/company/trueway-international-tvm/" className='px-2' target='_blank' rel="noopener noreferrer"><FaLinkedinIn className='text-xl'/></a>
            <a href="https://www.youtube.com/channel/UCRq22m2bbJ5AONWGQug9FpA" className='px-2' target='_blank' rel="noopener noreferrer"><FaYoutube className='text-xl'/></a>
          </div>
        </div>
    </div>
  )
}

export default TopBar