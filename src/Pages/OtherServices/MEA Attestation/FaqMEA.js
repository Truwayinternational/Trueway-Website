import React, { useState } from 'react'
import FaqAccordion from '../FaqAccordion'


function FaqMEA() {

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
            question:"How long does it take to get a MEA attestation ?",
            Answer:"MEA (Ministry of External Affairs) attestation time varies, typically taking 2-4 weeks. Expedited services may be available for quicker processing, depending on your needs and urgency.",
        },
        {
            id:2,
            question:"What is the validity of MEA attestation ?",
            Answer:"MEA attestation in India doesn't have a fixed validity period. It depends on the purpose and requirements of the receiving country or organisation. Check with them for specific validity details.",
        },
        {
            id:3,
            question:"What is the fee for MEA attestation in India ?",
            Answer:"MEA attestation fees in India depend on the document type, urgency, and the agency used. Costs range from approximately ₹600 to ₹5,000 or more per document. Trueway International is known for affordable rates, ensuring cost-effective MEA attestation services compared to others.",
        },
        {
            id:4,
            question:"Which agencies are outsourced for MEA Apostille ?",
            Answer:"MEA in India delegates apostille services to authorised agencies like VFS Global and BLS International. Trueway International is a reputed agency for efficient apostille assistance.",
        },
        {
            id:5,
            question:"What is MEA approval ?",
            Answer:"MEA (Ministry of External Affairs) approval refers to the authentication or endorsement by India's external affairs ministry for various documents, making them valid for international use or recognition.",
        },
        {
            id:6,
            question:"What is the difference between MOFA and MEA ?",
            Answer:"MOFA (Ministry of Foreign Affairs) is responsible for international relations, while MEA (Ministry of External Affairs) handles diplomatic matters and external relations, including document attestation and apostille in India.",
        },
        {
            id:7,
            question:"What is SDM and MEA attestation ?",
            Answer:"SDM (Sub-Divisional Magistrate) attestation is a local-level document validation in India, while MEA (Ministry of External Affairs) attestation is a national-level authentication for international use."
        },
        {
            id:8,
            question:"Is HRD and MEA the same thing ?",
            Answer:"No, HRD (Human Resource Development) and MEA (Ministry of External Affairs) attestations are different. HRD is a state-level attestation, while MEA is a national-level attestation for international recognition.",
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

export default FaqMEA