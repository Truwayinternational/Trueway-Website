import React, { useState } from 'react'
import FaqAccordion from '../../OtherServices/FaqAccordion'

function FaqCgfns() {

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
            question: "Is my nursing qualification eligible for CGFNS verification?",
            Answer:"To determine your eligibility, we suggest taking a free initial assessment. However, generally, nurses who possess a valid nursing degree and are currently registered in their nation of residence stand a fair chance of being accepted."
        },
        {
            id:2,
            question:"What documents do I need for the CGFNS verification process?",
            Answer:"The required documents vary depending on your specific circumstances. We will provide you with a personalised list after your initial assessment. Common documents include: (1)- Nursing degree transcripts and diplomas, (2)- Nursing licence and registration certificate, (3)-Proof of English language proficiency (e.g., IELTS, TOEFL), (4)- Employment verification letters from past employers, (5)- Passport and other identification documents."
        },
        {
            id:3,
            question:"How long does the CGFNS verification process take?",
            Answer:"The processing time can vary depending on the CGFNS workload and individual circumstances. However, at Trueway, we complete the process within 4-6 months."
        },
        ,
        {
            id:4,
            question:" How much does the CGFNS verification service cost?",
            Answer:"Our fees are transparent and competitive. We offer different packages to suit your needs and budget. Contact us for a personalised quote."
        },
        {
            id:5,
            question:"Do you offer translation services for my documents?",
            Answer:"Yes, we have a network of certified translators who can translate your documents as required."
        },
        {
            id:6,
            question:" What happens if there are issues with my application?",
            Answer:"Our team of seasoned experts will collaborate with you to resolve any disparities or problems that might arise throughout the verification procedure."
        },
        {
            id:7,
            question:"Can you help me with the New Zealand nursing registration process after verification?",
            Answer:"Yes, we offer additional services to assist you with the New Zealand Nursing Council registration process, including document preparation, application guidance, and interview preparation."
        },
        {
            id:8,
            question:"How can I get started?",
            Answer:"Contact us today for a free initial consultation! We will answer your questions, assess your eligibility, and provide you with a personalised plan to make your CGFNS verification journey a success."
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

export default FaqCgfns