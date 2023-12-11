import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqMaharashtra() {

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
            question: "How many days will it take for a good standing certificate from Maharashtra nursing council?",
            Answer:"It will take almost 30 working days."
        },
        {
            id:2,
            question:"What is the validity period of Maharastra Good Standing?",
            Answer:"6 months is the validity of Maharashtra Good standing certificate."
        },
        {
            id:3,
            question:"How can a candidate get a Good Standing certificate from Maharashtra Nurses and Midwives council (MNMC)?",
            Answer:"It is good to approach an agency to do these processes without much tension. For that, the Trueway Agency is reliable. Within fewer days and by using the minimum number of documents, the process will be done quickly and securely."
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

export default FaqMaharashtra