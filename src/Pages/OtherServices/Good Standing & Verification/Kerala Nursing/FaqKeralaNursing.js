import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'


function FaqKeralaNursing() {

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
            question: "How many days will it take for a good standing certificate from the kerala nursing council?",
            Answer:"25 working days."
        },
        {
            id:2,
            question:"What is the purpose of a good standing certificate for nurses?",
            Answer:"Nurses who want to migrate for job purposes need a good standing certificate."
        },
        {
            id:3,
            question:"What is the validity period of Kerala Good Standing?",
            Answer:"The validity of a Good Standing certificate is 6 months."
        },
        {
            id:4,
            question:"How can a candidate apply for Good Standing from the kerala nursing council through Trueway International?",
            Answer:"Send the listed documents needed for a Good standing certificate either in our official whatsapp number or Mail id. Once we receive the documents, the team will submit it for the process. After 25 Working days, the candidate will receive the scanned copy of certificate in their registered e-mail id and the original hardcopy will directly go to the good standing address( e.g.: HAAD, DHA, NMBI etc)."
        },
        {
            id:5,
            question:"What is the Solution if a candidate applied for Kerala Good Standing self and not yet received any updates from the Council regarding the status? As an agency do we have any role in such a case?",
            Answer:"Yes, if the candidate provides the details regarding his / her payment towards the council and the reference details and all, we can do further. Thus in that case, we can receive the half payment also from the customer."
        },
        {
            id:6,
            question:"Is there any role for an agency to interfere among a candidate and Kerala Nursing council, if the candidate is not getting any response from the council even after paying the amount and initiating the Kerala registration renewal process himself?",
            Answer:"If we are getting the details regarding documents , payment etc from the candidate, then we can accept the request from the candidate and work as a mediator among the candidate and the council."
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

export default FaqKeralaNursing