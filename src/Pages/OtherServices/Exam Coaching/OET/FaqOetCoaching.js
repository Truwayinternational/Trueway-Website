import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqOetCoaching() {

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
            question: "Which is the best oet coaching centre in kerala ?",
            Answer:"Trueway is a leading coaching centre in India which gives OET and IELTS coaching in Kerala also."
        },
        {
            id:2,
            question:"What are the fees of OET coaching in Kerala?",
            Answer:"It changes and it depends on the coaching center. Generally the rate ranges from 5000Rs to 10,000Rs."
        },
        {
            id:3,
            question:"Which part of OET is tough?",
            Answer:"Reading and writing part is tough. Reading is more difficult."
        },
        {
            id:4,
            question:"Can I study for the OET in one month?",
            Answer:"Definitely, depends on your calibre."
        },
        {
            id:5,
            question:"IS OET easier than IELTS for doctors?",
            Answer:"Yes, OET is easier."
        },
        {
            id:6,
            question:"What is the pass rate for OET?",
            Answer:"It changes depending on the country."
        },
        {
            id:7,
            question:"What is the maximum age limit for the OET exam?",
            Answer:"40-45 is the age limit."
        },
        {
            id:8,
            question:"How is OET different from Other Language Tests?",
            Answer:"OET exam has professional based questions only. All modules will be on the basis of the profession."
        },
        {
            id:9,
            question:"How to prepare for the OET exam?",
            Answer:"Regular practise and workout."
        },
        {
            id:10,
            question:"What is the validity period of OET?",
            Answer:"2 year"
        },
        {
            id:11,
            question:"What is 7.5 IELTS equivalent to in OET?",
            Answer:"B+ band"
        },
        {
            id:12,
            question:"Which country accepts C+ in OET?",
            Answer:"UK, Maldives, Malta"
        },
        {
            id:13,
            question:"What is the OET score for Australia?",
            Answer:"4B"
        },
        {
            id:14,
            question:"Can we convert OET to IELTS?",
            Answer:"No "
        },
        {
            id:15,
            question:"What are the 4 modules of OET?",
            Answer:"Reading, writing, speaking and listening."
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

export default FaqOetCoaching