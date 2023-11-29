import React, { useState } from 'react'
import FaqAccordion from '../FaqAccordion'

function FaqAcls() {

    const [open, SetOpen] = useState(false)

    const toggle = (index) => {
        if(open === index) {
            return SetOpen(null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            id:1,
            question:"Which is the best ACLS & BLS Exam coaching class in kerala?",
            Answer:" Trueway International offers excellent instruction and inexpensive costs, making it the top ACLS and BLS exam teaching centre in Kerala.",
        },
        {
            id:2,
            question:"What is the cost of BLS ACLS training in Kerala?",
            Answer:" Trueway International offers excellent instruction and affordable costs, making it the top ACLS and BLS exam teaching centre in Kerala",
        },
        {
            id:3,
            question:"How long is BLS and ACLS training?",
            Answer:"Training covers two days for ACLS and one day for BLS.",
        },
        {
            id:4,
            question:"What is the difference between ACLS and BLS?",
            Answer:"While BLS (Basic Life Support) addresses basic life-saving methods like CPR and early defibrillation, ACLS (Advanced Cardiovascular Life Support) provides advanced therapies for cardiac arrest.",
        },
        {
            id:5,
            question:"How do I get my ACLS certificate?",
            Answer:"You must pass the related exam and finish an approved ACLS (Advanced Cardiovascular Life Support) course in order to receive your ACLS certificate. Trueway makes this easy for you to accomplish.",
        },
        {
            id:6,
            question:"Is ACLS a qualification?",
            Answer:"Yes, advanced cardiopulmonary life support, or ACLS, is a qualification that certifies medical practitioners in emergency cardiovascular care and advanced recovery.",
        },
        {
            id:7,
            question:"Do you need both ACLS and BLS?",
            Answer:"Yes, because ACLS and BLS provide distinct degrees of emergency medical care—ACLS being more sophisticated support and BLS being fundamental—both certificates in ACLS and BLS are frequently required.",
        },
        {
            id:8,
            question:"Is ACLS the same as CPR?",
            Answer:"No, advanced cardiopulmonary resuscitation, or ACLS, is not the same as cardiopulmonary resuscitation (CPR). Instead, ACLS is a more advanced and organised set of protocols for managing cardiac issues than CPR.",
        },
        {
            id:9,
            question:"Is ACLS tough?",
            Answer:"With the right guidance and practice, you can pick up ACLS methods with ease. Kerala's top ACLS and BLS coaching is provided by Trueway International.",
        },
        {
            id:10,
            question:"What is the passing score for ACLS?",
            Answer:"It is typically 84% or above.",
        },
        {
            id:11,
            question:" How many questions is ACLS?",
            Answer:"It typically consists of approximately 50 multiple-choice questions.",
        },
        {
            id:12,
            question:"How many questions is BLS?",
            Answer:"It contains a total of 31 questions.",
        },
        {
            id:13,
            question:"What happens if you fail ACLS?",
            Answer:"To get certified, you must retake the course and pass the test.",
        },
        {
            id:14,
            question:"What is an ACLS skills test like?",
            Answer:"Candidates taking the Advanced Cardiovascular Life Support (ACLS) abilities test are usually required to treat cardiac emergencies, carry out several advanced cardiac life support techniques, and oversee the rescue team.",
        },
        {
            id:15,
            question:"Is BLS better than CPR?",
            Answer:"Compared to cardiopulmonary resuscitation (CPR), basic life support (BLS) includes a greater variety of life-saving methods and skills.",
        },
        {
            id:16,
            question:"Is the BLS certificate important?",
            Answer:"Yes, having a Basic Life Support (BLS) certificate guarantees that those working in emergency services and healthcare have the knowledge and abilities necessary to save lives.",
        },
        {
            id:17,
            question:"What is the validity of BLS?",
            Answer:"It typically remains valid for a duration of two years.",
        },
        {
            id:18,
            question:"What will be the duration of ACLS?",
            Answer:"2 Days",
        },
        {
            id:19,
            question:"What will be the duration of BLS?",
            Answer:"1 Day",
        },
        {
            id:20,
            question:"Which authority is conducting the BLS and ACLS Exam?",
            Answer:"American Heart Association",
        },
        {
            id:21,
            question:"Are online classes available for BLS and ACLS? What will be the mode of the exam?",
            Answer:"Yes Online classes are available for BLS. Exams are conducted online.",
        }
    ]

  return (
    <>
        <div className='w-full h-full flex flex-col justify-between bg-white'>
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

export default FaqAcls