import React from 'react'
import section_img from '../../../../Assets/HRD Attestation/Document.png'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentsRequiredMOH() {
  return (
    <>
        <div className='bg-zinc-200 h-full w-full my-10 mb-16'>
        <div className='flex  max-w-[1240px] mx-auto place-content-center '>
            <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5 '>
                <h1 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500'> <b className='text-black'> Documents Required For </b> MOH Dataflow Registration</h1>
                    <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-bold cursor-pointer'>
                        <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Passport Size Photo<span className='font-normal'>(White Background)</span>
                        </li>
                        <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Passport Front and Back Page
                        </li>
                        <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> S.L.C<span className='font-normal'>( Secondary School Certificate)</span>
                        </li>
                        <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Plus Two<span className='font-normal'>   (Higher Secondary)</span>
                        </li>
                        <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Degree / Diploma Certificate
                        </li>
                        <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Registration Certificate <span className='font-normal'>(License)</span>
                        </li>
                        <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Last 2 Years Experience Certificate for MOH
                        </li>
                        <li className='bg-transparent md:rounded-full rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Basic Life Support (BLS) Certificate
                        </li>
                        <li className='bg-transparent rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> Good Standing Certificate <span className='font-normal'>(Good Standing certificate is a certificate issued by the Medical Council / Regulatory body from where your previous licence has been issued OR State Nursing Council. Of the last employer It is valid only for six months)
                            </span>
                        </li>
                        <li className='bg-transparent rounded-3xl hover:bg-white py-2 w-fit'>
                            <BiSolidChevronRightCircle className='inline-flex md:mx-2'/> The candidate who has an abroad Experience, License and Good standing Certificate from the Consent regulatory body is mandatory.
                        </li>
                    </ul>
                </div>
                <div className=' my-auto'>
                    <img className='lg:w-[400px] px-14 py-4 mx-auto' src={section_img} alt="section_img" />
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default DocumentsRequiredMOH