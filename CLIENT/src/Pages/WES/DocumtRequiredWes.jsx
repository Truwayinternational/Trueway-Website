import React from 'react'
import section_img from '../../Assets/HRD Attestation/Document.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DocumtRequiredWes() {
  return (
    <>
        <div className='bg-zinc-100 h-full w-full my-10'>
        <div className='flex flex-col  max-w-[1240px] mx-auto place-content-center '>
            <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0 px-5 mt-10'>
                <h5 className='text-4xl py-5 md:text-5xl font-HeadingFont font-bold text-green-500'> <b className='text-black'> Documents required for <br/></b> WES Verification</h5>
                <div className='max-w-2xl font-HeadingFont'>
                        <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-semibold cursor-pointer'>
                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'>
                                Transcripts from the university or autonomous college should be enclosed in a sealed and signed envelope. WES doesn’t accept transcripts from individual colleges.
                            </li>
                            </div>
                            
                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'>
                                It depends on your university or autonomous college; the procedure for applying for a transcript will differ.
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'> The university or college will attest and give you your degree certificate, every semester mark sheet, consolidation mark sheet, and WES Form.
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'> Requirements will differ depending on the university or autonomous college. Usually they ask for a degree certificate, each semester mark sheet, and a consolidation mark sheet. TC, SSLC, HSC, and Provisional Certificate. (Depending on the requirements, you have to submit, show the original, or copy for attestation.)
                            </li>
                            </div>
                        </ul>
                    </div>
            </div>
            <div className='grid lg:grid-cols-2 max-w-[1240px] '>
                <div className='flex flex-col lg:pl-12 md:px-10 lg:px-0 px-5 mt-5'>
                    <p className='md:text-2xl text-xl  font-HeadingFont font-semibold'> Some of the major documents required for WES verification are listed below: </p>
                    <div className='max-w-2xl my-4 font-HeadingFont'>
                        <ul className='md:text-xl  py-3 text-lg  text-green-500 w-fit font-HeadingFont font-semibold cursor-pointer'>
                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'>
                                Degree certificate
                            </li>
                            </div>
                            
                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'>
                                All semester mark sheet
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'> Passport copy
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'> WES form
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'> WES Reference Number
                            </li>
                            </div>

                            <div className='bg-transparent md:rounded-2xl md:hover:bg-white w-fit p-2 my-1'>
                                <BiSolidChevronRightCircle />
                                <li className='ml-2 md:ml-4 mt-[-40px] mb-[-20px] p-4'> 2 Passport size photo
                            </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className=' py-auto'>
                    <img className='lg:w-[400px] px-14 py-4 mx-auto lg:my-10' src={section_img} alt="section_img" />
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default DocumtRequiredWes