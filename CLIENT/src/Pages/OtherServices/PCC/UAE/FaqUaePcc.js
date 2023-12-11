import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqUaePcc() {

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
            question: "What languages are Good Conduct Certificates from the UAE issued in?",
            Answer:"Good Conduct Certificates from the UAE are typically issued in both Arabic and English languages."
        },
        {
            id:2,
            question:"Can I get UAE Police Clearance Certificate(PCC) from India?",
            Answer:"Yes, you can apply online through their official portal or at the UAE Embassy or Consulate in India to get a UAE Police Clearance Certificate (PCC)."
        },
        {
            id:3,
            question:"How long is the Indian Police Clearance Certificate(PCC) from UAE valid?",
            Answer:"The validity of an Indian Police Clearance Certificate (PCC) obtained from the United Arab Emirates (UAE) typically depends on the policies of the Indian authorities issuing it, but it is usually valid for six months from the date of issue."
        },
        {
            id:4,
            question:"How can I get PCC in Abu Dhabi without an Emirates ID?",
            Answer:"You can apply through your respective embassy or consulate, and they will walk you through the procedure, to receive a Police Clearance Certificate (PCC) in Abu Dhabi without an Emirates ID."
        },
        {
            id:5,
            question:"How can I apply for PCC from outside India?",
            Answer:"You normally need to get in touch with the Indian embassy or consulate in your home country and adhere to their special application guidelines if you want to apply for a Police Clearance Certificate (PCC) from outside India."
        },
        {
            id:6,
            question:"What time takes to get Dubai, UAE Police Clearance Certificate?",
            Answer:"It might vary, but it normally takes 5 to 15 working days."
        },
        {
            id:7,
            question:"What is the assessed conveyance time for the Good Conduct Certificate in the UAE?",
            Answer:"The assessed conveyance time for the Good Conduct Certificate in the UAE may vary but generally takes around 5 to 7 working days."
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

export default FaqUaePcc