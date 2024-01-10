import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function NavigateNmbiHospital() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h2 className='md:text-5xl text-3xl py-10 font-HeadingFont font-extrabold text-black text-center px-3'>Navigate Ireland's <br/><b className='text-green-500'> NMBI Hospital Verification </b> Process with Trueway International</h2>
            </div>
            <div className='w-full lg:px-20 px-4'>
                {/* accordian here */}
                <div className=' text-sm md:text-md text-gray-500 font-poppins mb-5 md:px-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2'onClick={handleAlwaysOpen}>Checklist of documents required <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     We give the candidate a list of all the documents that need to be produced before the council. Candidates should collect these documents.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>Document collection
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    As per the checklist provided earlier, candidates have to collect all the documents. The original documents are not required; only scanned copies of the documents mentioned in the checklist are needed.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}>Document submission
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    The collected documents should be submitted to the relevant hospital for verification. The submission will be done by Trueway. The verification will take 2–3 days.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}>Document collection from the hospital <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    After the verification at the hospital, the documents, along with the employment form filled out by the hospital superintendent, will be collected by Trueway.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}>Send the verified documents to candidate <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    All collected documents and forms will be sent to the candidate through courier.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(5)}>Tracking ID
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    A tracking number will be given to the candidate so that they can track their documents with it.
                    </AccordionBody>
                </Accordion>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavigateNmbiHospital