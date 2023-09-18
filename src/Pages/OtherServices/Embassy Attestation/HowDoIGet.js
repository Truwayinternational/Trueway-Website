import React, {useState} from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.png'

import {IoIosArrowDropdownCircle} from 'react-icons/io'


function HowDoIGet() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
        <div className=' my-10 lg:mx-[12%]'>
          <div className='flex mx-4 lg:pl-6 px-3'>
            <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_3} alt="Avatar_3" />
            <h3 className='md:text-5xl lg:px-48 text-3xl pb-5 font-HeadingFont font-extrabold text-black  tracking-wide  '> How do I get <br/><p className='text-green-500'>Embassy Attestation in India?</p></h3>
          </div>
        <div className='flex '>
          <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-120px] py-4'>
            <img src={Avatar_3} alt="avatar_3" />
          </div>
            <div className='w-full lg:px-12 lg:pr-16 px-4 pl-6 py-5'>
                <h1 className='md:text-4xl text-2xl font-HeadingFont font-extrabold text-start px-3'> Educational Documents <br/> Attestation Procedure </h1>
                <div className='flex'>
                    <div className='lg:w-2/3 px-2'>
                        <div className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                            <Accordion open={alwaysOpen}>
                                <AccordionHeader className='text-green-500 cursor-pointer text-lg md:text-xl' onClick={handleAlwaysOpen}> HRD Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                                </AccordionHeader>
                                <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                                Educational documents, such as degrees, diplomas, mark sheets, and more, undergo verification and attestation by the State Human Resource Department (HRD).
                                </AccordionBody>
                            </Accordion>
                            {/* 2nd accordion */}
                            <Accordion open={open === 1}>
                                <AccordionHeader className='text-green-500 cursor-pointer text-lg md:text-xl' onClick={() => handleOpen(1)}>
                                MEA Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                                </AccordionHeader>
                                <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                                The Ministry of External Affairs (MEA), Government of India, provides the final attestation on the national level for all educational documents issued by     universities, colleges, schools, and institutes based in India.
                                </AccordionBody>
                            </Accordion>
                            {/* 3rd accordion */}
                            <Accordion open={open === 2}>
                                <AccordionHeader className='text-green-500 cursor-pointer text-lg md:text-xl' onClick={() => handleOpen(2)}>
                                Embassy Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                                </AccordionHeader>
                                <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                                The final step of document attestation involves obtaining embassy authentication, which is performed by the embassy or consulate of the destination country where the applicant intends to utilize their documents.
                                </AccordionBody>
                            </Accordion>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
        {/*  accordion half side on a page */}
        <div className='lg:grid lg:grid-cols-2'>
            <div className='lg:w-full lg:mx-10 ml-6 py-5 '>
                <h1 className='md:text-4xl text-2xl font-HeadingFont  font-extrabold text-start px-3'>Commercial Documents  
                <br/> Attestation Procedure </h1>
                <div className='flex'>
                    <div className='w-full px-2'>
                        <div className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                            <Accordion open={open === 3}>
                                <AccordionHeader className='text-green-500 cursor-pointer text-lg md:text-xl' onClick={() => handleOpen(3)}> Chamber of Commerce Attestation<IoIosArrowDropdownCircle className='ms-auto'/>
                                </AccordionHeader>
                                <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                                The commercial documents that are needed to do business or trade-related purposes have to be legally checked and attested by The Chamber of Commerce.
                                </AccordionBody>
                            </Accordion>
                            {/* 2nd accordion */}
                            <Accordion open={open === 4}>
                                <AccordionHeader className='text-green-500 cursor-pointer text-lg md:text-xl' onClick={() => handleOpen(4)}>
                                MEA Attestation<IoIosArrowDropdownCircle className='ms-auto'/>
                                </AccordionHeader>
                                <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                                The Ministry of External Affairs (MEA) attest the documents in this stage and verifies the documents submitted by the applicant.
                                </AccordionBody>
                            </Accordion>
                            {/* 3rd accordion */}
                            <Accordion open={open === 5}>
                                <AccordionHeader className='text-green-500 cursor-pointer text-lg md:text-xl' onClick={() => handleOpen(5)}>
                                Embassy Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                                </AccordionHeader>
                                <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                                The embassy does the last attestation and thus proves that the applicant-submitted documents are genuine and real.
                                </AccordionBody>
                            </Accordion>
                        </div>
                    </div> 
                </div> 
            </div>
            <div className='lg:w-full lg:mx-10 ml-6 py-5 '>
                <h1 className='md:text-4xl text-2xl font-HeadingFont  font-extrabold text-start px-3'> Personal Documents <br/> Attestation Procedure </h1>
                <div className='flex'>
                    <div className='w-full px-2'>
                        <div className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins pr-3 lg:p-0'>
                            <Accordion open={open === 6}>
                                <AccordionHeader className='text-green-500 cursor-pointer text-lg md:text-xl' onClick={() => handleOpen(6)}>State Home Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                                </AccordionHeader>
                                <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                                The non-educational documents such as divorce, death, marriage, birth and so on should be first attested by the state home department.
                                </AccordionBody>
                            </Accordion>
                            {/* 2nd accordion */}
                            <Accordion open={open === 7}>
                                <AccordionHeader className='text-green-500 cursor-pointer text-lg md:text-xl' onClick={() => handleOpen(7)}>
                                MEA Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                                </AccordionHeader>
                                <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                                The Ministry of External Affairs (MEA) check the genuineness of personal documents at a national level by placing an MEA attestation stamp on the documents.
                                </AccordionBody>
                            </Accordion>
                            {/* 3rd accordion */}
                            <Accordion open={open === 8}>
                                <AccordionHeader className='text-green-500 cursor-pointer text-lg md:text-xl' onClick={() => handleOpen(8)}>
                                Embassy Attestation <IoIosArrowDropdownCircle className='ms-auto'/>
                                </AccordionHeader>
                                <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                                The concerned embassy attests the documents and confirms that these documents can use at an international level.
                                </AccordionBody>
                            </Accordion>
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default HowDoIGet;