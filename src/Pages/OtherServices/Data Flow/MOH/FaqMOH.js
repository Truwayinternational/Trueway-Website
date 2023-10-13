import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqMOH() {

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
            question: "What is data flow for MOH ?",
            Answer:"MOH Dataflow is the process through which the MOH validates credentialing information from the institution that initially conferred or issued the credential (e.g., the authenticity of educational degrees). This is done through MOH's partnership with Dataflow group."
        },
        {
            id:2,
            question:" What is the validity of MOH exam ?",
            Answer:"The validity will last for 5 years."
        },
        {
            id:3,
            question:" What is the passing score for MOH exam ?",
            Answer:"Normally the candidate should cross 65-70 marks to crack the exam."
        },
        {
            id:4,
            question:" What is the difference between MOH and DHA exam?",
            Answer:"Main difference between MOH and DHA is that in MOH candidate can appear for exam for all other procedures but in DHA it can do simultaneously with other processes. And also credential is the first process in MOH and in DHA dataflow is the initial."
        },
        {
            id:5,
            question:"Can we give MOH exam in India ?",
            Answer:"Yes."
        },
        {
            id:6,
            question:"The candidate who passed out Diploma in Pharmacy in the year 2008. Now the candidate is having 34 years. Is there any age limit for doing dataflow of MOHAP ?",
            Answer:"Not only for MOHAP but also for all other countries there is no age limit until 60. If the candidate exceeds 60 years, then he/she should submit the Medical report to the dataflow authority to indicate that the person is medically fit."
        },
        {
            id:7,
            question:"How does a candidate find his/her Data Flow reference number ?",
            Answer:"It is shared in the auto-confirmation email sent to your registered email address and on the payment receipt issued by Data Flow Group Customer Service Executives for cash payment applications. You may also view your Client Reference Number in your online application form and PSV report."
        },
        {
            id:8,
            question:"How does a candidate start MOH dataflow ?",
            Answer:"After completing the license application on the MOH website, your form will be sent to the Dataflow Group for PSV. The Dataflow Group team will then send you an email comprising a link to settle the payment, in addition to instructions for applying."
        },
        {
            id:9,
            question:"How does a candidate get Dataflow report from MOH ?",
            Answer:"Log in with your Dataflow Case Reference Number which was previously sent to your registered email address, and enter your passport number. You will see the status of your case and its associated components, and will be able to download a copy of the finished report if your licensing authority allows this."
        }
    ]


  return (
    <div>
        <div className='w-full h-full flex flex-col justify-between bg-white'>
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
    </div>
  )
}

export default FaqMOH