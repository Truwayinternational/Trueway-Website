import React, { useState } from 'react'
import FaqAccordion from '../FaqAccordion'


function FaqHome() {

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
            question: "How many days will it take for Kerala Home Department Attestation?",
            Answer:"Normally, it will take about 3 to 8 days."
        },
        {
            id:2,
            question:"Which is the best agency for Home department attestation services in India ?",
            Answer:"Trueway International is the best choice for Home Department attestation service in India. We provide very fast and budget-friendly service."
        },
        {
            id:3,
            question:"What is the validity of Home Department attestation?",
            Answer:"It does not have any expiry date like any other document attestation."
        },
        {
            id:4,
            question:"What are the charges for Home Department Attestation India?",
            Answer:"Usually, it costs Home Department attestation in India almost a few hundred rupees to over a thousand rupees per document."
        },
        {
            id:5,
            question:"Who requires Home Department Attestation?",
            Answer:" Citizens who want to move abroad are the main customers of this authentication, the Home Department attestation."
        },

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

export default FaqHome