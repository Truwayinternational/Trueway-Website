import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'
import thumb_img from '../../../Assets/ISO/thumb.webp'


function WhyTrueway() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='flex justify-center items-center bg-zinc-100 h-full w-full my-10'>
        <div className='max-w-5xl mx-auto place-content-center py-10'>
            <div className='flex justify-center mx-4 lg:px-16 md:px-3 px-1'>
                <img className='hidden md:flex h-full lg:ml-6 py-4 md:w-[26%] lg:w-[22%]'  src={thumb_img} alt="thumb_img"/>
                <div className='md:flex md:flex-col md:pl-3'>
                    <div className='flex md:flex-col'>
                        <img className='flex md:hidden w-[90px] 'src={thumb_img} alt="thumb_img "/>
                        <h3 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide mt-5 ml-2'>Why <b className='text-green-500'>Trueway <br/> International</b><br/>Is Better?</h3>
                    </div>
                </div>
            </div>

            {/* accordian here */}
                <div className='flex flex-col justify-center mx-6  lg:mx-auto max-w-3xl text-sm md:text-md text-gray-500 font-poppins my-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}>Swift and reliable services <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     By understanding your urgency and the value of time, we are always willing to make the process as fast as possible. We make sure that the procedures are done quickly and in the right and perfect manner.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>
                    Proper assistance for verification <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    A seamless verification process is our promise. Comprehensive assistance throughout the process will be offered by our specialised team for document preparation, submission, follow-up, and so on.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}> Tailored support for nurses<IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    After recognising your specific needs and pain points, we do things to make the process smoother and with fewer challenges. Personalised support will be provided at any stage of the process.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}> Transparent activities <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We do the process with transparency and the utmost care and security. Your documents and personal information will all be handled by our team with confidentiality and seriousness.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}> Expert consultation <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We keep you informed at each stage of the verification process. Appropriate consultation at any stage is possible with our expert team. Any queries can be cleared with this. Clients will be treated well all the time.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(5)}> Cost effective remedies <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We provide solutions to your issues within your budget range. Will not put you in confusion by giving high-end solutions. We always ensure that you are happy with our services and that you get value for your investment.
                    </AccordionBody>
                </Accordion>
                </div>
        </div>        
    </div>
  )
}

export default WhyTrueway