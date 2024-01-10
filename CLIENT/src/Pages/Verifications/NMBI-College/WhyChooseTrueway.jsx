import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'
import thumb_img from '../../../Assets/ISO/thumb.webp'


function WhyChooseTrueway() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className='flex justify-center items-center bg-zinc-100 h-full w-full mt-10'>
        <div className='max-w-5xl mx-auto place-content-center py-10'>
            <div className='flex justify-center mx-4 lg:px-16 md:px-3'>
                <img className='hidden md:flex h-full lg:ml-6 py-4 md:w-[26%] lg:w-[22%]'  src={thumb_img} alt="thumb_img"/>
                <div className='flex md:flex-col'>
                    <img className='flex md:hidden w-[120px] 'src={thumb_img} alt="thumb_img "/>
                    <h2 className='md:text-5xl text-3xl pb-5 font-HeadingFont font-extrabold text-black tracking-wide md:mt-10  pl-2'>Why Choose TrueWay for <br/><b className='text-green-500'>NMBI Indian College Verification?</b></h2>
                </div>
            </div>
            <p className='text-md md:text-lg text-center text-gray-500 font-poppins px-4 lg:px-10'>
            Trueway International is your dependable agency for NMBI Indian College Verification because of our persistent dedication and proficiency in enabling smooth transitions. We understand the unique problems and aspirations of nurses seeking a successful career in Ireland.
            </p>

            {/* accordian here */}
                <div className='flex flex-col justify-center mx-6  lg:mx-auto max-w-3xl text-sm md:text-md text-gray-500 font-poppins my-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}>Expertise and Trustworthiness <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     Benefit from our extensive experience as a leading agency for verification and certificate attestation in India. Count on Trueway's established track record of successfully assisting numerous nurses in accomplishing NMBI college verification.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>Speed and Effectiveness
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Experience a fast and effective verification process tailored to meet NMBI's specific requirements. Trueway prioritises timely completion, ensuring a seamless progression through the migration process.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}>Commitment to Security
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Entrust your confidential documents to Trueway's secure and private verification process. Our dedication to data security ensures that your personal and professional information is handled with the highest level of care.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}>Transparent and Affordable Pricing <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Experience the advantages of Trueway's commitment to affordability, making NMBI college verification accessible to nurses from diverse backgrounds. Our transparent pricing structure ensures a clear understanding of costs, with no undisclosed fees.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}>Customised Solutions
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Recognizing the uniqueness of each nurse's journey, Trueway offers personalised solutions to cater to individual needs and circumstances. Our dedicated team collaborates closely with you to address challenges and provide customised support.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 5}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(5)}>Proven Success Stories
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Explore success stories and testimonials from nurses who have successfully migrated to Ireland with TrueWay's assistance. Learn firsthand how our services have significantly impacted the professional lives of nurses like yourself.
                    </AccordionBody>
                </Accordion>
                {/* 7th accordion */}
                <Accordion open={open === 6}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(6)}>Client-Focused Approach
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    TrueWay places your satisfaction and peace of mind as a top priority. Our client-focused approach ensures you receive the attention and support you deserve, making your NMBI college verification experience smooth, stress-free, and successful.
                    </AccordionBody>
                </Accordion>
                {/* 8th accordion */}
                <Accordion open={open === 7}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(7)}>Problem Resolution Assistance
                    <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    In case of any challenges during the NMBI college verification process, Trueway is committed to offering effective problem resolution assistance. Trust us to solve obstacles and find solutions to keep your migration plans on track.
                    </AccordionBody>
                </Accordion>
                </div>
        </div>        
        </div>
    </>
  )
}

export default WhyChooseTrueway