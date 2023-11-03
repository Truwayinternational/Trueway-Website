import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'


function FaqUaeEmbassy() {

    const [open, SetOpen] = useState(false)

    const toggle = (index) => {
        if(open === index) {
            return SetOpen(null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            question:"What is the importance of UAE attestation?",
            Answer:"For anyone who wants to migrate to the UAE, UAE embassy attestation is required.",
        },
        {
            question:"What is the difference between UAE embassy attestation and MOFA attestation?",
            Answer:"UAE embassy attestation is done from India but MOFA attestation has to be done from UAE.",
        },
        {
            question:"Which agency is best for UAE Embassy attestation in India?",
            Answer:"Trueway is the best agency in Kerala and India which is suitable for you to approach for UAE or any countries’ embassy attestation.",
        },
        {
            question:"Is attestation mandatory for a UAE visa?",
            Answer:"Yes, attestation is compulsory for obtaining a UAE visa.",
        },
        {
            question:"How many days will it take for UAE Embassy attestation in India?",
            Answer:"It will take 12 working days.",
        },
        {
            question:"How much does it cost to attest to the UAE Embassy in India?",
            Answer:"Trueway does embassy attestation in a budget-friendly way. Without breaking the bank you can do attestation from Trueway.",
        }
    ]


  return (
    <>
        <div className='w-full h-full flex flex-col justify-between bg-white'>
            <div className="max-w-[1240px] my-10 m-auto">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl  tracking-wide font-bold text-center font-HeadingFont py-3'>FAQ</h2>
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

export default FaqUaeEmbassy