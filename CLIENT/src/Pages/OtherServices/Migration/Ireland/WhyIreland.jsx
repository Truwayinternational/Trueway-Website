import React, { useState } from "react";
import avatar_2 from "../../../../Assets/certificate attestation/avatar_2.webp";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function WhyIreland() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


  return (
    <>
        <div className="max-w-[1240px] mx-auto place-content-center py-10">
        <div className="flex justify-center lg:justify-start lg:px-16 mx-3">
            <h2 className="md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black ">
            Why<br/>
            <b className="text-green-500 "> Ireland for Nurses?</b>
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
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-xl py-2' onClick={handleAlwaysOpen}> High Demand
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     Due to Ireland's ongoing nursing shortage, there is a great opportunity for competent professionals to find employment.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(1)}>
                    Excellent Salaries 
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Irish nurses receive some of the highest pay in Europe, which enables them to live secure and pleasant lives.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(2)}>
                    Professional Development
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Ireland provides a variety of specialisation options and professional pathways so you can customise your work to meet your goals.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(3)}>
                    Work-Life Balance 
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    With generous leave regulations and a culture that cherishes personal time, Ireland places a high priority on a good work-life balance.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(4)}>
                    Lively Culture
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Get lost in Ireland's fascinating history, hospitable populace, and breathtaking landscape, which includes both sleepy towns and vibrant cities.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(5)}>
                    Supportive Healthcare System
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    A supportive atmosphere for healthcare practitioners is provided by Ireland's well-established and contemporary healthcare system, which places a high priority on patient care.
                    </AccordionBody>
                </Accordion>
                {/* 7th accordion */}
                <Accordion open={open === 6}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(6)}>
                    Educational possibilities
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Nurses can improve their abilities and stay up to speed with the newest developments in healthcare by taking advantage of Ireland's availability to outstanding educational institutions and possibilities for continuous learning.
                    </AccordionBody>
                </Accordion>
                {/* 8th accordion */}
                <Accordion open={open === 7}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(7)}>
                    Global networking
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Due to Ireland's attraction of healthcare professionals from around the globe, which promotes a varied and stimulating work environment, nurses can establish a global professional network while working there.
                    </AccordionBody>
                </Accordion>
                {/* 9th accordion */}
                <Accordion open={open === 8}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(8)}>
                    Quality of Life
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Ireland continuously scores highly on international indexes of quality of life, providing a warm and secure atmosphere for both people and families. A high standard of living is attributed to nurses by having access to healthcare, education, and a variety of leisure activities.
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

export default WhyIreland