import React, { useState } from 'react'
import FaqAccordion from '../FaqAccordion'

function FaqApostille() {

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
            question:"How can I get Apostille attestation in India?",
            Answer:"For apostille attestation, you might contact a reputed agency in India. Trueway International is one of the leading apostille attestation service providers in India.",
        },
        {
            id:2,
            question:"Which countries require an apostille of documents?",
            Answer:"The countries listed below recognize and issue Apostilles for international legalisation of documents. These are referred to collectively as member countries of the Hague Apostille Convention':-  Albania, Andorra, Antigua and Barbuda, Argentina, Armenia, Australia, Austria, Azerbaijan, Bahamas, Barbados, Belarus, Belgium, Belize, Bosnia Iceland, Colombia, Lithuania, Fiji, Japan, Greece, Luxembourg, South Africa, Malawi, Denmark, Latvia, France, Sweden, Estonia, United Kingdom, Ireland, Italy, Turkey, Romania, Kazakhstan, San Marino, Germany, Switzerland, El Salvador, Saint Kitts and Nevis, Suriname, Hungary, Cook Islands, Niue, Russia, Liechtenstein, United States of America, Panama, Croatia, Moldova, Republic of, Dominica, Seychelles, Georgia, China (Macau & Hong Kong), Czech Republic, New Zealand, Swaziland, Bulgaria, India, Tonga, Mexico, Serbia and Montenegro, Marshall Islands, Israel, Venezuela, Saint Vincent and the Grenadines, Saint Lucia, Namibia, Samoa, Brunei Darussalam, Botswana, Portugal, Cyprus, Macedonia, FYR of, Ukraine, Spain, Grenada, Austria, Finland, Belgium, Netherlands, Trinidad and Tobago, Luxembourg, and Mauritius.",
        },
        {
            id:3,
            question:"Is Apostille the same as attestation?",
            Answer:"No, they are different ",
        },
        {
            id:4,
            question:"Which agencies for Apostille in India?",
            Answer:"Trueway International is one of the leading apostille attestation service providers in India.",
        },
        {
            id:5,
            question:"How much does Apostille cost in India?",
            Answer:"The cost of acquiring an Apostille in India might vary based on a number of factors. Trueway International is best known for its low-cost attestation services in India.",
        },
        {
            id:6,
            question:"Can Apostille be done online in India?",
            Answer:"No, Apostille services in India have traditionally required actual submission of papers to the necessary authorities or their designated centres.",
        },
        {
            id:7,
            question:"How many days does it take to Apostille documents in India?",
            Answer:"Apostille attestation usually takes 10 business days.",
        },
        {
            id:8,
            question:"Is an apostille the same as a notary in India?",
            Answer:"No, an apostille is not the same as a notary in India.",
        },
        {
            id:9,
            question:"Is the apostille done on copy or original?",
            Answer:"Apostilles are normally provided for original documents, not copies.",
        },
        {
            id:10,
            question:"Is there validity in the apostille?",
            Answer:"No",
        },
        {
            id:11,
            question:" Is Apostille necessary for a visa?",
            Answer:"Yes",
        },
        {
            id:12,
            question:"Is the apostille mandatory for the USA?",
            Answer:"No",
        },
        {
            id:13,
            question:"What are the benefits of Apostille?",
            Answer:"Apostille reduces complexity and ensures legal validity in 118 Hague Convention member nations by simplifying international document recognition.",
        },
        {
            id:14,
            question:"What to do after the apostille?",
            Answer:"After the apostille, the validated document can be used internationally without further legality in Hague Convention countries.",
        },
        {
            id:15,
            question:"Is Apostille to be translated?",
            Answer:"No",
        },
        {
            id:16,
            question:"Can the embassy issue an Apostille?",
            Answer:"No",
        },
        {
            id:17,
            question:"Where can I get apostille services?",
            Answer:"You can obtain apostille attestation from any respectable agency. Trueway International is one of the best apostille providers in India, offering high-quality services and exceptional customer care.",
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

export default FaqApostille