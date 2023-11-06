import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqQatarPcc() {

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
            question: "How can I obtain a Qatar Police Clearance Certificate?",
            Answer:"You must submit the required paperwork, including copies of your passport and Qatar ID, to the Criminal Evidence and Information Department (CEID) of the Qatari Ministry of Interior along with the required fees."
        },
        {
            id:2,
            question:"Can I apply for a Qatar PCC while I am not in Qatar?",
            Answer:"Yes."
        },
        {
            id:3,
            question:"What is the validity of the Qatar PCC?",
            Answer:"A Qatar Police Clearance Certificate (PCC) is normally valid for six months to a year from the date of issuance."
        },
        {
            id:4,
            question:"What if I don't have the listed documents to get Qatar PCC?",
            Answer:"If any of the needed documents are missing, our knowledgeable advisors can help you find them based on predetermined standards. For a thorough examination and specialised help, please get in touch with our staff."
        },
        {
            id:5,
            question:"Can I obtain a Police Clearance if I have stayed on a business visa, Family visit or tourist visa?",
            Answer:"Yes, anyone who has stayed in Qatar on tourist or business visas are able to receive a Qatar Police Clearance. The documentation needs, though, can be different from those for permanent residents. Our trained staff can offer precise advice catered to your circumstances."
        },
        {
            id:6,
            question:"Does the Qatar Police Clearance require my fingerprints?",
            Answer:"While not all clients need a fingerprint report, depending on their unique situation and length of stay in Qatar, some people can be asked to submit their fingerprints. Our experts will assess your circumstance and offer advice in accordance therewith, assuring adherence to the essential requirements."
        },
        {
            id:7,
            question:"Can I apply for Qatar Police Clearance on behalf of someone else?",
            Answer:"Yes."
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

export default FaqQatarPcc