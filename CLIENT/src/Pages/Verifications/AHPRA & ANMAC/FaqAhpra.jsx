import React, { useState } from 'react'
import FaqAccordion from '../../OtherServices/FaqAccordion'

function FaqAhpra() {

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
            question:"What is ANMAC and AHPRA, and why are they important for nurses migrating to Australia?",
            Answer:"ANMAC (Australian Nursing and Midwifery Accreditation Council) assesses the skills and qualifications of internationally trained nurses, while AHPRA (Australian Health Practitioner Regulation Agency) is responsible for the registration and accreditation of healthcare professionals in Australia. Both are crucial for Indian nurses aspiring to practice in Australia as they ensure that your qualifications meet the country's standards."
        },
        {
            id:2,
            question:"How long does the ANMAC verification process take with Trueway International?",
            Answer:"Trueway International understands the urgency of your migration plans. We try to expedite the process by minimising the duration and ensuring a prompt outcome."
        },
        {
            id:3,
            question:"Is my personal information and documentation secure with Trueway International?",
            Answer:"Yes, we prioritize the security and confidentiality of your documents. We employs secure systems and processes to safeguard your sensitive information."
        },
        {
            id:4,
            question:"Are your services affordable for aspiring nurses?",
            Answer:"Absolutely. We believes in transparent pricing so we are offering affordable packages tailored to accommodate the budgets of aspiring Indian nurses."
        },
        {
            id:5,
            question:"How do I get started with Trueway International's ANMAC and AHPRA verification services?",
            Answer:"Contact our expert team for an initial consultation, and we will assess your qualifications, guiding you through the necessary steps to kickstart your migration plans."
        },
        {
            id:6,
            question:"Are there success stories from nurses who have used Trueway International's services?",
            Answer:"Yes, we have a dedicated section featuring success stories and testimonials from nurses who have successfully migrated to Australia with the assistance of Trueway International. Read their experiences to gain insights into our proven track record."
        },
        {
            id:7,
            question:"How can I contact Trueway International for more information or to get started?",
            Answer:"Reach out to us today for personalized assistance. Contact details and a call-to-action can be found on our website. We're here to support you on your journey to becoming a registered nurse in Australia."
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

export default FaqAhpra