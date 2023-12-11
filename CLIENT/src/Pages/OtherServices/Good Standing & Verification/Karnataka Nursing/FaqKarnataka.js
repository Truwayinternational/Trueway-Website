import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqKarnataka() {

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
            question: "How many days will it take for a good standing certificate  from the Karnataka nursing council?",
            Answer:"It usually takes many weeks to several months. Trueway International will assist you in obtaining it extremely quickly."
        },
        {
            id:2,
            question:"What is the validity period of Karnataka Good Standing?",
            Answer:"It is usually valid for one year from the date of issuing."
        },
        {
            id:3,
            question:"How can I get a good standing certificate from the Karnataka nursing Council?",
            Answer:"Trueway International is the best organisation for obtaining a Karnataka Nursing Council Good Standing certificate since it is fast and secure. "
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

export default FaqKarnataka