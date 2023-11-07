import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqKuwaitPcc() {

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
            question: "How can I get PCC from Kuwait?",
            Answer:"Getting a Police Clearance Certificate (PCC) without the assistance of an agency can be a tough process. However, with Trueway, you can trust the experts who will seamlessly handle everything from document submission to obtaining the clearance certificate, allowing you to enjoy peace of mind throughout the entire journey."
        },
        {
            id:2,
            question:"How many days will it take for PCC for Kuwait?",
            Answer:"25 Working Days"
        },
        {
            id:3,
            question:"How long is Kuwait PCC from India valid?",
            Answer:" 3 Months"
        },
        {
            id:4,
            question:"Can PCC be done without a visa?",
            Answer:"Yes. PCC can be applied for at any time if you have all the required documents to submit. But mostly professionals are taking PCC in connection with their visa applications. Any person who has completed 1 or more years of stay in any GCC country is subject to submitting the Police Clearance Certificate from those countries if they want to move on to any other country in dependent visa or in connection with employment."
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

export default FaqKuwaitPcc