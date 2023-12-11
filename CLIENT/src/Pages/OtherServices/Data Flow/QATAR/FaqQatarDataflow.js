import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqQatarDataflow() {

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
            question: "Which is the best affordable data flow for Qatar consultancy in India?",
            Answer:"Trueway International is a top choice for affordable data flow services for Qatar consultancy in India. Their pocket-friendly fees and reliable services make them the preferred agency for hassle-free document verification."
        },
        {
            id:2,
            question:" How can I apply for DataFlow in Qatar?",
            Answer:"To initiate DataFlow verification in Qatar, go to the DataFlow Group's site, create an account, complete the application, submit documents, and pay the processing fee. Trueway International offers fast and efficient assistance."
        },
        {
            id:3,
            question:"How long will it take for DataFlow verification in Qatar?",
            Answer:"DataFlow verification processing times in Qatar typically range from 2 to 4 weeks, but they can vary depending on various factors."
        },
        {
            id:4,
            question:" What is the validity of DataFlow verification in Qatar?",
            Answer:"The validity of DataFlow verification in Qatar typically lasts for six months from the date of issuance, after which it may need renewal."
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

export default FaqQatarDataflow