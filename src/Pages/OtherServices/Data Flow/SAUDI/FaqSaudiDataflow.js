import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqSaudiDataflow() {

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
            question: "Which is the best affordable data flow for Saudi consultancy in India ?",
            Answer:"Trueway International is a consultancy which does dataflow in a pocket-friendly way."
        },
        {
            id:2,
            question:" How many days will it take for Saudi dataflow ?",
            Answer:"Dataflow will take 30 working days."
        },
        {
            id:3,
            question:" How long is Saudi DataFlow valid ?",
            Answer:"All dataflow is valid for a lifetime."
        },
        {
            id:4,
            question:" Is DataFlow for the Saudi process different from other countries ?",
            Answer:"Yes, the procedures of dataflow verification vary depending on the country."
        },
        {
            id:5,
            question:"What is the data flow process for Saudi Arabia ?",
            Answer:"The authentication of the certificates submitted by the candidates to the dataflow company for verification is the first step. Along with that, council, college, and hospital verification will also be done. After all, if all verifications went well, then the candidate gets a positive letter."
        },
        {
            id:6,
            question:"How to start dataflow for Saudi Arabia ?",
            Answer:"The dataflow process for Saudi Arabia starts with the dataflow verification."
        },
        {
            id:7,
            question:"What is the validity of the Saudi Prometric licence ?",
            Answer:"It is valid for 2 years, but in some cases, it may vary depending on the date the hospital activated the license."
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

export default FaqSaudiDataflow