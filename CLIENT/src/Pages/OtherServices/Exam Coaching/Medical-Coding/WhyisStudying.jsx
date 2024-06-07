import React, {useState} from 'react'
import avatar_2 from '../../../../Assets/certificate attestation/avatar_2.webp'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function WhyisStudying() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>Why is studying <br/><b className='text-green-500'>Medical Coding Important?</b> <br/></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
          <div className='flex'>
            <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0 mt-5'>
                    <p className='font-poppins'>
                    Medical coding is a critical component of the healthcare industry, transforming diagnosis, procedures, and medical services into standardised alphanumeric codes. This process ensures accurate billing, efficient record-keeping, and smooth operations within healthcare facilities. By becoming a medical coder, you play a vital role in the healthcare system.Medical coding is an essential function in the US healthcare sector. It involves translating healthcare diagnoses, procedures, medical services, and equipment into universal alphanumeric codes. <b>The process relies on three main coding books:</b>
                    </p>
                    <Accordion open={alwaysOpen} >
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={handleAlwaysOpen}> ICD-10 CM<IoIosArrowDropdownCircle className='ml-auto text-xl'/> 
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                        International Classification of Diseases: These codes help healthcare professionals identify a patient’s diagnosis universally.
                        </AccordionBody>
                    </Accordion>
                    {/* 2nd accordion */}
                    <Accordion open={open === 1}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2'
                            onClick={() => handleOpen(1)}>
                             CPT<IoIosArrowDropdownCircle className='ml-auto text-xl'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 pr-10 pl-2 py-0">
                        Current Procedural Terminology: These codes detail the treatments and medical services a patient has received, enhancing reporting accuracy and efficiency.
                        </AccordionBody>
                    </Accordion>
                    {/* 3rd accordion */}
                    <Accordion open={open === 2}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(2)}>HCPCS<IoIosArrowDropdownCircle className='ml-auto text-xl'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                        Healthcare Common Procedure Coding System: This collection of standardised codes represents the products and supplies used during medical procedures.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>    
            <div className='hidden md:flex md:w-full lg:w-1/3 h-full  lg:mr-10 xl:mt-[-50px] my-8'>
              <img src={avatar_2} alt="avatar_2" />
            </div>
          </div>                          
        </div>
    </div>
  )
}

export default WhyisStudying