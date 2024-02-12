import React, { useState } from 'react'
import FaqAccordion from '../../../OtherServices/FaqAccordion'

function FaqIrelandMigration() {

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
            question:"Is Ireland currently accepting applications from foreign nurses?",
            Answer:"Yes, Ireland is actively seeking applications from overseas nurses due to a significant shortage in the field. Trueway International can assist you in determining your eligibility and navigating the particular requirements."
        },
        {
            id:2,
            question:"What are the basic qualifications needed to become a registered nurse in Ireland?",
            Answer:"A valid nursing degree, competence in the English language (often by IELTS or OET), and good standing with the nursing regulating authority in your home country are prerequisites. Certain qualifications can be applicable based on your area of expertise."
        },
        {
            id:3,
            question:"How long does the migration process typically take?",
            Answer:"The duration may differ based on specific situations, but on average, the process of registering, obtaining a visa, and looking for work takes six to twelve months. Trueway International can assist you in expediting the procedure and maintaining."
        },
        {
            id:4,
            question:"What type of visa do I need to work as a nurse in Ireland?",
            Answer:"Initially, you will probably require a Work Authorization visa, which can be changed to an Employment Permit after you find employment."
        },
        {
            id:5,
            question:"Do I need any sponsorship to work as a nurse in Ireland?",
            Answer:"Not always. Although some healthcare organisations may sponsor visas, many are willing to hire competent nurses even in the absence of sponsorship. Trueway International can assist you in locating appropriate employment opportunities through its network of affiliated healthcare facilities."
        },
        {
            id:6,
            question:"How do I register as a nurse with the Nursing and Midwifery Board of Ireland (NMBI)?",
            Answer:"Registration for the NMBI might be a difficult process. Complete assistance is offered by Trueway International, which includes help with applications, document preparation, and speaking with the NMBI on your behalf."
        },
        {
            id:7,
            question:"What kind of nursing jobs are available in Ireland?",
            Answer:"The healthcare system in Ireland is diversified, with opportunities available in a range of locations, such as clinics, hospitals, community care, and specialty areas like paediatrics or mental health. Using your experience and preferences as a guide, Trueway International may match you with appropriate work opportunities."
        },
        {
            id:8,
            question:"What are the average salaries for nurses in Ireland?",
            Answer:"Experienced nurses in Ireland receive far higher earnings than the national average, making them among the top paid professionals in Europe. You can get information on the pay ranges for particular nursing positions at Trueway International."
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

export default FaqIrelandMigration