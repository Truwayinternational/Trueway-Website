import React from 'react'


import heroImg from '../../Assets/heroImg.png'

function Hero() {
  return (
    <div className='w-full h-full bg-zinc-100 flex flex-col justify-between'>
        <div className="grid lg:grid-cols-2 max-w-[1240px] m-auto">
            <div className='flex flex-col justify-center md:items-start w-full px-5 py-4 lg:pl-16'>
                <h2 className='pt-12 pb-8 px-3 text-3xl md:text-5xl lg:text-4xl tracking-wider md:leading-snug text-center lg:text-start font-[Philosopher] md:px-[100px] lg:px-4'>
                The Prime partner for<b className='text-green-500 lg:text-black text-'> Certificate Attestation, Authentication,<br /> Verification services </b> in India
                </h2>
                <div className='md:flex  items-center lg:hidden'>
                  <img className='w-full md:px-12 lg:p-5 lg:pt-48' src={heroImg} alt="MainImage..." />
                </div>
                <p className='font-poppins text-1xl text-justify px-3 text-gray-500'>
                <strong className='text-black'>Trueway International</strong> is the best Dataflow verification, WES & other college verification, Good standing verification, Admission Guidance and certificate attestation consultancy in  India. We will help you in the journey of these processes with our fast, easy, secure and  trustworthy services.<br />
                We provide various services in addition to attestation and Apostle offerings, such as document translation, Educational consultancy, Registration renewals etc... We are a one-stop shop for all of your document attestation requirements.
                <br/>
                Our team of expert professionals excels in the attestation of documents and is dedicated to providing clients with personalized attention and support throughout the process with proven track records for the past 15 years. We are dedicated to doing <b> 24*7 </b> market analysis and exploration of the education support and career landscape to empower our system by providing trustable and coherent solutions at affordable rates. 
                <br/>
                We offer a hassle-free and efficient method for document attestation, valuing your time and money. With access to cutting-edge resources and equipment, we ensure the highest level of service. If you want to know more about us reach us at <a href="mailto:tvm@truewayinternational.com" className='font-bold text-black'>tvm@truewayinternational.com</a>
                </p>
                <button className='mx-4 my-6 py-3 sm:w-[25%]  border-2 bg-green-500 hover:bg-green-700 text-white rounded-lg'> Read More </button>
            </div>
            <div className='hidden lg:block'>
                <img className='w-full lg:p-5 lg:pt-48' src={heroImg} alt="MainImage..." />
            </div>
        </div>
    </div>
  )
}

export default Hero