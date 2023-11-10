import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqIELTS() {

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
            question: "Which is the No. 1 IELTS coaching in Kerala?",
            Answer:"Trueway International is the best for IELTS coaching, with a track record of obtaining the top band score in all of Kerala."
        },
        {
            id:2,
            question:"Is IELTS too expensive?",
            Answer:"Usually, it is expensive, But we provide IELTS coaching at an affordable price."
        },
        {
            id:3,
            question:"How many years is the IELTS valid?",
            Answer:"IELTS scores are considered valid for two years from the date of the test."
        },
        {
            id:4,
            question:"How can I clear my first IELTS attempt?",
            Answer:"You can clear your first IELTS attempt with careful preparation and practice, and for that, Trueway will assist you in securing a decent IELTS score."
        },
        {
            id:5,
            question:"How many attempts are there in IELTS?",
            Answer:"There is no specific limit on the number of times you can take the IELTS exam."
        },
        {
            id:6,
            question:"Are 5.5 bands eligible for Canada?",
            Answer:"Yes, 5.5 band scores are eligible for certain immigration and study programs in Canada."
        },
        {
            id:7,
            question:"How can I get 9 bands in IELTS?",
            Answer:"Achieving a 9-band score is not an easy feat; it requires an expert-level of English proficiency."
        },
        {
            id:8,
            question:"Is IELTS tough for Indian students?",
            Answer:"It depends on your English language proficiency."
        },
        {
            id:9,
            question:"Which subject is difficult in IELTS?",
            Answer:"Each section of the IELTS exam has its own risks and challenges."
        },
        {
            id:10,
            question:"Which part of IELTS is easiest?",
            Answer:"It depends on the candidate’s confidence and language proficiency."
        },
        {
            id:11,
            question:"What is the IELTS syllabus?",
            Answer:"IELTS does not have a specific syllabus."
        },
        {
            id:12,
            question:"Is IELTS online or offline?",
            Answer:"The IELTS exam can be taken both online and offline. You can choose which type of exam you want."
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

export default FaqIELTS