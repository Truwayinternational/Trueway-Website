import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'
import thumb_img from '../../../../Assets/ISO/thumb.webp'

function WhyChooseTrueway() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className='flex justify-center items-center bg-zinc-100 h-full w-full mt-10'>
        <div className='max-w-5xl mx-auto place-content-center py-10'>
            <div className='flex justify-center mx-4 '>
                <img className='hidden md:flex h-full lg:ml-6 py-4 md:w-[26%] lg:w-[22%]'  src={thumb_img} alt="thumb_img"/>
                <div className='flex md:flex-col'>
                    <img className='flex md:hidden w-[120px] 'src={thumb_img} alt="thumb_img "/>
                    <h4 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide md:mt-10  pl-2'>Why Choose <br/><b className='text-green-500'> Trueway <br/>International</b></h4>
                </div>
            </div>
            {/* accordian here */}
                <div className='flex flex-col justify-center mx-6  lg:mx-auto max-w-3xl text-sm md:text-md text-gray-500 font-poppins mb-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}> Experienced Team
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     Our team of dedicated professionals has a proven track record of successful nurse migrations to Ireland.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}> Customised Assistance
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    At Trueway International, we acknowledge that every person's journey is distinct. We also promise to provide individualised services that are catered to your unique situation and demands.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}>Competitive and Transparent Pricing
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Trueway International is dedicated to bringing transparency to financial issues. With no additional fees, we provide competitive packages and clear pricing structures.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}>Real-Time Progress Tracking
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Trueway International goes a step further by incorporating a live tracking system into our service offerings. Our secure tracking platform allows you to monitor the progress of your migration process in real-time.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}>Stress-Free Process
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We take care of the legwork, allowing you to focus on preparing for your exciting new chapter in Ireland.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(5)}>Ongoing Support System
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We never stop being our clients' go-to source for support. We are dedicated to building a long-term partnership with you and provide continuous support and direction to guarantee your success and well-being in Ireland.
                    </AccordionBody>
                </Accordion>
                {/* 7th accordion */}
                <Accordion open={open === 6}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(6)}>Fast-Track Services
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Trueway International expedites critical processes to reduce waiting times since it recognizes the urgency frequently involved with career transitions.
                    </AccordionBody>
                </Accordion>
                {/* 8th accordion */}
                <Accordion open={open === 7}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(7)}>Accredited Partnerships
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We take pride in our strong alliances and collaborations with recognized councils and organisations. This ensures that the services we offer comply with the strictest guidelines and standards.
                    </AccordionBody>
                </Accordion>
                </div>
        </div>        
        </div>
    </>
  )
}

export default WhyChooseTrueway