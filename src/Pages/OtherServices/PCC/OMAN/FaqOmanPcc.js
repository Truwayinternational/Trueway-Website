import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqOmanPcc() {

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
            question: "How can I get PCC from Muscat?",
            Answer:"A Police Clearance Certificate (PCC) from Muscat is normally obtained by applying at the neighbourhood police department, submitting the necessary paperwork, and adhering to their particular application guidelines, or You can contact Trueway International for help."
        },
        {
            id:2,
            question:"What is the processing time for Oman PCC?",
            Answer:"It usually takes around 7 to 14 business days, depending on the specific circumstances and the processing speed chosen."
        },
        {
            id:3,
            question:"How long is Oman PCC valid for?",
            Answer:"A PCC from Oman is normally valid for six months to a year, however this might change according to the policies of the issuing government and the particular needs of the organisation or nation making the request."
        },
        {
            id:4,
            question:"How can I get PCC in Oman without an Emirates ID?",
            Answer:"If you are missing an Emirates ID, our experienced consultants can assist you in obtaining the necessary documentation based on specific criteria for obtaining a Police Clearance Certificate (PCC) in Oman; please contact our team for a detailed analysis and personalised guidance."
        },
        {
            id:5,
            question:"Does Oman have a minimum stay requirement before I can apply for a PCC?",
            Answer:"Before you may submit an application for a Police Clearance Certificate, you must have a valid residence permit and have lived in Oman for at least six months."
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

export default FaqOmanPcc