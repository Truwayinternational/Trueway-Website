import React from 'react'


import heroImg from '../Assets/heroImg.png'

function Hero() {
  return (
    <div className='w-full h-full bg-zinc-100 flex flex-col justify-between'>
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-4 md:pl-16'>
                <h2 className='pt-12 pb-8 px-4 text-3xl md:text-4xl tracking-wider md:leading-snug '>
                The Prime partner for<b> Certificate Attestation, Authentication,<br /> Verification services </b> in India
                </h2>
                <p className='text-1xl text-justify px-4 text-gray-500'>
                <strong className='text-black'>Trueway International</strong> is the best Dataflow verification, WES & other college verification, Good standing verification, Admission Guidance and certificate attestation consultancy in  India. We will help you in the journey of these processes with our fast, easy, secure and  trustworthy services.<br />
                We provide various services in addition to attestation and Apostle offerings, such as document translation, Educational consultancy, Registration renewals etc... We are a one-stop shop for all of your document attestation requirements.
                <br/>
                Our team of expert professionals excels in the attestation of documents and is dedicated to providing clients with personalized attention and support throughout the process with proven track records for the past 15 years. We are dedicated to doing <b> 24*7 </b> market analysis and exploration of the education support and career landscape to empower our system by providing trustable and coherent solutions at affordable rates. 
                <br/>
                We offer a hassle-free and efficient method for document attestation, valuing your time and money. With access to cutting-edge resources and equipment, we ensure the highest level of service. If you want to know more about us reach us at <a href="mailto:tvm@truewayinternational.com" className='font-bold text-black'>tvm@truewayinternational.com</a>
                </p>
                <button className='mx-4 my-6 py-3 sm:w-[25%]  border-2 bg-green-500 hover:bg-green-700 text-white rounded-lg'> Read More </button>
            </div>
            <div>
                <img className='w-full md:p-5 md:pt-48' src={heroImg} alt="MainImage..." />
            </div>
        </div>
    </div>
  )
}

export default Hero