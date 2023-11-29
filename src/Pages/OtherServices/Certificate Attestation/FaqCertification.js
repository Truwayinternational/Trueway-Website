import React, { useState } from 'react'
import FaqAccordion from '../FaqAccordion'


function FaqCertification() {

    const [open, SetOpen] = useState(false)

    const toggle = (index) => {
        if(open === index) {
            return SetOpen(null)
        }
        SetOpen(index)
    }

    const AccordionData = [
        {
            question:" Which agency is best for certificate attestation in India?",
            Answer:"Trueway International is one of the most popular and best certificate attestation agencies that offer reliable and secure certificate attestation services in India.",
        },
        {
            question:" How can I get a certificate of attestation in India?",
            Answer:"The verification of the certificate must be done from the place where the document was issued, such as a university, board, or institute; the HRD attestation process must be completed by the State HRD Attestation departments; the MEA attestation process must be completed by the Ministry of External Affairs; and the final attestation must be from the relevant embassy.",
        },
        {
            question:"Is attestation required for passport documents?",
            Answer:"Yes, attestation of certain documents is required when applying for a passport, especially in cases where the authenticity of the documents needs to be verified.",
        },
        {
            question:"What is the difference between Apostille and attestation?",
            Answer:"Apostilles are usually required for public records, such as birth certificates, marriage certificates, and educational degrees. Attestation is necessary for commercial documents, such as contracts, invoices, and powers of attorney.",
        },
        {
            question:" How many days will it take for certificate attestation in India?",
            Answer:"The duration for certificate attestation is not fixed and may depend on the situation. However, it usually takes 8-10 working days.",
        },
        {
            question:"Does attestation have validity?",
            Answer:"An attestation is a certification that a document and the signatures within are valid.",
        },
        {
            question:" How long is the notary attestation valid in India?",
            Answer:"The notarization of any document does not expire itself.",
        },
        {
            question:" What is the difference between notarized and attested in India?",
            Answer:"The main difference is a notarization can only be performed by a public notary while an attestation may be done by anyone who can serve as a witness.",
        },
        {
            question:"How much does certificate attestation cost?",
            Answer:"For further enquiries, Just dial 8327626262 and give a missed call. Our team will contact you ASAP or you can put your request email here",
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

export default FaqCertification;