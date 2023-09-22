import React, { useState } from 'react'
import FaqAccordion from '../FaqAccordion'


function FaqHRD() {

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
            question:"Which is the best agency for HRD attestation services in India ?",
            Answer:"Trueway International is a well-established company that offers various document attestation services, including HRD attestation, for various countries.",
        },
        {
            id:2,
            question:"Is HRD attestation mandatory ?",
            Answer:"HRD attestation is often mandatory for educational document verification when seeking employment or pursuing higher education abroad.",
        },
        {
            id:3,
            question:"What is the validity of HRD attestation ?",
            Answer:"HRD attestation validity varies; it is generally recognized for 6 months. Confirm with authorities and country-specific regulations for accurate information.",
        },
        {
            id:4,
            question:"How much time does HRD attestation take ?",
            Answer:"The time required for HRD attestation varies but generally takes 1-2 weeks. It depends on factors like document type, state regulations, and agency processing speed.",
        },
        {
            id:5,
            question:"Which countries need HRD attestation ?",
            Answer:"Several countries, including the UAE, Qatar, Saudi Arabia, and more, require HRD attestation for educational and professional documents as part of their immigration or employment processes.",
        },
        {
            id:6,
            question:"How much does HRD attestation cost in India ?",
            Answer:"The cost of HRD attestation in India varies depending on factors like the state and type of document. It generally ranges from ₹500 to ₹2000.",
        },
        {
            id:7,
            question:"Can HRD attestation be done online ?",
            Answer:"Yes, HRD attestation can often be done online through official portals or authorised agencies, simplifying the process of verifying educational documents for international use.",
        },
        {
            id:8,
            question:"What is an alternative for HRD attestation ?",
            Answer:"Apostille is an alternative to HRD attestation, internationally recognized for validating educational documents' authenticity, often required for international use.",
        },
        {
            id:9,
            question:"What is the difference between HRD attestation and embassy attestation ?",
            Answer:"HRD attestation involves verification by the Human Resource Department of a country, validating educational documents. Embassy attestation is a certification by a foreign country's embassy for document validity.",
        },
        {
            id:10,
            question:"Do I need HRD attestation ?",
            Answer:"HRD attestation validates educational documents for international use. Often required for employment or further studies abroad. Check specific country requirements.",
        },
        {
            id:11,
            question:"What are HRD Attestation Fees?",
            Answer:"HRD attestation fees vary depending on the document type, country, and agency. Typically, fees range from Rs. 500 to Rs. 2000 or more in India.",
        },
        {
            id:12,
            question:"Is HRD Attestation required in the UAE?",
            Answer:"Yes, HRD attestation is required in the UAE. It's a crucial step to validate educational documents when seeking employment or pursuing higher education in the UAE.",
        },
        {
            id:13,
            question:"Is HRD Attestation required in Kuwait?",
            Answer:"Yes, HRD attestation is required for educational documents intending to be used in Kuwait for employment, education, or related purposes.",
        },
        {
            id:14,
            question:"Is HRD Attestation required in Oman?",
            Answer:"Yes, HRD attestation is required for Oman. It validates educational documents for employment and further studies in Oman.",
        },
        {
            id:15,
            question:"How can I check my HRD Attestation Status in India?",
            Answer:"To check HRD attestation status in India, visit the concerned state's HRD website, enter application details, and track the progress online.",
        }
    ]


  return (
    <>
        <div className='w-full h-full flex flex-col justify-between bg-white'>
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

export default FaqHRD