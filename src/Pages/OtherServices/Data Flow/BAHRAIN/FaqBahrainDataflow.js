import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqBahrainDataflow() {

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
            question: "Which is the best dataflow verification service for Bahrain consultancy in India?",
            Answer:"Trueway International is known as the best dataflow verification service for Bahrain consultancy because of their fast and secure process. They also have 24*7 customer support. You can get the verification done at an affordable price and with peace of mind."
        },
        {
            id:2,
            question:"How can I apply for DataFlow in Bahrain?",
            Answer:"Applying for DataFlow in Bahrain is a long process, including registration, activation of your account, uploading documents, payment, tracking, etc. You can benefit from our value-added services when applying to us: Express Service: 'Fast-track' your application and receive your report."
        },
        {
            id:3,
            question:"How many days will it take for the Bahrain dataflow?",
            Answer:"Trueway International offers the industry's fastest processing time. We value our applicant's time and need to obtain a license as fast as possible. Our team processes the applications within an average of 30 days."
        },
        {
            id:4,
            question:"Is Bahrain a Prometric or MOH?",
            Answer:"All healthcare professionals who are planning to work in Bahrain must appear for the NHRA-Bahrain (PROMETRIC) examination."
        },
        {
            id:5,
            question:"What is the passing score for the Bahrain prometric exam?",
            Answer:"The pass grade is set at 60% for all Bahrain licensure examinations. For further inquiries about the examination please contact us through email: tvm@truewayinternational.com"
        }
        
    ]

  return (
    <>
        <div className='w-full h-full flex flex-col justify-between '>
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

export default FaqBahrainDataflow