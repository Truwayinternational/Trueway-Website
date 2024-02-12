import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'




function FaqQatar() {

    const [open, SetOpen] = useState(false)

    const toggle = (index) => {
        if(open === index) {
            return SetOpen(null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            question:"Which agency is best for Qatar Embassy attestation in India?",
            Answer:"Trueway International is known as the best Qatar Embassy Attestation agency in India because of its fast, secure and affordable service.",
        },
        {
            question:"How many days will it take for Qatar Embassy attestation in India?",
            Answer:"To get  Qatar Embassy attestation in India Only 20 days are required if you are choosing Trueway International.",
        },
        {
            question:"How much does it cost to attest to the Qatar Embassy in India?",
            Answer:"With the service of Trueway International you can process the Qatar embassy attestation at an affordable price.",
        },
        {
            question:"Is attestation mandatory for a Qatar visa? Is HRD attestation compulsory for Qatar Certificate attestation?",
            Answer:"We need certificate attestation for a Qatar visa for a variety of causes like work visas, student visas, residence visas or professional purposes. Also, it is mandatory that HRD be done on all Educational documents submitted to the Qatar Embassy for attestation.",
        },
        {
            question:" How can I attest documents from the Qatar Embassy in India?",
            Answer:"For certificate authentication for the Qatar Embassy, a reliable and experienced attestation agent like Trueway International is needed.",
        }
    ]

  return (
    <>
        <div className='w-full h-full flex flex-col justify-between bg-white'>
            <div className="max-w-[1240px] my-10 m-auto">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4'>
                    <h6 className='text-3xl md:text-4xl lg:text-5xl  tracking-wide font-bold text-center font-HeadingFont py-3'>FAQ</h6>
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

export default FaqQatar