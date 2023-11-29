import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

const FaqSaudiPcc = () => {

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
            question: "How many days will it take to get PCC in Saudi Arabia?",
            Answer:"Generally it takes 2-3 working days."
        },
        {
            id:2,
            question:"How long is the PCC valid for in Saudi Arabia?",
            Answer:"All PCC is valid for 6 months."
        },
        {
            id:3,
            question:"How can I get PCC in  Saudi Arabia without an Emirates ID ?",
            Answer:"Emirates ID is not needed to get PCC from Saudi Arabia. IQAMA copy is significant."
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

export default FaqSaudiPcc
