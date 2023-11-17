import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqMadhya() {

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
            question: "How many days will it take for a good standing certificate  from Madyapradesh nursing council?",
            Answer:"Normally, It takes 7 to 10 working days. Trueway International will assist you in obtaining the certificate in a more timely and secure manner."
        },
        {
            id:2,
            question:"What is the validity period of Madhya Pradesh Good Standing?",
            Answer:"It usually has a one-year validity period from the date of issuance."
        },
        {
            id:3,
            question:"How to get a good standing certificate from Madhya Pradesh Nursing Council?",
            Answer:"Trueway International is the most efficient and secure organisation for obtaining a Madhya Pradesh Nursing Council Good Standing certificate. "
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

export default FaqMadhya