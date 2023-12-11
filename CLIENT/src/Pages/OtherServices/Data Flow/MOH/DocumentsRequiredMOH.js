import React from 'react'
import section_img from '../../../../Assets/HRD Attestation/Document.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumentsRequiredMOH() {
  return (
    <>
        <div className='bg-zinc-100 h-full w-full my-10 mb-16'>
        <div className='flex  max-w-[1240px] mx-auto place-content-center '>
            <div className='grid lg:grid-cols-2 max-w-[1280px] py-10 '>
                <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0  px-5 '>
                <h5 className='text-4xl py-4 md:text-5xl font-HeadingFont font-bold text-green-500'> <b className='text-black'> Documents Required For </b> MOH Dataflow Registration</h5>
                    <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-bold cursor-pointer'>
                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Passport Size Photo<span className='font-normal p-3'>(White Background)</span>
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Passport Front and Back Page
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> S.L.C<span className='font-normal p-3'>( Secondary School Certificate)</span>
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Plus Two<span className='font-normal p-3'>   (Higher Secondary)</span>
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Degree / Diploma Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Registration Certificate <span className='font-normal p-3'>(License)</span>
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Last 2 Years Experience Certificate for MOH
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Basic Life Support (BLS) Certificate
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> Good Standing Certificate <p className='font-normal'>(Good Standing certificate is a certificate issued by the Medical Council / Regulatory body from where your previous licence has been issued OR State Nursing Council. Of the last employer It is valid only for six months)
                            </p>
                        </li>
                        </div>

                        <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1 cursor-pointer'>
                            <BiSolidChevronRightCircle />
                            <li className='ml-2 md:ml-4 mt-[-40px]  mb-[-20px]'> The candidate who has an abroad Experience, License and Good standing Certificate from the Consent regulatory body is mandatory.
                        </li>
                        </div>

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