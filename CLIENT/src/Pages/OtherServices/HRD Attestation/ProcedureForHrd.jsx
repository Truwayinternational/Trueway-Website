import React, {useState} from 'react'
import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.webp'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

import {IoIosArrowDropdownCircle} from 'react-icons/io'


function ProcedureForHrd() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className='max-w-[1240px] mx-auto place-content-center my-10 '>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px] ' src={Avatar_3} alt="Avatar_3" />
            <h4 className='md:text-5xl lg:px-52 text-3xl pb-5 font-HeadingFont font-extrabold text-black  md:tracking-wide '> The Procedure for <br/><p className=' text-green-500'>Attesting HRD Documents </p></h4>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_3} alt="avatar_3" />
          </div>
          <div className='lg:px-12 lg:pr-16 px-4 pl-6 '>
            <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins pr-3 lg:p-0  max-w-2xl'>
            HRD attestation mainly consists of two steps to authenticate and verify the documents. Before the documents reach the ministry the candidate has to do these <b>two steps. </b>
            </p>
            <div className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0 max-w-2xl '>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={handleAlwaysOpen}>  HRD Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    After they get the information that the candidate's educational certificate is genuine, the HRD department attests the documents with their signs and seals.
                    </AccordionBody>
                </Accordion>
                            {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(1)}>
                    Document Verification <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    This is the primary procedure before going for HRD attestation. This is basically educational certificate legalisation. The process is as follows: the concerned state HRD sends a copy of the education certificate to the concerned school, college, or university. From there, they send a confirmation letter to HRD informing them of the authenticity and genuineness of the certificates.
                    </AccordionBody>
                </Accordion>
            </div>
          </div>    
        </div>     
      </div>
    </>
  )
}

export default ProcedureForHrd
