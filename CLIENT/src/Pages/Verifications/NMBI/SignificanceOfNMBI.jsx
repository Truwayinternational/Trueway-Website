import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function SignificanceOfNMBI() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h2 className='md:text-5xl text-3xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>The Significance of <b className='text-green-500'> NMBI Council Verification </b>  for Nurses</h2>
            </div>
            <div className='w-full lg:px-20 px-4 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                The purpose of NMBI (Nursing and Midwifery Board of Ireland) Council verification for nurses is to ensure that healthcare professionals, particularly nurses, seeking employment in Ireland meet the necessary standards and qualifications required by the Irish healthcare system. Fundamentally, the verification process involves an in-depth examination of the qualifications and experience of medical professionals. Through this verification process, NMBI guarantees that candidates in Ireland's healthcare industry have been subjected to a thorough evaluation of their clinical skills, educational background, and compliance with professional norms.The NMBI Council Verification process serves several important purposes:
                </p>

                {/* accordian here */}
                <div className=' text-sm md:text-md text-gray-500 font-poppins my-5 md:px-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}>Validation of Qualifications: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     The verification procedure ensures that the nurse's professional and academic credentials meet the requirements established by the NMBI. To verify that the nurse has the education and training required to practise nursing in Ireland, this step is crucial.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>
                    Confirmation of Professional Competence: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    By evaluating the nurse's professional competence, the NMBI Council verifies that they possess the ability to provide safe and effective healthcare services. This supports the Irish healthcare system's efforts to uphold high standards of patient care.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}> Compliance with Regulatory Standards: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Ireland's nursing practice regulations are set and upheld by the NMBI Council. Verification processes guarantee that the nurse adheres to these requirements, promoting uniformity and excellence in the provision of healthcare.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}> Protection of Public Health and Safety: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    The NMBI Council protects the public's health and safety by confirming the credentials and expertise of nurses. It reduces the possibility of receiving inadequate care by guaranteeing that only competent and skilled people are permitted to practise nursing in Ireland.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}> Alignment with Irish Healthcare Policies: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    The verification process ensures that nurses migrating to Ireland are aware of and compliant with the healthcare policies and practices in the country.  For seamless incorporation into the Irish healthcare system, this alignment is necessary.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(5)}> Standardisation of Nursing Practices: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    By creating a consistent set of standards for assessing the credentials and proficiency of nurses, NMBI Council verification helps to standardise nursing practices. This contributes to Ireland's nursing workforce becoming more unified and uniform.
                    </AccordionBody>
                </Accordion>
                {/* 7th accordion */}
                <Accordion open={open === 6}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(6)}> Facilitation of Cross-Border Mobility: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    For nurses seeking to work in Ireland from other countries, the NMBI Council verification process facilitates cross-border mobility by providing a standardised assessment of qualifications. This guarantees that while upholding quality and safety standards, nurses from a variety of backgrounds can contribute to the Irish healthcare system.
                    </AccordionBody>
                </Accordion>
                </div>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                    In conclusion, to maintain the integrity of the nursing profession in Ireland, protect the public's health, and make sure that medical professionals fulfil the requirements for practice, the NMBI Council Verification Procedure is essential.
                </p>
            </div>
        </div>    
    </>
  )
}

export default SignificanceOfNMBI