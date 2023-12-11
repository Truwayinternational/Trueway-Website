import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqDHAdataflow() {

    const [open, SetOpen] = useState(false)

    const toggle = (index) => {
        if (open === index) {
            return SetOpen (null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            id:1,
            question: "Which is the best dataflow verification service for Dubai Consultancy in India?",
            Answer:"Trueway International offers top dataflow verification services for Indian Dubai consultancy with excellence and reliability, ensuring seamless document verification."
        },
        {
            id:2,
            question:"Who is eligible for a DHA licence in Dubai?",
            Answer:"To qualify for a DHA License, one must be 18+ years old, hold a high school diploma or equivalent, and possess an MBBS or equivalent medical degree."
        },
        {
            id:3,
            question:"Is the DHA exam difficult?",
            Answer:"The 2023 DHA exam is more challenging than the previous version, but passing is achievable by thoroughly utilising your eDental account resources and achieving a green score on the Mock test."
        },
        {
            id:4,
            question:"What is the duration of validity for a DHA licence?",
            Answer:"A DHA licence is typically valid for one year and requires annual renewal for continued practice in Dubai."
        },
        {
            id:5,
            question:"What is the passing score for DHA?",
            Answer:"DHA exams use a 0-100 scale, and to pass, examinees need 60 points or more. Adequate preparation can lead to a successful outcome."
        },
        {
            id:6,
            question:"Can a doctor work in Dubai without a DHA licence?",
            Answer:"A DHA licence is mandatory for all international healthcare professionals, including physicians, dentists, nurses, allied healthcare, and practitioners in traditional and alternative medicine, to practise in Dubai."
        },
        {
            id:7,
            question:"What is DHA eligibility?",
            Answer:"To obtain a DHA License, you must be at least 18 years old, have a high school diploma, and possess an MBBS or equivalent medical degree."
        },
        {
            id:8,
            question:"Can we convert DHA to HAAD?",
            Answer:"Yes, Conversion of a DHA licence to a HAAD licence in the UAE is possible, but certain conditions apply. You must be employed with a DHA licence, and work for at least 6 months before initiating the conversion process."
        },
        {
            id:9,
            question:"Can I work in Abu Dhabi with DHA eligibility?",
            Answer:"Yes, you can work in Abu Dhabi with DHA eligibility, but you may need to convert it to a HAAD licence."
        },
        {
            id:10,
            question:"Can a candidate take her family along with her, once she completes the dataflow for DHA and finds a job in Dubai?",
            Answer:"Yes, she can bring her family to Dubai. Once she's established in the country, typically on a dependent visa, she can initiate the process of reuniting with her family, including her newborn."
        },
        {
            id:11,
            question:"Is it mandatory to take the DHA Prometric exam before completing the DHA dataflow?",
            Answer:"In DHA, candidates have two options. They can either take the Prometric exam first, followed by the Dataflow and Eligibility steps, or they can complete the Dataflow first, followed by Eligibility and the exam. The key is to complete all processes and secure a job before the DHA Prometric exam expires."
        },
        {
            id:12,
            question:"If a candidate has completed the DHA dataflow, and the validity of the registration certificate verified in the dataflow has expired, do they need to repeat the dataflow process?",
            Answer:"The candidate should renew the registration certificate. Once they have the renewed document, they can add it to the existing data flow under the extra document verification category. There is no need for a second dataflow in this case."
        },
        {
            id:13,
            question:"Is it possible for a candidate to go to Dubai with Saudi dataflow?",
            Answer:"No. It’s not possible. The candidate cannot go to Dubai with Saudi dataflow. The candidate has to convert the dataflow from Saudi to Dubai(DHA)."
        },
        {
            id:14,
            question:"Is it necessary for a candidate to create another Eligibility ID for DHA, if he/she failed in the first attempt of DHA Prometric?",
            Answer:"No, it's not necessary for a candidate to create another Eligibility ID for DHA if they fail their first attempt at the DHA Prometric exam."
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

export default FaqDHAdataflow