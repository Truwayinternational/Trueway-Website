import React, {useState} from 'react'
import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.png'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function ProcessInDataflow() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-10 '>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px] ' src={Avatar_3} alt="Avatar_3" />
            <h4 className='md:text-5xl lg:px-56 text-3xl pb-5 font-HeadingFont font-extrabold text-black  md:tracking-wide mt-10 md:mt-0 '> Process in <b className=' text-green-500'> DataFlow </b></h4>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_3} alt="avatar_3" />
          </div>
          <div className='lg:px-12 lg:pr-16 px-4 pl-6 '>
            <div className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0 max-w-2xl '>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={handleAlwaysOpen}>  DataFlow <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    DataFlow verification is a crucial background screening process for assessing and validating personal and professional documents, minimising fraud risks. It enables swift hiring decisions by confirming an applicant's credentials directly from the document source. This report aids employers and foreign authorities in verifying qualifications, ensuring trust, and preventing employee fraud.
                    </AccordionBody>
                </Accordion>
                            {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(1)}>
                    Prometric Exam <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Prometric is a global testing and assessment provider for various organisations, offering exams in fields like healthcare, finance, and IT to evaluate individuals seeking professional certifications. These computer-based exams are conducted at worldwide test centres, ensuring standardised and secure testing environments for certification and licensure purposes.
                    </AccordionBody>
                </Accordion>

                            {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(2)}>
                    Credentialing <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Credentialing involves verifying an individual's education, professional qualifications, licences, and certifications. DataFlow meticulously reviews applicant documents and contacts issuing institutions to confirm accuracy. This process ensures individuals meet standards for employment or professional purposes, fostering trust and accuracy in fields like healthcare, education, and professional licensing.
                    </AccordionBody>
                </Accordion>
            </div>
          </div>    
        </div>     
      </div>
    </>
  )
}

export default ProcessInDataflow