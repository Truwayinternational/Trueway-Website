import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function YourGuideNMC() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-4'>
                <h3 className='md:text-5xl text-3xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'><b className='text-green-500'> Trueway International: </b> Your Guide to the NMC UK Third-party Verification Process for UK</h3>
            </div>
            <div className='w-full lg:px-20 px-5 '>

                {/* accordian here */}
                <div className=' text-sm md:text-md text-gray-500 font-poppins mb-10 px-2 md:px-5'>
                    <Accordion open={alwaysOpen}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}>Expert Guidance: <IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Benefit from the expertise of Trueway International's seasoned professionals who understand the nuances of the UK NMC verification process. Begin with a personalised consultation where we assess your qualifications and discuss the verification process, answering any questions you may have.
                        </AccordionBody>
                    </Accordion>
                        {/* 2nd accordion */}
                    <Accordion open={open === 1}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>
                        Streamlined Process: <IoIosArrowDropdownCircle className='ms-auto text-2xl'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Trueway International streamlines the entire verification process, ensuring your documents meet the rigorous standards of the UK NMC. Submit your educational and professional documents securely through our online portal for a comprehensive review.
                        </AccordionBody>
                    </Accordion>
                        {/* 3rd accordion */}
                    <Accordion open={open === 2}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}> Personalised Support: <IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Receive personalised support tailored to your unique qualifications and experiences, addressing any concerns or challenges that may arise. We will provide you with a personalised checklist of required documents, ensuring nothing is missed.
                        </AccordionBody>
                    </Accordion>
                        {/* 4th accordion */}
                    <Accordion open={open === 3}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}> Comprehensive Document Review: <IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Trueway International conducts a thorough review of your educational and professional documents, minimising the risk of errors and rejections. True Way will meticulously prepare and submit your application to the NMC on your behalf, ensuring accuracy and completeness.
                        </AccordionBody>
                    </Accordion>
                    {/* 5th accordion */}
                    <Accordion open={open === 4}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}> Timely Updates and Communication: <IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Stay informed throughout the verification journey with regular updates on the status of your application, ensuring transparency and peace of mind. Receive regular updates on the status of your verification, allowing you to plan your migration with confidence.
                        </AccordionBody>
                    </Accordion>
                    {/* 6th accordion */}
                    <Accordion open={open === 5}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(5)}> Efficient Problem Resolution:<IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Trueway International actively liaises with the UK NMC on your behalf, addressing any queries promptly and efficiently. We will handle all communication with the NMC, keeping you informed of progress and addressing any inquiries promptly.
                        </AccordionBody>
                    </Accordion>
                    {/* 7th accordion */}
                    <Accordion open={open === 6}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(6)}>  Fast and Secure Process:<IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Trueway International expedites the verification process, reducing the overall timeline for your migration, all while ensuring the security and confidentiality of your documents. True Way will provide regular updates via email or phone calls, keeping you informed at every stage.
                        </AccordionBody>
                    </Accordion>
                    {/* 8th accordion */}
                    <Accordion open={open === 7}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2'onClick={()=>handleOpen(7)}>Cost-Effective Solutions:<IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Our transparent pricing structure eliminates hidden fees, ensuring you get the best value for your investment. We will also provide guidance on any next steps required for your registration with the NMC.
                        </AccordionBody>
                    </Accordion>
                    {/* 9th accordion */}
                    <Accordion open={open === 8}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(8)}> Continuous Support:<IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Even after verification is complete, True Way remains available to answer any questions or provide assistance as needed. We are committed to supporting your UK nursing journey long-term.
                        </AccordionBody>
                    </Accordion>
                    {/* 10th accordion */}
                    <Accordion open={open === 9}>
                        <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(9)}> Expertise:<IoIosArrowDropdownCircle className='ms-auto'/>
                        </AccordionHeader>
                        <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                            Trueway international have more than years of experience and specialised knowledge in NMC verification. With us, Celebrate your successful NMC verification by clearing the pathway for your nursing career in the UK.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    </>
  )
}

export default YourGuideNMC