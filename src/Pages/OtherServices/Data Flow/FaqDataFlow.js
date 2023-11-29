import React, { useState } from 'react'
import FaqAccordion from '../FaqAccordion'

function FaqDataFlow() {

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
            question: "How many days will it take for DataFlow ?",
            Answer:"The typical duration for verification completion typically falls within the range of 15 to 25 working days from the moment of payment and the submission of a complete set of documents. Nevertheless, there are circumstances in which the verification process may experience delays."
        },
        {
            id:2,
            question:" What is the next step after DataFlow verification ?",
            Answer:"Once the verification process is finished, they will forward the report to HAAD. If the report indicates a positive outcome, you may proceed with your application."
        },
        {
            id:3,
            question:" How do you know if the dataflow is complete ?",
            Answer:"You can check the status of your case by visiting www.dataflowstatus.com. Simply log in using your Dataflow Case number or Reference Number, which you received via email. Additionally, enter your passport number for verification purposes."
        },
        {
            id:4,
            question:" How long is a data flow valid ?",
            Answer:"Dataflow verification is valid for a lifetime."
        },
        {
            id:5,
            question:"Is dataflow mandatory ?",
            Answer:"For working in countries such as Oman, Saudi, Bahrain, Qatar, and the United Arab Emirates, the dataflow report is mandatory."
        },
        {
            id:6,
            question:"How can I check and follow up on the status of my DataFlow application ?",
            Answer:"You can check the status of your case by visiting www.dataflowstatus.com. Simply log in using your Dataflow Case number or Reference Number, which you received via email. Additionally, enter your passport number for verification purposes."
        },
        {
            id:7,
            question:"What is the solution if a candidate's dataflow gets stuck or any one of the documents takes a long time to complete ?",
            Answer:"There are a lot of issues due to which the process of dataflow can be delayed. One thing may be that the hospital is on the blacklist or that the staff who was assigned to the respective file will be on leave, relief, etc. As supporters, what we can do is collect the current status of the candidate and provide the needed support."
        },
        {
            id:8,
            question:" Is it possible to calculate a candidate's experience before registration if he or she is applying for dataflow ?",
            Answer:"There is no issue of whether the exp is before or after the registration. If it is from a valid institution, it can be added to the dataflow."
        },
        {
            id:9,
            question:"Is there any other document that can be submitted as a substitute for the marriage certificate in the dataflow if any issues of name change occur ?",
            Answer:"No, the applicability of all other substitute documents will be less in the dataflow group. So in case of a name change, a married candidate should submit his or her marriage certificate."
        },
        {
            id:10,
            question:"Is it necessary to add the designation 'Staff Nurse' to an experience certificate to get the approval of the Dataflow authority? What about if it is like a clinical nurse or a nurse trainee?",
            Answer:"No. There is no mandatory rule like that. Whatever the designation, the candidate should have at least 2 years of the latest experience when applying for dataflow."
        },
        {
            id:11,
            question:"When a candidate does dataflow, suppose he or she has two-degree certificates (e.g., MBBS and MD). Which certificate has to be submitted for dataflow ?",
            Answer:"In most cases, the latest one will be submitted in the normal package (as the primary one). All other documents can be submitted under the category of extra document verification. The only thing is that the candidate has to make an extra payment for any additional document verification."
        },
        {
            id:12,
            question:" What is the alternative solution if a candidate's name is found to be different in her passport and any of her documents? What can we do in this case?",
            Answer:"Name change is a usual thing among married candidates (in dataflow). If we find such a problem, try to collect the marriage certificate from that candidate and submit it to the dataflow authority."
        },

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

export default FaqDataFlow