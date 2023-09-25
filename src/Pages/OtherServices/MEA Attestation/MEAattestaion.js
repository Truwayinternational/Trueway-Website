import React, {useState} from 'react'
import MEA_banner from '../../../Assets/MEA/webBanner.png'
import banner_mob from '../../../Assets/MEA/MobBanner.png'
import HeroSidebar from '../HeroSidebar';

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  

import {IoIosArrowDropdownCircle} from 'react-icons/io'


function MEAattestaion() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
        <div className='flex  justify-center max-w-[1240px] mx-auto place-content-center'>
          <div className='lg:w-1/2 '>
            <div className='hidden lg:flex m-3 lg:ml-20 lg:relative'>
              <img className='object-cover ' src={MEA_banner} alt="page_banner" />
              <h3 className='absolute lg:text-4xl font-HeadingFont font-extrabold text-black pl-10 py-20 '>MEA <br/> Attestation</h3>
            </div>

            {/* responsive banner of Certificate attestation */}
            <div className='w-full top-0 lg:ml-20 relative lg:hidden'>
              <img className='object-cover w-full ' src={banner_mob} alt="page_banner" />
              <h3 className='absolute text-3xl md:text-5xl font-HeadingFont font-extrabold text-black text-center  left-28 md:left-[34%] tracking-wider mt-[-100px] md:mt-[-150px]'>MEA <br/> Attestation</h3>
            </div>

            {/* web content sections */}
            <div className='m-3 md:my-10 my-5 lg:ml-20'>
              <h1 className='text-3xl px-3 text-start md:text-5xl font-HeadingFont font-extrabold tracking-wide'>Why Choose <br/>
              <p className='text-green-500'>Trueway International's MEA Attestation </p> Services in India ?</h1>
              <p className='text-md md:text-xl lg:text-lg text-justify text-gray-500 font-poppins mt-5 px-4 lg:p-0'>
              <b>Trueway International</b>  has been functioning for more than 15 years now and earned a well-deserved reputation as the best MEA Attestation service in India. We prioritise customer satisfaction and employ advanced technology for an effortless experience. Let us demonstrate how we can assist you with the best services:</p>

              {/* ACCORDION SECTION IN HERE */}
              <div className=' text-md lg:text-lg md:text-xltext-gray-500 font-poppins mb-10 px-4 pr-3 lg:p-0'>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont   text-lg md:text-xl py-2' onClick={handleAlwaysOpen}> Efficient and Reliable Assistance: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                     <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                     Our facilities are dependable and verified, ensuring a swift document verification process.
                    </AccordionBody>
                </Accordion>
                    {/* 2nd accordion */}
                <Accordion open={open === 1}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(1)}>
                    Free pick up & drop service: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Our services include the convenience of collecting and returning your documents right to your doorstep.
                    </AccordionBody>
                </Accordion>
                    {/* 3rd accordion */}
                <Accordion open={open === 2}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(2)}>
                    National Coverage: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    We proudly served customers across India for over 15 years, with divisions spanning the entire nation.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 3}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(3)}>
                    24*7 Customer Support: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Our dedicated customer service team is available round-the-clock to address your inquiries and promptly resolve any issues.
                    </AccordionBody>
                </Accordion>
                    {/* 4th accordion */}
                <Accordion open={open === 4}>
                    <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont text-lg md:text-xl py-2' onClick={() => handleOpen(4)}>
                    Client-Centric Approach: <IoIosArrowDropdownCircle className='ms-auto'/>
                    </AccordionHeader>
                    <AccordionBody className="text-sm md:text-lg text-gray-500 px-2 pt-1 pr-8">
                    Our foremost priority is our clients, and we leverage technology to make our services as convenient and user-friendly as possible.
                    </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>

          {/* side bar navigation component*/}
          <div className='hidden lg:grid lg:w-1/2'>
            <div className='flex flex-col justify-center items-center'>
              <HeroSidebar/>
            </div>
          </div>
      </div>
    </>
  )
}

export default MEAattestaion