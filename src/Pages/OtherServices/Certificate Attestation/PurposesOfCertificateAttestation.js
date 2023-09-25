import React, {useState} from 'react'
import avatar_2 from '../../../Assets/certificate attestation/avatar_2.png'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function PurposesOfCertificateAttestation() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What are the <b className='text-green-500'>purposes of</b> <br/><p className='text-green-500'>Certificate Attestation ?</p></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
          <div className='flex'>
            <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0'>
                    <Accordion open={alwaysOpen}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont ' onClick={handleAlwaysOpen}>  International Recognition <IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-md lg:tex-2xl text-gray-500">
                        To gain international recognition and acceptance of your documents or certificates in foreign countries, certificate attestation is essential. Your credentials need to be validated to ensure they meet the standards of the host country's institutions and authorities.
                        </AccordionBody>
                    </Accordion>
                    {/* 2nd accordion */}
                    <Accordion open={open === 1}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-start' onClick={() => handleOpen(1)}>
                         Employment Opportunities<IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-md text-gray-500">
                        Employers need to ensure that qualifications stated in their certificates are genuine for that certificate attestation is important. Only then can they apply for jobs there.
                        </AccordionBody>
                    </Accordion>
                    {/* 3rd accordion */}
                    <Accordion open={open === 2}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-start' onClick={() => handleOpen(2)}>
                        Exchange Programs<IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-md text-gray-500">
                        Those who want to participate in the collaboration or exchange programs between educational institutions require attested certificates to prove their eligibility for smooth transitions between institutions.
                        </AccordionBody>
                    </Accordion>
                    {/* 4th accordion */}
                    <Accordion open={open === 3}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-start' onClick={() => handleOpen(3)}>
                        Social Security Benefits<IoIosArrowDropdownCircle className='ms-auto' />
                        </AccordionHeader>
                        <AccordionBody className="text-md  text-gray-500">
                        To get social security or any kind of benefits from the government you have to attest your documents to authenticate your identity, employment history and other eligibility.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>    
            <div className='hidden md:flex md:w-full lg:w-1/3 h-full  lg:mr-10 xl:mt-[-50px] my-8'>
              <img src={avatar_2} alt="avatar_2" />
            </div>
          </div>          
        </div>
    </>
  )
}

export default PurposesOfCertificateAttestation