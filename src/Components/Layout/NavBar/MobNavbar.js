import React, { useState } from "react";

import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFillTelephoneFill, BsSearch} from 'react-icons/bs'

function MobNavbar() {

    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
        <nav className="lg:hidden bg-green-600 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">

                    {/* top bar content added here */}
                        <div className='md:me-32 lg:hidden flex flex-row justify-between items-start'>
                            <div className='bg-white p-2 rounded-full mx-1  my-2'>
                                <a href="https://wa.link/c3ukjh" className='text-lg md:text-lg text-green-700'><IoLogoWhatsapp /></a>
                            </div>
                            <div className='bg-white p-2 rounded-full mx-1 md:ml-3 my-2'>
                                <a href="tel:+918327626262" className='text-lg md:text-lg  text-green-700'><BsFillTelephoneFill /></a>
                            </div>
                        </div>

                        {/* search bar */}

                        <div className='relative md:ml-[-150px] ml-0'>
                            <input type="text" className='p-2 bg-gray-100 rounded-lg md:w-50 w-48 mx-auto pl-10 align-middle  focus:outline-0 placeholder:font-light' placeholder='Tracking Number'/>
                            <BsSearch  className='absolute left-3 top-3 text-gray-500 cursor-pointer'/>
                        </div>

                    <div className="lg:hidden">
                    <button
                        onClick={toggleNavbar}
                        className="text-white p-2 bg-green-600 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                        {isOpen ? (
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                        </svg>
                    </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                <div className="lg:hidden mt-4 py-2">
                    <a
                        href="/"
                        className="block text-white py-4 mx-10 text-xl md:text-2xl  font-bold font-HeadingFont">
                        Home
                    </a>
                    <a
                        href="/about"
                        className="block text-white py-4 mx-10 text-xl md:text-2xl  font-bold font-HeadingFont">
                        About
                    </a>
                    <a
                        href="/services"
                        className="block text-white py-4 mx-10 text-xl md:text-2xl  font-bold font-HeadingFont">
                        Our Services
                    </a>
                    <a
                        href="/wes"
                        className="block text-white py-4 mx-10 text-xl md:text-2xl  font-bold font-HeadingFont">
                        WES
                    </a>
                    <a
                        href="/blogs"
                        className="block text-white py-4 mx-10 text-xl md:text-2xl  font-bold font-HeadingFont">
                        Blogs & Videos
                    </a>
                    <a
                        href="/contact"
                        className="block text-white py-4 mx-10 text-xl md:text-2xl  font-bold font-HeadingFont">
                        Contact
                    </a>
                </div>
                )}
            </div>
        </nav>
    </>
  )
}

export default MobNavbar