import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'
import thumb_img from '../../../Assets/ISO/thumb.webp'

function WhyChooseTruewayAhpra() {
    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
        <div className='flex justify-center items-center bg-zinc-100 h-full w-full mt-10'>
        <div className='max-w-5xl mx-auto place-content-center py-10'>
            <div className='flex justify-center mx-4 lg:px-16 md:px-3'>
                <img className='hidden md:flex h-full lg:ml-6 py-4 md:w-[26%] lg:w-[22%]'  src={thumb_img} alt="thumb_img"/>
                <div className='flex md:flex-col'>
                    <img className='flex md:hidden w-[120px] 'src={thumb_img} alt="thumb_img "/>
                    <h3 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide md:mt-10  pl-2'>Why Choose TrueWay for <br/><b className='text-green-500'> ANMAC & AHPRA Verification?</b></h3>
                </div>
            </div>
            {/* accordian here */}
                <div className='flex flex-col justify-center mx-6  lg:mx-auto max-w-3xl text-sm md:text-md text-gray-500 font-poppins mb-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}>Expertise in Nursing Credentials Evaluation<IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     We specialise in meticulously assessing nursing qualifications to meet the stringent standards set by ANMAC & AHPRA. Evaluation of your documents will be done smoothly by our team before submitting.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>Streamlined AHPRA Registration Assistance
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Our experienced team provides comprehensive support for AHPRA registration, ensuring a hassle-free process for Indian nurses. We ensure adherence to all necessary requirements and documentation.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}>Fast-Track Processing
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We understand the urgency of your migration plans. Trueway International expedites the verification process, minimizing waiting times and expediting your journey to Australia. Without compromising accuracy we priortize efficiency in processing.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}>Secure Document Handling
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We have a track record of reliability and trustworthiness. We will handle your documents with the utmost care and confidentiality. Our secure systems and processes ensure the privacy and safety of your sensitive information.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}>Transparent and Affordable Pricing
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    At TrueWay International, we believe in transparent pricing. Our affordable packages are designed to accommodate the budgets of aspiring nurses, making your Australian dream accessible.
                    </AccordionBody>
                </Accordion>
                </div>
        </div>        
        </div>
    </>
  )
}

export default WhyChooseTruewayAhpra