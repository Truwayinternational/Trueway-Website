import React, { useState } from 'react'
import FaqAccordion from '../../../OtherServices/FaqAccordion'

function FaqAustraliaMigration() {
    const [open, SetOpen] = useState(false)

    const toggle =(index) => {
        if (open === index) {
            return SetOpen (null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            id:1,
            question:"How can I determine if I am eligible to migrate as a nurse with Trueway International?",
            Answer:"A preliminary meeting with our experts is the first step. To determine your eligibility, we will evaluate your credentials, job history, and language skills during this session. The basis for a personalized migration plan that supports your objectives and aspirations is laid during this meeting. For more details Just dial 8327626262."
        },
        {
            id:2,
            question:"What is the minimum English language score required?",
            Answer:" The current requirement is an overall score of 7 with no score below 6.5 in any band. Trueway can offer guidance on preparing for and taking these tests."
        },
        {
            id:3,
            question:"Is work experience required? ",
            Answer:"While not mandatory, relevant work experience strengthens your application and makes you more competitive for jobs.  Trueway may offer suggestions on how to best showcase your experience."
        },
        {
            id:4,
            question:" Are there any age restrictions? ",
            Answer:"There are no age restrictions, although the relevance of your experience and talents may increase with age. Trueway can evaluate your specific circumstance."
        },
        {
            id:5,
            question:" What are Trueway's fees and payment options?",
            Answer:"They provide clear pricing structures with no additional fees and customizable payment plans to meet your requirements."
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

export default FaqAustraliaMigration