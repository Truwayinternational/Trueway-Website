import React, { useState } from "react";
import avatar_2 from "../../Assets/certificate attestation/avatar_2.webp";

import { BiSolidChevronRightCircle } from "react-icons/bi";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function ConfusionsWes() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="max-w-[1240px] mx-auto place-content-center py-10">
        <div className="flex justify-center lg:justify-start lg:px-16 mx-3">
            <h2 className="md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black ">
            Confusions & <br /> Complications of<br/>
            <b className="text-green-500 "> WES Verification</b>
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
                <p className="text-md md:text-lg text-gray-500 font-poppins lg:p-0 px-2">
                    Getting WES verification from universities or other educational institutions is a big challenge for residents and non-residents whose locations are different from the university's. The possible solutions at present for the certificate holders are as follows:
                </p>
              <ul className="list-none text-gray-600 font-semibold text-lg md:text-xl lg:px-5  py-5">
                <BiSolidChevronRightCircle className="text-green-500"/>
                <li className="cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4">
                Hand over the documents to people travelling to the document-issued city or state.
                </li>
                <BiSolidChevronRightCircle className="text-green-500"/>
                <li className="cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4">
                Mail all the documents over to friends or relatives living near the university to submit the request.
                </li>
                <BiSolidChevronRightCircle className="text-green-500"/>
                <li className="cursor-pointer mt-[-40px] font-HeadingFont ml-5 p-4">
                The applicant will have to make multiple trips to universities and colleges for the process.
                </li>
              </ul>

              {/* accordian here */}
              <div className=' text-md lg:text-lg md:text-xltext-gray-500 font-poppins mb-5 px-4 pr-3 lg:p-0'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-xl py-2' onClick={handleAlwaysOpen}> Documentation Challenges <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     Gathering and providing the required documents can be challenging. This may include transcripts, degree certificates, and other academic records. Without proper guidance, individuals might struggle to understand the specific documentation requirements.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(1)}>
                    Verification Process Understanding <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    The verification process itself might be confusing without assistance. Understanding how to submit documents, payment procedures, and navigating the online platform can be daunting for someone unfamiliar with the process.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(2)}>
                    Timely Submission <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Meeting deadlines for document submission and responding to any queries or requests from WES can be challenging without support. Delays in the process may affect timelines for immigration or educational plans.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(3)}>
                    Updates and Communication <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Keeping track of the application status and understanding any updates or communications from WES can be difficult.
                    </AccordionBody>
                </Accordion>
              </div>
              <p className="text-md md:text-lg text-gray-500 font-poppins lg:p-0 px-2">
              Precisely, while it's possible for individuals to navigate the WES verification process independently, the lack of agency support could lead to challenges in understanding requirements, completing documentation accurately, and meeting deadlines
              </p>
            </div>
          </div>
          <div className="hidden lg:flex  lg:w-[200px] h-full  lg:mr-10 xl:mt-[-150px] mt-[-50px] my-8">
            <img src={avatar_2} alt="avatar_2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfusionsWes;
