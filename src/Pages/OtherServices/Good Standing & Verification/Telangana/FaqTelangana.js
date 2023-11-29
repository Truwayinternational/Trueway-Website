import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqTelangana() {

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
            question: "How can I renew my nursing certificate in Telangana?",
            Answer:"Contact Trueway customer care executive; they will guide you on the renewal process."
        },
        {
            id:2,
            question:"How many days will it take for a good standing certificate from Telangana nursing council?",
            Answer:"Generally it takes 30 working days."
        },
        {
            id:3,
            question:"What is the validity period of Telangana Good Standing?",
            Answer:"6 months."
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

export default FaqTelangana