import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqOmanDataflow() {


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
            question: "How to process dataflow in Oman ?",
            Answer:"To process Dataflow in Oman, contact Trueway and gather the required documents, submit the application, and await their verification process for your educational and professional credentials."
        },
        {
            id:2,
            question:" How much time will take for Oman Dataflow ?",
            Answer:"Generally, it may take several weeks to a few months."
        },
        {
            id:3,
            question:" What is Prometric and data flow for Oman ?",
            Answer:"In Oman, Prometric often administers licensure exams for medical professionals and Dataflow conducts the verification process to make sure that the qualifications of medical professionals are legitimate and meet the country's standards."
        },
        {
            id:4,
            question:" How to apply for the Prometric exam for Oman from India ?",
            Answer:"Visit our website, select your test, create an account, schedule the exam, pay the fee, and follow the provided instructions. For further details contact our customer care."
        },
        {
            id:5,
            question:"How long is the Oman Prometric exam ?",
            Answer:"It depends on the specific exam and can range from a few hours to a full day."
        },
        {
            id:6,
            question:"What is the pass mark for Oman Prometric ?",
            Answer:"70% is the minimum accepted percentage required to obtain the Oman Prometric exam."
        },
        {
            id:7,
            question:"Which is the best affordable data flow for Oman consultancy in India ?",
            Answer:"Trueway International is providing affordable dataflow services."
        },
        {
            id:8,
            question:"How many attempts are there in the Oman Prometric exam ?",
            Answer:"You can take the exam up to three times in a year."
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

export default FaqOmanDataflow