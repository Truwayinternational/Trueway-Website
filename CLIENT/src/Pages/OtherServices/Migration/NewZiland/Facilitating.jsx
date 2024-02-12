import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function Facilitating() {

  const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h3 className='md:text-5xl text-3xl pt-10  font-HeadingFont font-extrabold text-black text-center px-4'>Facilitating Nurse Migration: <b className='text-green-500'> Trueway International's Approach</b></h3>
            </div>
            <div className='w-full lg:px-20 px-4 '>
                {/* accordian here */}
                <div className=' text-sm md:text-md text-gray-500 font-poppins my-5 md:px-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}>First Consultation
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     Having an initial consultation is the first step in starting your migration journey with Trueway International. Our knowledgeable advisers will evaluate your credentials, professional background, and goals all over this stage. Through this session, we can better understand your particular circumstances and offer you personal guidance that is catered to your specific requirements.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>Eligibility evaluation
                    <IoIosArrowDropdownCircle className='ms-auto '/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Our staff performs an in-depth eligibility evaluation, paying close attention to the standards of the Complete Accreditation Process (CAP) program. By completing this stage, you may be confident you meet the requirements for a successful nursing migration to New Zealand. We identify any possible obstacles or areas that require improvement and provide guidance on how to effectively solve them.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}>Document Organization and Compilation
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Trueway International is responsible for gathering and organizing the necessary paperwork for your immigration application. This includes records of education, professional licenses, language proficiency test results, and any other documentation that may be required. Our meticulous attention to detail reduces the possibility of application errors or delays.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}> Application Submission <IoIosArrowDropdownCircle className='ms-auto'/>
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

export default Facilitating