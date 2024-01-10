import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function GuideNmbiCollege() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h2 className='md:text-5xl text-3xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>Your Guide to the <br/><b className='text-green-500'> NMBI College Verification </b> <br/>Process for Ireland</h2>
            </div>
            <div className='w-full lg:px-20 px-4'>
                {/* accordian here */}
                <div className=' text-sm md:text-md text-gray-500 font-poppins mb-5 md:px-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2'onClick={handleAlwaysOpen}>1. Document Checklist: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     We are here to ensure that you have all required documents such as academic transcripts, certificates, and identification ready for the NMBI college verification process.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>2. Documents Collection:
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Gathering all necessary paperwork, including completed application forms and any additional documentation requested by the college or NMBI.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}>3. Submit to College:
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    After collecting all the required documents we have to present the documents to the designated college office for initial verification. Make sure all forms are duly filled and signed.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}>4. Verification Process: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    This step allows the college and NMBI to review and authenticate your submitted documents. This may involve confirming academic credentials and other relevant information.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}>5. Collect Documents from College: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Once the verification process is complete, you have to retrieve your original documents from the college. Confirm that all necessary endorsements have been made.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(5)}>6. Courier Arrangements: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    If required, arrange a courier to send documents to NMBI. Ensure you have the correct address and any specific instructions provided by NMBI.
                    </AccordionBody>
                </Accordion>
                {/* 7th accordion */}
                <Accordion open={open === 6}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(6)}>7. Tracking ID Sent to Customer: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    You will get a tracking ID once the documents are dispatched. This unique identifier allows you to monitor the progress of your documents during transit to NMBI.
                    </AccordionBody>
                </Accordion>
                {/* 8th accordion */}
                <Accordion open={open === 7}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(7)}>8. Completion Confirmation: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Await confirmation from NMBI regarding the successful receipt and acceptance of your verified documents. This is the conclusion step of the college verification process.
                    </AccordionBody>
                </Accordion>
                </div>
            </div>
        </div>
    </>
  )
}

export default GuideNmbiCollege