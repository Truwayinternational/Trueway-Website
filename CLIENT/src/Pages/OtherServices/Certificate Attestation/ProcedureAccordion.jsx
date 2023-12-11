import React, {useState} from 'react'

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {IoIosArrowDropdownCircle} from 'react-icons/io'


function ProcedureAccordion() {

  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(true)

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className='flex justify-center items-center mb-10'>
            <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                <div className='text-md  lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                    <Accordion open={alwaysOpen}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2' onClick={handleAlwaysOpen}>  Educational certificates <IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-[16px] text-gray-500">
                          <ol className='lg:leading-3'>
                            <li >SDM (sub-divisional magistrate)/ HRD (human resource development).</li>
                            <li> MEA (Ministry of External Affairs)</li>
                            <li>Embassy attestation / Apostille</li>
                            <li>MOFA (Ministry of Foreign Affairs)</li>
                          </ol>
                        </AccordionBody>
                    </Accordion>
                    {/* 2nd accordion */}
                    <Accordion open={open === 1}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-start py-2' onClick={() => handleOpen(1)}>
                        Non-educational certificates<IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-[16px] text-gray-500">
                          <ol className='lg:leading-3 '>
                            <li>Notary Attestation</li>
                            <li> Home department</li>
                            <li>Embassy attestation / Apostille</li>
                            <li>MEA (Ministry of External Affairs)</li>
                            <li>MOFA (Ministry of Foreign Affairs)</li>
                          </ol>
                        </AccordionBody>
                    </Accordion>
                    {/* 3rd accordion */}
                    <Accordion open={open === 2}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-start py-2' onClick={() => handleOpen(2)}>
                        Commercial certificates attestation<IoIosArrowDropdownCircle className='ms-auto text-2xl md:text-xl'/>
                        </AccordionHeader>
                        <AccordionBody className="text-[16px]  text-gray-500">
                          <ol className='lg:leading-3'>
                            <li>Chamber of Commerce attestation</li>
                            <li>Embassy attestation / Apostille</li>
                            <li>MEA (Ministry of External Affairs)</li>
                            <li>MOFA (Ministry of Foreign Affairs)</li>
                          </ol>
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
      </div> 
    </>
  )
}

export default ProcedureAccordion