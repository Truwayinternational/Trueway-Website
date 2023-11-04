import React, { useState } from 'react'
import FaqAccordion from '../../FaqAccordion'


function FaqBahrainEmbassy() {

    const [open, SetOpen] = useState(false)

    const toggle = (index) => {
        if(open === index) {
            return SetOpen(null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            question:"Which agency is best for Bahrain Embassy attestation in India?",
            Answer:"Trueway International is a leading agency which has branches all over India. This agency will do embassy attestation in a better way possible.",
        },
        {
            question:"How many days will it take for Bahrain Embassy attestation in India?",
            Answer:"Generally it will take 12 working days.",
        },
        {
            question:"How much does it cost to attest to the Bahrain Embassy in India?",
            Answer:"In trueway international they offer the services at an affordable rate.",
        },
        {
            question:"Is attestation mandatory in Bahrain?",
            Answer:"Definitely yes. Without attestation you can’t fly to bahrain.",
        },
        {
            question:"How can I get certificate attestation in Bahrain?",
            Answer:"Contact the Trueway agency consultant and they will help you with the processes.",
        }
    ]


  return (
    <>
        <div className='w-full h-full flex flex-col justify-between bg-white'>
            <div className="max-w-[1240px] my-10 m-auto">
                <div className='flex flex-col justify-center md:items-center w-full px-2 py-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl  tracking-wide font-bold text-center font-HeadingFont py-3'>FAQ</h2>
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

export default FaqBahrainEmbassy