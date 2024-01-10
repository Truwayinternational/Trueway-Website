import React, { useState } from 'react'
import FaqAccordion from '../../OtherServices/FaqAccordion'

function FaqNmc() {

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
            question: "How to do UK Nursing verification?",
            Answer:"True Way International is the best consultancy in India for NMC UK third party verification from different  nursing councils, offering a fast and secure process tailored to meet your migration needs."
        },
        {
            id:2,
            question:"What is third-party verification in NMC registration?",
            Answer:"Third-party verification in NMC (Nursing and Midwifery Council) registration refers to the process of having an independent and recognized agency verify the authenticity of a nurse or midwife's educational and professional credentials."
        },
        {
            id:3,
            question:"Who is eligible for NMC UK?",
            Answer:"Only Indian citizens or Indian citizens living abroad are eligible to apply for an eligibility certificate, according to the screening test regulations. According to existing regulations, you are not qualified to file for an eligibility certificate if you are a citizen of any country other than India or Nepal and you are not an OCI."
        },
        ,
        {
            id:4,
            question:"Is a birth certificate mandatory for NMC registration?",
            Answer:"No, a birth certificate is not mandatory for NMC (National Medical Commission) registration; however, alternative proof of date of birth may be required."
        },
        {
            id:5,
            question:"What documents are required for UK NMC verification?",
            Answer:"The specific documents required can vary based on your educational and professional background. Generally, you will need to provide transcripts, certificates, and relevant professional documentation. Trueway International conducts a comprehensive review to ensure all necessary documents meet the strict standards set by the UK NMC."
        },
        {
            id:6,
            question:"Can I communicate directly with the UK NMC without a third-party service?",
            Answer:"Direct communication with the UK NMC is possible, however it can present difficulties due to procedural complications and language barriers. As a mediator, Trueway International helps to ensure that communication is efficient and takes care of any questions on your behalf."
        },
        {
            id:7,
            question:"What happens if there are issues with my documents during verification?",
            Answer:"Trueway International conducts a thorough review of your documents to minimise the risk of errors. In the event of any issues or queries from the UK NMC, our experienced team actively engages in efficient problem resolution, ensuring a smoother and faster verification process."
        },
        {
            id:8,
            question:"Is my information secure during the verification process?",
            Answer:"Yes, Trueway International prioritises the security and confidentiality of your information. Our processes are designed to safeguard your documents, and we adhere to strict privacy standards throughout the verification journey."
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

export default FaqNmc