import React, { useState } from 'react'
import FaqAccordion from '../../../OtherServices/FaqAccordion'

function FaqNewzilandMigration() {

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
            question:"What are the basic requirements for a nurse to be eligible to immigrate to New Zealand?",
            Answer:"You must be a registered nurse with a qualification recognized by the Nursing Council of New Zealand (NCNZ). You need to be proficient in the English language. You need to have a good character record and suitable professional experience."
        },
        {
            id:2,
            question:"Do I have to take any special tests to migrate?",
            Answer:" Yes, you may need to take the IELTS or OET English language test and the CAP (Competence Assessment Programme) for nurses. Trueway International can help you with this procedure. We can assist you in carrying out this process. With proven outcomes, we are the best IELTS or OET coaching center in India."
        },
        {
            id:3,
            question:"How long does the migration procedure usually take?",
            Answer:"The exact schedule may change based on your unique situation and the visa route you select. But it usually takes 12-18 months."
        },
        {
            id:4,
            question:" Do the services offered by Trueway International come with any hidden costs?",
            Answer:"Trueway International is a proponent of transparency. There are no additional fees, and our pricing is transparent. We make sure that all expenses are disclosed up front and offer a thorough explanation of our prices."
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

export default FaqNewzilandMigration