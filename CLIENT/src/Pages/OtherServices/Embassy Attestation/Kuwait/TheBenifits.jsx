import React, {useState} from 'react'
import Avatar_4 from '../../../../Assets/embassy attestation/avatar 4.webp'

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {IoIosArrowDropdownCircle} from 'react-icons/io'


function TheBenifits() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)
  
    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


  return (
    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-20'>
            <div className='flex  lg:px-8 px-3'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_4} alt="Avatar_1" />
                <h5 className='md:text-5xl lg:px-48  text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>The Benefits of Using Trueway for <b className='text-green-500'> Kuwait Embassy Attestation Services</b></h5>
            </div>
            <div className='flex '>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-10rem] py-4'>
                    <img className='w-[400px]' src={Avatar_4} alt="avatar_4" />
                </div>
                <div className=' lg:pr-12  pl-4 mx-3'>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins lg:p-0 '>
                    Due to their knowledge, dependability, extensive offers, open pricing, and first-rate customer service, TrueWay stands out as the best option for Kuwait Embassy attestation services.
                    </p>

                    {/* accordion of this section added here */}
                    <div className='text-md  lg:text-lg text-gray-500 font-poppins lg:p-0'>
                        <Accordion open={alwaysOpen} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={handleAlwaysOpen}>  Expertise and Experience: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            TrueWay has extensive knowledge and experience in Kuwait Embassy attestation services. Their experienced team understands the complexities of the procedure, ensuring a smooth and efficient client experience.
                            </AccordionBody>
                        </Accordion>
                        {/* 2nd accordion */}
                        <Accordion open={open === 1} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={() => handleOpen(1)}>  Timely and Reliable Service: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            TrueWay is renowned for its commitment to punctuality and reliability. Clients can trust them to complete the attestation process swiftly and accurately, saving valuable time and effort.
                            </AccordionBody>
                        </Accordion>

                        {/* 3rd  accordion */}
                        <Accordion open={open === 2} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={() => handleOpen(2)}>  Comprehensive Service Range: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            A whole range of services, including every facet of Kuwait Embassy attestation, are available from TrueWay. They offer end-to-end help from document creation to submission, removing the need for clients to work with several agencies.
                            </AccordionBody>
                        </Accordion>

                        {/* 4th  accordion */}
                        <Accordion open={open === 3} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={() => handleOpen(3)}>  Transparent and Competitive Pricing: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            TrueWay is dedicated to maintaining transparency in pricing. Clients can expect competitive rates without hidden fees, making their services accessible and budget-friendly.
                            </AccordionBody>
                        </Accordion>

                        {/* 5th  accordion */}
                        <Accordion open={open === 4} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={() => handleOpen(4)}>  Exceptional Customer Support: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            The best customer service is always prioritised by TrueWay. Our staff is constantly on hand to respond to questions, give updates, and walk clients through the attestation procedure, making it a stress-free experience.
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>  
            </div>                     
        </div>
    </>
  )
}

export default TheBenifits