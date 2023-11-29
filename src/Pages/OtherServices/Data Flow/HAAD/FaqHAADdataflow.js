import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'

function FaqHAADdataflow() {

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
            question: "Which is the best dataflow verification service for Abu Dhabi consultancy in India?",
            Answer:"Trueway International is known as the best dataflow verification service for Abu Dhabi consultancy in India because of their fast, secure and affordable service."
        },
        // answers not found so some FAQ delete from here 
        {
            id:5,
            question:"What is the difference between HAAD and DHA?",
            Answer:"HAAD License (Health Authority of Abu Dhabi)  permits facilities to provide professional healthcare in Abu Dhabi. Whereas the DHA license for medical facilities, issued by the HRD (Health Regulation Department) in Dubai, allows holding companies to set up healthcare facilities in Dubai."
        },
        {
            id:6,
            question:"How can I do dataflow in Abu Dhabi?",
            Answer:"To do the dataflow in Abu Dhabi, candidates needed to submit all the required documents to the agency. They will process it for verification from different authorities and get the final stamped document delivered to you."
        },
        {
            id:7,
            question:"What is the passing score for the HAAD exam?",
            Answer:"The passing score for the HAAD examination is usually around 60-65%."
        },
        // answers not found so some FAQ delete from here 
        {
            id:10,
            question:"s it possible for a candidate to do HAAD dataflow again when she has a report of discrepancy with her?",
            Answer:"Lots of complications will be there. If the candidate tries again after changing passport details, there is a small chance. However as the negative records of the candidate remain with the authority of dataflow, the chances of rejection are greater."
        },
        {
            id:11,
            question:"Is it possible for a candidate to do HAAD dataflow, when he/she is having exp from 2017 to 2020? Is still working needed?",
            Answer:"For HAAD and DHA, If the gap is up to 2 years, then it is not an issue. But if a candidate crosses more than 2 years of gap, then they should submit a still working certificate or the certificate of the current year which shows the latest resignation."
        },
        {
            id:12,
            question:"Is it possible for a candidate to pursue the HAAD Dataflow process with Saudi experience?",
            Answer:"Yes, If the candidate has a valid Saudi licence along with the experience he/she is able to do HAAD dataflow with that experience."
        },
        // some faq delete from here
        {
            id:15,
            question:"Is it possible for a candidate to do HAAD dataflow again when she has a report of discrepancy with her?",
            Answer:"Lots of complications will be there. If the candidate tries again after changing passport details, there is a small chance. However as the negative records of the candidate remain with the authority of dataflow, the chances of rejection are greater."
        },
        {
            id:16,
            question:" Is it possible for a candidate to do HAAD dataflow, when he/she is having exp from 2017 to 2020? Is still working needed?",
            Answer:" For HAAD and DHA , If the gap is up to 2 years, then it is not an issue. But if a candidate crosses more than 2 years of gap, then they should still submit a working certificate or the certificate of the current year which shows the latest resignation."
        },
        {
            id:17,
            question:"Is it possible for a candidate to pursue the HAAD Dataflow process with Saudi experience?",
            Answer:"Yes, If the candidate has a valid Saudi licence along with the experience he/she is able to do HAAD dataflow with that experience."
        },
        {
            id:18,
            question:"Is it possible for a candidate to pursue the HAAD Dataflow process with Saudi experience?",
            Answer:"Yes, If the candidate has a valid Saudi licence along with the experience he/she is able to do HAAD dataflow with that experience.Yes, If the candidate has a valid Saudi licence along with the experience he/she is able to do HAAD dataflow with that experience."
        },
        
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

export default FaqHAADdataflow