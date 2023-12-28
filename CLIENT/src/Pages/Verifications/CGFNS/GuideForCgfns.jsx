import React, { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'

function GuideForCgfns() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
         <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h3 className='md:text-5xl text-3xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>A complete Guide for <b className='text-green-500'> CGFNS Council Verification Process</b> for New Zealand</h3>
            </div>
            <div className='w-full lg:px-20 px-5 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                Do you want to work as a nurse in New Zealand? Trueway International can assist you in quickly and efficiently completing the CGFNS Council Verification procedure. We have helped countless nurses like you achieve their New Zealand dreams, and we are committed to making your journey just as successful.
                </p>
                <p className='text-xl md:text-3xl text-center text-gray-900 font-HeadingFont font-semibold lg:p-0 mt-10'>
                Here's what you can expect when you choose Trueway for your CGFNS Council Verification:
                </p>

                {/* accordian here */}
              <div className=' text-sm md:text-md text-gray-500 font-poppins my-5 px-2 md:px-5'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={handleAlwaysOpen}>Initial Assessment <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     We will assess your nursing qualifications to determine your eligibility for CGFNS verification. Our team will guide you through the necessary documentation process and answer any inquiries you may have.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(1)}>
                    Document Preparation and Collection <IoIosArrowDropdownCircle className='ms-auto text-2xl'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We will provide a personalised list of necessary documents customised to your specific needs. Our dedicated team will help recover any missing documents through our established network of contacts. Additionally, we guarantee that your documents will be properly formatted and, if required, professionally translated to ensure accuracy and compliance.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(2)}> Application Submission <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We will manage the entire online application process on your behalf, ensuring the accuracy and completeness of all information provided. Our team will track the progress of your application and keep you well-informed at every step of the way, ensuring a smooth and hassle-free experience for you.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(3)}> Post-Submission Support <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We will collaborate with CGFNS on your behalf, addressing any queries and providing clarifications as needed. Our commitment includes follow-ups on your application status, delivering timely updates, and serving as your advocate to ensure your voice is heard throughout the process.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(4)}> Credential Evaluation and Outcome <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    You will be notified once your CGFNS evaluation is completed, and the report detailing the results will be furnished. In the event of any discrepancies, our support will be extended to guide you through rectification processes, ensuring a favourable resolution.
                    </AccordionBody>
                </Accordion>
              </div>
            </div>

            {/* next component added here */}
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h4 className='md:text-4xl text-3xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'>The inclusions in <br/><b className='text-green-500'> every procedure</b></h4>
            </div>

            {/* accordian here */}
            <div className='text-sm md:text-md text-gray-500 font-poppins my-5 mx-6 md:mx-10 lg:mx-24'>
                <Accordion open={open === 5} >
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-2xl py-2' onClick={() => handleOpen(5)}> Transparent communication <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     We promise to keep you updated at every stage and never leave you in confusion.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 6}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(6)}>
                    Professional guidance <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Our team of experts will be your dedicated support system, answering your questions and addressing your concerns.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 7}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(7)}> Stress-free experience <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We will take care of the documentation and administrative process, freeing you up to concentrate on getting ready for your new life in New Zealand.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 8}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(8)}> Secure Handling of Sensitive Information <IoIosArrowDropdownCircle className='ms-auto text-2xl'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Ensuring the secure handling of sensitive information is paramount to safeguarding confidentiality, integrity, and privacy in various professional contexts.
                    </AccordionBody>
                </Accordion>
                {/* 5th accordion */}
                <Accordion open={open === 9}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(9)}> Expertise in Multiple Nursing Council Verifications
                    <IoIosArrowDropdownCircle className='ms-auto text-3xl sm:text-2xl'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 mx-2 pt-1 mr-8">
                    Expertise in supporting smooth operations within the healthcare sector, guaranteeing consistency, and performing verifications with several nursing councils.
                    </AccordionBody>
                </Accordion>
                {/* 6th accordion */}
                <Accordion open={open === 10}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(10)}>Dedicated Support Throughout the Process  <IoIosArrowDropdownCircle className='ms-auto text-2xl'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Providing dedicated support throughout the entire process, ensuring a smooth and reliable experience for all individuals involved.
                    </AccordionBody>
                </Accordion>
                {/* 7th accordion */}
                <Accordion open={open === 11}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(11)}>Experience and Expertise   <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    With a 98% success rate, we have helped countless nurses like you complete the CGFNS. Our staff of seasoned experts knows all aspects of the procedure, so you can be sure your application will get through the system with ease.
                    </AccordionBody>
                </Accordion>
                {/* 8th accordion */}
                <Accordion open={open === 12}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(12)}>Fast and Efficient Service  <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    No more endless paperwork and frustrating delays. We accelerate the verification procedure to save your burden and guarantee that you get your CGFNS accreditation quickly. Imagine turning your attention to your new life in New Zealand, leaving the hassle to us.
                    </AccordionBody>
                </Accordion>
                {/* 10th accordion */}
                <Accordion open={open === 13}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(13)}>Complete Support<IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    From initial assessment to post-submission follow-up, we're your dedicated partner every step of the way. We answer your questions, address concerns, and provide personalised guidance to overcome any hurdles.
                    </AccordionBody>
                </Accordion>
                {/* 11th accordion */}
                <Accordion open={open === 14}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(14)}>Stress-Free Navigation  <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Let us shoulder your burden. We handle all communication with CGFNS and the NZ Nursing Council, keeping you informed and stress-free throughout the process.
                    </AccordionBody>
                </Accordion>
                {/* 12th accordion */}
                <Accordion open={open === 15}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(15)}>Competitive Pricing  <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We offer transparent and competitive fees, ensuring you get the best value for your investment. No hidden costs, no surprises – just clear pricing and peace of mind.
                    </AccordionBody>
                </Accordion>
                {/* 13th accordion */}
                <Accordion open={open === 16}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(16)}>Personalised Attention  <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We adjust our strategy to your particular requirements and situation to make sure your CGFNS verification process is seamless and customised.
                    </AccordionBody>
                </Accordion>
                {/* 14th accordion */}
                <Accordion open={open === 17}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(17)}>Proven Track Record  <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Many happy nurses have put their futures in the hands of Trueway. Our client testimonials and success stories are powerful evidence of our commitment and knowledge. Never accept anything less than the greatest. Achieve your New Zealand dream with confidence by selecting Trueway.
                    </AccordionBody>
                </Accordion>
                {/* 9th accordion */}
                <Accordion open={open === 18}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-2xl py-2' onClick={() => handleOpen(18)}>24*7 customer support  <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 mx-2 pt-1 mr-8">
                    Offering round-the-clock customer support to address your inquiries and concerns, ensuring assistance and guidance whenever you need it, day or night.
                    </AccordionBody>
                </Accordion>
            </div>

            {/* contact enquiry pata */}
            <p className='text-xl md:text-2xl text-center text-gray-900 font-HeadingFont font-semibold lg:p-0 mt-14'>
            Contact us today for a free consultation <br/>
            Make your New Zealand dream a reality!
            </p>
        </div>
    </>
  )
}

export default GuideForCgfns