import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqPrometric() {

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
            question: "Which is the best institute for the Prometric Exam coaching in Kerala ?",
            Answer:"Trueway international is known as the best prometric coaching centre in kerala because of the proven record of success and efficiency of syllabus."
        },
        {
            id:2,
            question:"What are the fees of the Prometric exam in Kerala?",
            Answer:"When you enrol to Trueway International they offer you the best coaching in kerala  at an affordable price."
        },
        {
            id:3,
            question:"What is the passing score for the Prometric exam for nurses?",
            Answer:"Exam division is done differently for nurse specialists. This is the breakdown of it: The passing percentage is 50% for nurse specialists and 45% for nurse technicians."
        },
        {
            id:4,
            question:"How do I study for the Prometric exam?",
            Answer:"To pass the prometric exam, candidates must follow an efficient syllabus created by the past exam questions and all. Trueway international offers you the most excellent syllabus which helps many students to achieve their goal."
        },
        {
            id:5,
            question:"What is the pass percentage for Prometric?",
            Answer:"80% is the pass percentage for prometric"
        },
        {
            id:6,
            question:"How many attempts are allowed in the Prometric exam?",
            Answer:"3 times in a lifetime."
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

export default FaqPrometric