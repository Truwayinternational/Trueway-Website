import React, {useState} from 'react'
import avatar_2 from '../../../Assets/certificate attestation/avatar_2.png'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

import {IoIosArrowDropdownCircle} from 'react-icons/io'



function PurposesOfEmbassyAttestation() {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true)

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
        <div className='h-full lg:pl-32 xl:pl-36 py-10'>
            <div className='flex mx-4  lg:px-16 px-3'>
              <h3 className='md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black  tracking-wide  '>What is the purpose of<br/><p className='text-green-500'>Embassy Attestation ?</p></h3>
              <img className='md:hidden grid  w-[100px]  mt-[-30px]' src={avatar_2} alt="avatar_2" />
            </div>
          <div className='flex'>
            <div className='lg:w-2/3 ml-3 lg:md-12 lg:px-20 px-4 '>
                <div className='text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins pr-3 lg:p-0 mt-5'>
                    <Accordion open={alwaysOpen} >
                        <AccordionHeader className='text-green-500 cursor-pointer text-sm md:text-xl py-2' onClick={handleAlwaysOpen}> For pursuing higher education at foreign universities<IoIosArrowDropdownCircle className='ml-auto md:text-[30px] text-[20px]'/> 
                        </AccordionHeader>
                        <AccordionBody className="text-xs md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                             Embassy attestation is needed to pursue higher education at international universities. The verification and authentication of necessary documents, such as educational certificates, by the embassy or consulate of the country where you plan to study, is involved in embassy attestation.
                        </AccordionBody>
                    </Accordion>
                    {/* 2nd accordion */}
                    <Accordion open={open === 1}>
                        <AccordionHeader className='text-green-500 cursor-pointer text-sm md:text-xl py-2'
                            onClick={() => handleOpen(1)}>
                             To secure an employment visa abroad <IoIosArrowDropdownCircle className='ml-auto md:text-[30px] text-[18px]'/>
                        </AccordionHeader>
                        <AccordionBody className="text-xs md:text-lg text-gray-500 pr-10 pl-2 py-0">
                            If you want to secure an employment visa, then embassy attestation is mandatory for you. Various documents, such as educational certificates, employment contracts, and other supporting paperwork are needed to submit when you apply for an employment visa in a foreign country.
                        </AccordionBody>
                    </Accordion>
                    {/* 3rd accordion */}
                    <Accordion open={open === 2}>
                        <AccordionHeader className='text-green-500 cursor-pointer text-sm md:text-xl py-2' onClick={() => handleOpen(2)}>For migrating and establishing residency in a foreign country<IoIosArrowDropdownCircle className='ml-auto md:text-[35px] text-[25px]'/>
                        </AccordionHeader>
                        <AccordionBody className="text-xs md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                        Embassy attestation has a significant role when migrating and establishing residency abroad. By embassy attestation, it helps to establish the credibility of your personal and legal documents.
                        </AccordionBody>
                    </Accordion>
                    {/* 4th accordion */}
                    <Accordion open={open === 3}>
                        <AccordionHeader className='text-green-500 cursor-pointer text-sm md:text-xl py-2' onClick={() => handleOpen(3)}> To get a family visa in a foreign country <IoIosArrowDropdownCircle className='ml-auto md:text-[30px] text-[18px]' />
                        </AccordionHeader>
                        <AccordionBody className="text-xs md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                        You probably need to submit legal documents, such as birth certificates, marriage certificates, and other family-related documents when you are applying for a family visa to join a family member who is currently resident in a foreign country.
                        </AccordionBody>
                    </Accordion>
                    {/* 5th accordion */}
                    <Accordion open={open === 4}>
                        <AccordionHeader className='text-green-500 cursor-pointer text-sm md:text-xl py-2' onClick={() => handleOpen(4)}> To start a business venture abroad <IoIosArrowDropdownCircle className='ml-auto md:text-[30px] text-[18px]' />
                        </AccordionHeader>
                        <AccordionBody className="text-xs md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                        It may not help directly to begin a business venture abroad. Embassy attestation is mainly concerned with the verification and authentication of documents by the destination country's embassy or consulate, including certificates, personal documents, and business-related paperwork.
                        </AccordionBody>
                    </Accordion>
                    {/* 6th accordion */}
                    <Accordion open={open === 5}>
                        <AccordionHeader className='text-green-500 cursor-pointer text-sm md:text-xl py-2' onClick={() => handleOpen(5)}> To obtain work permits from abroad <IoIosArrowDropdownCircle className='ml-auto md:text-[30px] text-[18px]' />
                        </AccordionHeader>
                        <AccordionBody className="text-xs md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                        Embassy attestation plays a role when obtaining work permits from abroad. It is mainly concerned with the verification and authentication of documents, by the destination country's embassy, including certificates, personal documents, and business-related paperwork.
                        </AccordionBody>
                    </Accordion>
                    {/* 7th accordion */}
                    <Accordion open={open === 6}>
                        <AccordionHeader className='text-green-500 cursor-pointer text-sm md:text-xl py-2' onClick={() => handleOpen(6)}> To sponsor parents and family members <IoIosArrowDropdownCircle className='ml-auto md:text-[30px] text-[18px]' />
                        </AccordionHeader>
                        <AccordionBody className="text-xs md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                        The embassy attestation is not only for sponsoring family members for immigration purposes. The main focus is usually on giving legal proof of the relationship among them and financial support when it comes to the case of sponsoring family members.
                        </AccordionBody>
                    </Accordion>
                    {/* 8th accordion */}
                    <Accordion open={open === 7}>
                        <AccordionHeader className='text-green-500 cursor-pointer text-sm md:text-xl py-2' onClick={() => handleOpen(7)}>For secure admission to schools and colleges abroad <IoIosArrowDropdownCircle className='ml-auto md:text-[30px] text-[20px]' />
                        </AccordionHeader>
                        <AccordionBody className="text-xs md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                        If you are applying for admission to any schools or colleges abroad, the focus should be on fixing the academic requirements of the particular school or college and submitting the necessary application documents. And this is not a direct way related to getting admissions
                        </AccordionBody>
                    </Accordion>
                    {/* 9th accordion */}
                    <Accordion open={open === 8}>
                        <AccordionHeader className='text-green-500 cursor-pointer text-sm md:text-xl py-2' onClick={() => handleOpen(8)}>To establish branches of your business abroad <IoIosArrowDropdownCircle className='ml-auto md:text-[30px] text-[18px]' />
                        </AccordionHeader>
                        <AccordionBody className="text-xs md:text-lg text-gray-500 pr-10 pl-2 py-0" >
                        The requirement for the embassy attestation will be different depending on the particular requirements of the destination country. The primary requirements for setting up a branch of your business abroad usually revolve around business registrations, permits, licences, and compliance with local laws and regulations. And it is not mandatory, depending on the country.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>    
            <div className='hidden md:flex md:w-full lg:w-1/3 h-full  lg:mr-10 xl:mt-[-50px] my-8'>
              <img src={avatar_2} alt="avatar_2" />
            </div>
          </div>                          
        </div>
    </div>
  )
}

export default PurposesOfEmbassyAttestation