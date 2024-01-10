import React, { useState } from 'react'
import FaqAccordion from '../../OtherServices/FaqAccordion'

function FaqNMBI() {

    const [open, SetOpen] =useState(false)

    const toggle =(index) => {
        if (open === index) {
            return SetOpen (null)
        }
        SetOpen(index)
    }
    const AccordionData = [
        {
            id:1,
            question: "Who needs to undergo NMBI Council Verification?",
            Answer:"Nurses who intend to work in Ireland, especially those coming from other countries, need to undergo NMBI Council verification. This process ensures that their education, training, and professional competence align with the standards set by the NMBI."
        },
        {
            id:2,
            question:"What documents are required for NMBI Council Verification?",
            Answer:"The required documents may include academic transcripts, professional certificates, proof of identity, and evidence of English language proficiency. The specific documentation may vary based on individual circumstances and the country of origin."
        },
        {
            id:3,
            question:"How long does the NMBI Council Verification process take?",
            Answer:"The duration of the verification process can vary. It depends on factors such as the completeness of documentation, response times from educational institutions, and the overall efficiency of the verification process. Trueway International aims to expedite the process for a swift outcome."
        },
        {
            id:4,
            question:"Can I start working as a nurse in Ireland while the verification is in progress?",
            Answer:"Generally, nurses are required to complete the NMBI Council Verification process before commencing work in Ireland. It is advisable to wait for the confirmation of successful verification before initiating employment in the healthcare sector."
        },
        {
            id:5,
            question:"How much does the NMBI Council Verification service cost?",
            Answer:"The cost of NMBI Council Verification services may vary, and TrueWay International offers transparent and competitive pricing. For specific details regarding the fees, please contact our team for a personalized consultation."
        },
        {
            id:6,
            question:"Is there a specific English language proficiency requirement for NMBI Council Verification?",
            Answer:"Yes, proficiency in English is a crucial requirement for NMBI Council Verification. Nurses are typically required to demonstrate proficiency through recognized language tests, such as the International English Language Testing System (IELTS) or Occupational English Test (OET)."
        },
        {
            id:7,
            question:"What happens if my documents are not in English?",
            Answer:"If your documents are not in English, you will likely need to provide certified translations. TrueWay International can guide you on the translation process and assist in ensuring that all translated documents meet the NMBI Council's requirements."
        },
        {
            id:8,
            question:"How can I initiate the NMBI Council Verification process with Trueway International?",
            Answer:"To start the NMBI Council Verification process with Trueway International, simply contact our team through our website or by phone. Our consultants will guide you through the initial steps and provide detailed information on the process and requirements."
        }
    ]

  return (
    <>
        <div className='w-full h-full flex flex-col justify-between '>
            <div className="max-w-[1240px] my-10 m-auto">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4'>
                    <h6 className='text-4xl lg:text-5xl  tracking-wide font-bold text-center font-HeadingFont py-3'>FAQ</h6>
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

export default FaqNMBI