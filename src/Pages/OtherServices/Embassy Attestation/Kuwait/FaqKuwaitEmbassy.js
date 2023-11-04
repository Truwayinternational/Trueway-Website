import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'



function FaqKuwaitEmbassy() {

    const [open, SetOpen] = useState(false)

    const toggle = (index) => {
        if(open === index) {
            return SetOpen(null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            question:"Which agency is best for Kuwait Embassy attestation in India?",
            Answer:"Trueway International is a reputable agency for Kuwait Embassy attestation in India.",
        },
        {
            question:"How many days will it take for Kuwait Embassy attestation in India?",
            Answer:"The processing time for Kuwait Embassy attestation in India may vary, but it typically takes around 7 to 15 business days",
        },
        {
            question:"Is Attestation mandatory in Kuwait?",
            Answer:"Yes, attestation of certain documents is mandatory for individuals and businesses in Kuwait when dealing with government or legal matters",
        },
        {
            question:"How much does it cost to attest to the Kuwait Embassy in India?",
            Answer:"The cost of attestation at the Kuwait Embassy in India may vary depending on the type of document and the specific requirements; TrueWay International is well known for its affordable services.",
        },
        {
            question:"How can I attest documents from the Kuwait Embassy in India?",
            Answer:"To attest documents from the Kuwait Embassy in India, you need to follow the authentication process, including notarization, and state-level authentication, and then submit them to the Kuwaiti Embassy for their final approval.",
        },
        {
            question:"How can I get Kuwait Embassy attestation in Kerala?",
            Answer:"To get a Kuwait Embassy attestation in Kerala, you should contact the Kuwaiti Embassy or Consulate in Kerala and follow their specific requirements and procedures for document attestation.",
        },
        {
            question:"How much does the Kuwait Embassy charge for visa stamping?",
            Answer:"The cost of visa stamping at the Kuwait Embassy may vary depending on the type of visa and specific requirements, so it is recommended to contact the embassy directly for the most up-to-date pricing information.",
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

export default FaqKuwaitEmbassy