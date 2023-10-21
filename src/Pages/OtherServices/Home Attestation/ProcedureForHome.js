import React, {useState} from 'react'
import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.png'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

import {IoIosArrowDropdownCircle} from 'react-icons/io';

function ProcedureForHome() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-10 '>
          <div className='flex mx-4 lg:px-16 px-3'>
            <img className='md:hidden grid  w-[100px] ' src={Avatar_3} alt="Avatar_3" />
            <h4 className='md:text-5xl lg:pl-56 text-3xl pb-5 font-HeadingFont font-extrabold text-black  md:tracking-wide '> The Procedure for <br/><b className=' text-green-500'>Home Department Attestation</b></h4>
          </div>
        <div className='flex'>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_3} alt="avatar_3"/>
          </div>
          <div className='lg:px-12 lg:pr-16 px-4 pl-6'>
            <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins pr-3 lg:p-0  max-w-2xl'>
            Home department attestation is applicable only for non-educational certificates. Not too many procedures are involved in home department attestation. The process is as follows:
            </p>
            <div className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0 max-w-2xl '>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={handleAlwaysOpen}>  Notary Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    This has to be done before all processes. It should be completed by the candidate's local notary. From the notary, the attestation will be in the form of a signature and stamp. Besides that, a notary is the first step in the attestation of personal and educational documents in India.
                    </AccordionBody>
                </Accordion>
                            {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(1)}>
                    Home Department Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    The Home Department only attests to non-educational certificates such as marriage certificates, death certificates, and birth certificates. The document that is attested by a notary should be submitted to the candidate’s home department, and they should attest it after checking its authenticity.
                    </AccordionBody>
                </Accordion>
            </div>
          </div>    
        </div>     
      </div>
    </>
  )
}

export default ProcedureForHome