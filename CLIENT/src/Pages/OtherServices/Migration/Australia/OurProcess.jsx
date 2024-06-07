import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function OurProcess() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h3 className='md:text-5xl text-3xl pt-10  font-HeadingFont font-extrabold text-black text-center px-4'>Our <b className='text-green-500'>  Step-by-Step</b> Process</h3>
            </div>
            <div className='w-full lg:px-20 px-4 '>
                {/* accordian here */}
                <div className=' text-sm md:text-md text-gray-500 font-poppins my-5 md:px-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}> Initial Consultation
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     In the first consultation, our experts will evaluate whether you're suitable for migration based on your credentials, professional background, and language ability. The basis for a customised migration plan that supports your objectives and aspirations can be established during this one-on-one session.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>Skills evaluation
                    <IoIosArrowDropdownCircle className='ms-auto '/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    The Australian Nursing and Midwifery Accreditation Council (ANMAC) conducts a critical skills evaluation process, which Trueway International helps you through. One of our key advantages is our commitment to providing fast ANMAC Council verification. We prioritise efficiency in the verification process to ensure a smooth and timely assessment of your skills. Our professionals help you compile the required paperwork and submit a thorough application for a skills assessment, guaranteeing adherence to Australian standards. 
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}> Language Proficiency Enhancement
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    English language proficiency is essential for a successful nursing career in Australia. Trueway International offers assistance with getting ready for English language assessments like the OET and IELTS. We provide OET, IELTS  and prometric coaching. Our linguists provide tools and techniques to improve your language proficiency, raising the likelihood that you will reach the necessary standards.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}> Application Submission
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Our staff will forward your application to the appropriate New Zealand authorities as soon as the necessary paperwork is in order. We monitor the progression of your application and send you regular updates, informing you of any new requirements or milestones. Our open and honest attitude guarantees that you stay informed and confident the entire time.
                    </AccordionBody>
                </Accordion>
                </div>
            </div>
        </div> 
    </>
  )
}

export default OurProcess