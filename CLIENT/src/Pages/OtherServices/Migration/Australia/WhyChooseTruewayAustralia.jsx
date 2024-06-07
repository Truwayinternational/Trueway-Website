import React, { useState } from "react";
import avatar_2 from "../../../../Assets/certificate attestation/avatar_2.webp";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function WhyChooseTruewayAustralia() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className="max-w-[1240px] mx-auto place-content-center py-10">
        <div className="flex justify-center lg:justify-start lg:px-16 mx-3">
            <h2 className="md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black ">
            Why Choose <br/>
            <b className="text-green-500 "> Trueway International</b>
            </h2>
          <img
            className="lg:hidden grid  w-[100px]  md:w-[150px] md:ml-5  mt-[-30px] md:mt-[-50px]"
            src={avatar_2}
            alt="avatar_2"
          />
        </div>
        <div className="flex">
          <div className="lg:w-2/3 ml-3 lg:px-20 ">
            <div className="text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins lg:p-0">
              {/* accordian here */}
              <div className=' text-md lg:text-lg md:text-xltext-gray-500 font-poppins mb-5 px-4 pr-3 lg:p-0'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-xl py-2' onClick={handleAlwaysOpen}> Skilled and Qualified
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     With a wealth of knowledge in obtaining nursing visas, our team of migration specialists guarantees that you get the greatest advice available. Because of our registration with the Migration Agents Registration Authority (MARA), you may be sure that your case will be handled with honesty and professionalism.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(1)}>
                    Customised Support 
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We reject the idea of universally applicable solutions. We design customised migration strategies based on your individual nursing history and career goals to increase your chances of success.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(2)}>
                    Faster Procedure
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We assist you through the difficult visa application procedure, making sure all documentation complies with strict Australian regulations and is accurate. Red tape is nothing to worry about; we'll take care of it for you.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(3)}>
                    Expert Skill Assessments
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    To guarantee that your talents are respected and acknowledged in Australia, we collaborate with the Australian Nursing and Midwifery Accreditation Council (ANMAC).
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(4)}>
                    Robust Industry Network
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We have forged connections with medical facilities, clinics, and agencies throughout Australia, providing you with access to stimulating job prospects.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(5)}>
                    Individualised help
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We offer individualised help at every stage of the migration process since we understand that every nurse's journey is different. Our consultants take the time to fully comprehend your unique situation before providing solutions that are specifically designed to meet your wants and concerns.
                    </AccordionBody>
                </Accordion>
                {/* 7th accordion */}
                <Accordion open={open === 6}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(6)}>
                    Fast and Effective Processing
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    In the migration process, time is of the essence. Trueway International is dedicated to processing your application in a timely and effective manner. We take advantage of our industry expertise and experience to speed up the ANMAC Council verification process so you can begin working as a nurse in Australia as soon as possible. 
                    </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex  lg:w-[200px] h-full  lg:mr-10  my-8">
            <img src={avatar_2} alt="avatar_2" />
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseTruewayAustralia