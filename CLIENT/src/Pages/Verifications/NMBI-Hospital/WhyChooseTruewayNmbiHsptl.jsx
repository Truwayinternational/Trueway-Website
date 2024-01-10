import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'
import thumb_img from '../../../Assets/ISO/thumb.webp'

function WhyChooseTruewayNmbiHsptl() {

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
                    <h2 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide md:mt-10  pl-2'>Why Choose TrueWay for <br/><b className='text-green-500'>NMBI Hospital Verification in India?</b></h2>
                </div>
            </div>
            {/* accordian here */}
                <div className='flex flex-col justify-center mx-6  lg:mx-auto max-w-3xl text-sm md:text-md text-gray-500 font-poppins my-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}>Expertise in NMBI Procedures
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     We at TrueWay International take great satisfaction in our comprehensive understanding and proficiency with the NMBI hospital verification processes. Our knowledgeable staff is familiar with the nuances of the procedure, so they can make sure your application satisfies all prerequisites.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>Fast-Track Processing
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    When it comes to international migration, time is of the essence. Experience accelerated NMBI hospital verification procedure with TrueWay International to make sure you don't miss your deadline for migrating to Ireland. Efficiency is our top priority, yet we never sacrifice the accuracy of your documents.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}>Strict Security Procedures
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    The privacy and security of your personal and business data are top priorities to us. Modern security methods are used by TrueWay International to protect your data during the verification process, allowing you to relax during this important part of your trip.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}>Transparent and Reasonable Pricing <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We recognize that the migration process entails financial considerations. TrueWay International is dedicated to offering our NMBI hospital verification services at a price that is both clear and reasonable. There are no additional expenditures; all prices are broken down clearly so you can make an informed budget.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}> Personalised Assistance
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Our committed group of experts is available to help you with each stage of the NMBI hospital verification procedure. We provide individualised support, attending to your particular requirements and making sure you are knowledgeable and comfortable at every turn.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(5)}> 24/7 customer support
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Do you require help or have questions? TrueWay International provides 24/7 customer service to quickly respond to your questions. Our support staff is available to help you whenever you need it, and your issues are our top priority.
                    </AccordionBody>
                </Accordion>
                </div>
        </div>        
        </div>
    </>
  )
}

export default WhyChooseTruewayNmbiHsptl