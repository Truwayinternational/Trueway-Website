import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqDelhiNursing() {

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
            question: "How many days will it take for a good standing certificate from the Delhi Nursing Council?",
            Answer:"It generally takes 15-30 days. Trueway can assist you in obtaining a Delhi Good Standing Certificate from the council quickly and securely, allowing you to receive the certificate within a few days."
        },
        {
            id:2,
            question:"What is the validity period of Delhi Good Standing?",
            Answer:"Trueway helps you to pursue the Good Standing certificate issued by the Delhi Medical Council will be valid up to 6 months from the date of issue."
        },
        {
            id:3,
            question:"How can a candidate get a Good Standing certificate from the Delhi Nurses and Midwives Council (DNMC)?",
            Answer:"Trueway International will guide you properly in the entire process to get a good standing certificate."
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

export default FaqDelhiNursing