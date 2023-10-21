import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqKuwaitDataflow() {

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
            question: "Is DataFlow is needed for Kuwait ?",
            Answer:"Yes, if you want to migrate to Kuwait for any kind pf purpose then verifying your documents is compulsory thus Dataflow is needed."
        },
        {
            id:2,
            question:"How can I do Kuwait DataFlow ?",
            Answer:"Submit your certificates to the respective agency and they will check and verify your documents genuinity thus you passed the dataflow."
        },
        {
            id:3,
            question:"How many days will take for DataFlow of Kuwait?",
            Answer:"30-45 working days will it take to complete the dataflow."
        },
        {
            id:4,
            question:"How long is a data flow of Kuwait valid?",
            Answer:"All dataflow is valid for a lifetime."
        },
        {
            id:5,
            question:"Which is the best dataflow verification service for Kuwait consultancy in India?",
            Answer:"Trueway is one of the best dataflow verification service providers in India. They do the process swiftly, and securely."
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

export default FaqKuwaitDataflow