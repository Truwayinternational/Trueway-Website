import React, { useState } from 'react'
import FaqAccordion from '../FaqAccordion'

function FaqMofa() {

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
            question:"Can MOFA attestation be done in India ?",
            Answer:"Yes, Trueway International offers a fast and efficient process for MOFA attestation.",
        },
        {
            id:2,
            question:"How can I get an attestation from the Ministry of Foreign Affairs in India ?",
            Answer:"Submit your documents along with required fees and forms, to the regional attestation centre or embassy/consulate for verification. Consider consulting a reputable agency for  assistance.",
        },
        {
            id:3,
            question:"Which is the best agency for MOFA attestation services in India ?",
            Answer:"Trueway International excels as the top agency for MOFA attestation, providing efficient and reliable services for your document authentication needs.",
        },
        {
            id:4,
            question:"What is the validity of MOFA attestation ?",
            Answer:"MOFA (Ministry of Foreign Affairs) attestation validity depends on the specific requirements of the destination country or organization. It has no fixed duration.",
        },
        {
            id:5,
            question:"What is the fee for MOFA attestation in India ?",
            Answer:"MOFA attestation fees in India vary based on document type, urgency, and chosen agency.",
        },
        {
            id:6,
            question:"How long does it take to get a MOFA attestation ?",
            Answer:"The processing time for MOFA (Ministry of Foreign Affairs) attestation in India varies but typically takes around 2-4 weeks, depending on document type and urgency.",
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

export default FaqMofa