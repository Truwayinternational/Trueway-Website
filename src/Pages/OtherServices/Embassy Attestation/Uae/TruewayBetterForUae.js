import React, {useState} from 'react'
import Avatar_4 from '../../../../Assets/embassy attestation/avatar 4.webp'


import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  
  import {IoIosArrowDropdownCircle} from 'react-icons/io'

  

function TruewayBetterForUae() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)
  
    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


  return (

    <>
        <div className='max-w-[1240px] mx-auto place-content-center my-20'>
            <div className='flex  lg:px-8 px-3'>
                <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={Avatar_4} alt="Avatar_1" />
                <h5 className='md:text-5xl lg:px-48  text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>Why is TrueWay a Better Option for <b className='text-green-500'> UAE Embassy Attestation Services ?</b></h5>
            </div>
            <div className='flex '>
                <div className='hidden md:flex h-full lg:pl-10 xl:mt-[-10rem] py-4'>
                    <img className='w-[400px]' src={Avatar_4} alt="avatar_4" />
                </div>
                <div className=' lg:pr-12  pl-4 mx-3'>
                    <p className='text-md md:text-xl lg:text-lg text-gray-500 font-poppins lg:p-0 '>
                    Using TrueWay for Kuwait UAE Embassy Attestation Services Has Advantages TrueWay is the top choice for UAE Embassy attestation services because of its expertise, dependability, wide range of options, upfront pricing, and first-rate customer service.
                    </p>

                    {/* accordion of this section added here */}
                    <div className='text-md  lg:text-lg text-gray-500 font-poppins lg:p-0'>
                        <Accordion open={alwaysOpen} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={handleAlwaysOpen}>  Experience and Knowledge: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            TrueWay is well-versed and experienced in providing attestation services through the UAE Embassy. Their knowledgeable staff is aware of the intricacies of the process, delivering a quick and easy client experience.
                            </AccordionBody>
                        </Accordion>
                        {/* 2nd accordion */}
                        <Accordion open={open === 1} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={() => handleOpen(1)}>  Reliable and on-time service: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            TrueWay is well known for its dedication to dependability and punctuality. They will complete the attestation process quickly and accurately for their clients, saving them important time and effort.
                            </AccordionBody>
                        </Accordion>

                        {/* 3rd  accordion */}
                        <Accordion open={open === 2} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={() => handleOpen(2)}>  Broad Service Spectrum: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            TrueWay offers a wide range of services, including all aspects of Kuwait Embassy attestation. They eliminate the need for clients to work with many agencies by providing end-to-end assistance from document development to submission.
                            </AccordionBody>
                        </Accordion>

                        {/* 4th  accordion */}
                        <Accordion open={open === 3} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={() => handleOpen(3)}>  Pricing that is open and competitive: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            TrueWay is committed to upholding price transparency. Customers may anticipate fair prices without any additional costs, making their services widely available and reasonably priced.
                            </AccordionBody>
                        </Accordion>

                        {/* 5th  accordion */}
                        <Accordion open={open === 4} className='w-full'>
                            <AccordionHeader className='text-green-500 cursor-pointer font-HeadingFont py-2 md:text-2xl text-lg' onClick={() => handleOpen(4)}>  Outstanding Customer Support: <IoIosArrowDropdownCircle className='ms-auto w-6'/>
                            </AccordionHeader>
                            <AccordionBody className="text-sm md:text-lg text-gray-500 py-1 pr-10">
                            TrueWay constantly gives the greatest customer service top priority. By being accessible at all times to respond to questions, provide customers updates, and walk them through the attestation process, our staff helps make it stress-free for clients.
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>  
            </div>                     
        </div>
    </>
  )
}

export default TruewayBetterForUae