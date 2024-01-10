import React, { useState } from 'react'
import FaqAccordion from '../../OtherServices/FaqAccordion'


function FaqNmbiHospital() {

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
            question:"What is NMBI Hospital Verification, and why do I need it?",
            Answer:"The NMBI (Nursing and Midwifery Board of Ireland) Hospital Verification is a mandatory process for nurses planning to migrate to Ireland. It involves validating your professional credentials and ensuring they meet the standards set by the Irish regulatory body."
        },
        {
            id:2,
            question:"How long does the NMBI Hospital Verification process take with TrueWay International?",
            Answer:"We prioritise efficiency and offer fast-track processing. The exact duration can vary, but our goal is to expedite the process, helping you meet your timeline for moving to Ireland."
        },
        {
            id:3,
            question:"What is the cost associated with TrueWay International's NMBI Hospital Verification Services?",
            Answer:"TrueWay International is committed to transparent and affordable pricing. Our fee structure is clear, with no hidden costs. Contact us for a detailed breakdown of costs related to your NMBI Hospital Verification."
        },
        {
            id:4,
            question:"Is there support available if I have questions or need assistance?",
            Answer:"Absolutely! TrueWay International offers 24/7 customer support. Whether you have questions about the process or need assistance with any aspect of your verification, our dedicated support team is ready to help."
        },
        {
            id:5,
            question:"Can TrueWay International assist with additional services related to migration to Ireland?",
            Answer:"While our primary focus is NMBI Hospital Verification, we can provide guidance on related aspects of your migration process. Contact us to discuss your specific needs and how we can assist you further."
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

export default FaqNmbiHospital