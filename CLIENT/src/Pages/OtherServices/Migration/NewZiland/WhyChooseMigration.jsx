import React, { useState } from "react";
import avatar_2 from "../../../../Assets/certificate attestation/avatar_2.webp";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function WhyChooseMigration() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className="max-w-[1240px] mx-auto place-content-center py-10">
        <div className="flex justify-center lg:justify-start lg:px-16 mx-3">
            <h2 className="md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black ">
            Why Choose Trueway<br/>
            <b className="text-green-500 "> for Nurses Migration?</b>
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
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-xl py-2' onClick={handleAlwaysOpen}> Expertise in CAP Program
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     With the Complete Accreditation Process (CAP) program designed especially for nurses looking to immigrate to New Zealand, Trueway International takes great pride in its area of expertise. For our clients, an easy and effective procedure is guaranteed by our extensive knowledge of and expertise in managing CAP applications.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(1)}>
                    Professional Advice 
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Our team of seasoned professionals includes counsellors with an in-depth understanding of New Zealand's healthcare system, legal advisors, and migration experts. Our customised coaching ensures that you are informed and confident throughout the whole transfer process.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(2)}>
                    Proven Track Record
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Trueway International has established a reputation as the top migration consultant in India for nurses, having helped many nurses migrate to New Zealand with success. Our contented customers provide evidence of our commitment to excellence.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(3)}>
                    Customised Resolutions
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We are aware that every nurse's experience is different. Trueway International provides customised relocation solutions that address your unique requirements and guarantee a simple and smooth transition.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(4)}>
                    Relevant Knowledge
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    The field of migration is evolving, and rules and specifications are always changing. To ensure that our clients receive the most up-to-date and accurate information possible, Trueway International keeps up with the most recent advancements.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(5)}>
                    Transparent Procedure
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Because we value transparency, we notify our clients at each step of the migration process. Trueway International is a trustworthy partner for your migration journey because of our professional business methods and transparent communication.
                    </AccordionBody>
                </Accordion>
                {/* 7th accordion */}
                <Accordion open={open === 6}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(6)}>
                    Time-Efficient Process
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Take advantage of our faster procedures, which will shorten the duration of your journey to New Zealand.
                    </AccordionBody>
                </Accordion>
                {/* 8th accordion */}
                <Accordion open={open === 7}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(7)}>
                    Fast Verification by the CGFNS Council
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We recognize that for nurses preparing to relocate, speed is of the essence. To expedite the processing of your migration application, Trueway International provides expedited CGFNS Council Verification services in India. These services guarantee that your credentials are confirmed promptly.
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

export default WhyChooseMigration