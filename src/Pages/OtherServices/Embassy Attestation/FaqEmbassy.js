import React, { useState } from 'react'
import FaqAccordion from '../FaqAccordion'


function FaqEmbassy() {

    const [open, SetOpen] = useState(false)

    const toggle = (index) => {
        if(open === index) {
            return SetOpen(null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            id:1,
            question:" Which agency is the best for Embassy attestation in India?",
            Answer:"Trueway International provides top attestation, certificate verification and guidance for medical professionals who want to migrate abroad.",
        },
        {
            id:2,
            question:" How long does it take to get Embassy Attestation in India?",
            Answer:"Embassy Attestation in India may take 3-15 business days, depending on the type of document and the embassy's processing time",
        },
        {
            id:3,
            question:"What are the requirements for attestation from the Indian Embassy?",
            Answer:"Indian Embassy attestation requirements vary per document. Typically, notarization, HRD, MEA, and fees are needed. Verify specifics with the Embassy.",
        },
        {
            id:4,
            question:"How to track embassy attestation?",
            Answer:"To track embassy attestation, normally people visit the embassy's official website. But Trueway provides its own online tracking facilities.",
        },
        {
            id:5,
            question:"Can embassy attestation be done on original documents?",
            Answer:"Certainly. Original documents are often required for the process to ensure they have not been tampered with or altered before attestation is completed.",
        },
        {
            id:6,
            question:"How much does Embassy Attestation cost?",
            Answer:"Embassy Attestation costs vary based on country and document type. Please contact the respective embassy or consulate for accurate pricing information.",
        },
        {
            id:7,
            question:" Does the embassy check your bank account?",
            Answer:"Embassies generally do not check your bank account directly. However, they may require financial documents as part of the visa application process to assess your financial stability.",
        }
    ]

  return (
    <>
        <div className='w-full h-full flex flex-col justify-between bg-white'>
            <div className="max-w-[1240px] my-10 m-auto">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4'>
                    <h2 className='text-4xl lg:text-5xl  tracking-wide font-bold text-center font-HeadingFont py-3'>FAQ</h2>
                </div>
                <div className='flex justify-center items-center my-10 '>
                    <div className=' mx-5 lg:w-[800px] md:w-[500px] '>
                        {AccordionData.map((data, index)=>{
                            return <FaqAccordion 
                                key={index}
                                open={index === open}
                                question={data.question}
                                answer={data.Answer}
                                toggle={()=> toggle(index)}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FaqEmbassy;