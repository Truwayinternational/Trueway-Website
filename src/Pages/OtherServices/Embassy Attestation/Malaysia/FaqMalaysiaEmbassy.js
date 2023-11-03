import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'



function FaqMalaysiaEmbassy() {

    const [open, SetOpen] = useState(false)

    const toggle = (index) => {
        if(open === index) {
            return SetOpen(null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            question:"Which agency is best for Malaysia  Embassy attestation in India?",
            Answer:"For the safety and accuracy of your document, getting Bahrain Embassy Attestation through Trueway International is always a wise choice.",
        },
        {
            question:"How many days will it take for the Malaysia Embassy attestation in India?",
            Answer:"------",
        },
        {
            question:"How much does it cost to attest to the Malaysia Embassy in India?",
            Answer:"With the service of Trueway International, you can complete your embassy attestation at an affordable price compared to other agencies.",
        },
        {
            question:"Is attestation mandatory in Malaysia ?",
            Answer:"Attestation of documents is required for various purposes such as higher education, employment, immigration, visa, etc. in Malaysia or any other country.",
        },
        {
            question:"How can I get certificate attestation in Malaysia?",
            Answer:"To get your document attestation from the most reliable document attestation company, visit us at truewayinternational.com  Write to us at tvm@truewayinternational.com or call us at 8327626262.",
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

export default FaqMalaysiaEmbassy