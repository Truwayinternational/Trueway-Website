import React, { useState } from 'react'
import FaqAccordion from '../OtherServices/FaqAccordion'


function FaqWes() {

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
            question: "How much does WES Canada cost from India?",
            Answer:" It depends on Universities or colleges."
        },
        {
            id:2,
            question:"Can we do WES from India? ",
            Answer:"Yes, Trueway international can do WES within minimum days."
        },
        {
            id:3,
            question:"Do we need ielts for WES?",
            Answer:"yes."
        },
        {
            id:4,
            question:"Does WES expire?",
            Answer:"No."
        },
        {
            id:5,
            question:"Duration to Complete the WES Verification Process?",
            Answer:"It depends on the universities."
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

export default FaqWes