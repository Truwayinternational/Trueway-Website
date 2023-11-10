import React from 'react'


// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import services images 

import Certificate from '../../Assets/services/Certificate.png'
import embassy from '../../Assets/services/Embassy.png'
import MEA from '../../Assets/services/MEA-Attestation.png'
import MOFA from '../../Assets/services/MOFA-Attestation.png'
import HRD from '../../Assets/services/HRD-Attestation.png'
import apostille from '../../Assets/services/Apostille.png'
import Home from '../../Assets/services/Home-attestation.png'
import DataFlow from '../../Assets/services/Data-Flow.png'
import ExamCoaching from '../../Assets/services/Exam-Coaching.png'
import ACLS from '../../Assets/services/ACLS.png'
import PCC from '../../Assets/services/Police-Clearance.png'
import Migration from '../../Assets/services/Migration_1.png'
import verification from '../../Assets/services/Verification.png'


function ServicesSectionMob() {
  return (
    <>
        <div className='lg:hidden h-full w-full mb-20'>
            <Swiper
            style={{
                "--swiper-pagination-color": "#43b54b",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": ".3",
                "--swiper-pagination-bullet-size": "3px",
                "--swiper-pagination-bullet-margin-top": "20px",
                "--swiper-pagination-bullet-width": "1px",
                "--swiper-pagination-bullet-horizontal-gap": "3px"
              }}
                className="w-full h-full mb-20"
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                dynamicBullets: true,
                clickable: true,
                }}
                breakpoints={{
                '340': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '750': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '820': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
                }}
                modules={[Pagination]}
            >
                <SwiperSlide className='mb-20'>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={Certificate} alt="Services_image" />
                                <hr />
                            <div className=" h-full">
                                <a href="/certificateAttestation">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Certificate Attestation</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md text-[15px]">Certificate attestation is the process of verifying the authenticity of a document when a person heads out to another nation </p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px]  bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={embassy} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <a href="/embassyAttestation">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Embassy Attestation</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md text-[15px]">Embassy attestation is the process of legalizing official documents in order to be accepted in a foreign country. </p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px]  bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px]  py-2 block object-cover" src={MEA} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <a href="/meaAttestation">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl hover:font-bold hover:text-gray-900"> MEA Attestation</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md text-[15px]">MEA attestation refers to the process of getting documents authenticated by the Ministry of External Affairs (MEA) of a country.</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px]  bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px]  py-2 block object-cover" src={MOFA} alt="Services_image" />
                                <hr />
                            <div className=" h-full ">
                                <a href="/mofaAttestation">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl hover:font-bold hover:text-gray-900"> MOFA Attestation</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md text-[15px]">It is the final step in this process, where the Ministry of Foreign Affairs of the destination country verifies and certifies the authenticity of the documents.</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={HRD} alt="Services_image" />
                                <hr />
                            <div className=" h-full ">
                                <a href="/hrdAttestation">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">HRD attestation</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md text-[15px]">The purpose of HRD attestation is to verify the authenticity of educational documents issued by educational institutions</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px]  bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={apostille} alt="Services_image" />
                                <hr />
                            <div className=" h-full ">
                                <a href="/apostilleAttestation">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900  hover:font-bold hover:text-gray-900">Apostille attestation</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md text-[15px]">It verifies public document authenticity for international use, like birth certificates or diplomas, ensuring foreign recognition</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={Home} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <a href="/homeAttestation">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Home attestation</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md">It is the attestation of non-educational documents from home countries where the documents are issued</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={DataFlow} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <a href="/dataflow">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Dataflow verification</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md text-[15px]">Data flow verification is a process that ensures the correct and secure data movement within a system or application.</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={ExamCoaching} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <a href="/examCoaching">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Exam coaching</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md">Expert coaching for OET, IELTS, and Prometric exams.</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={ACLS} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <a href="/acls_bls">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">ACLS/BLS</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md">Providing life-saving ACLS and BLS medical training and support as a valuable and responsive service</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-3 h-[250px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={PCC} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <a href="/pcc">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Police clearance certificate</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md">PCC is an official document by police, confirming an individual's criminal record status within a jurisdiction.</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-2 h-[250px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={Migration} alt="Services_image" />
                                <hr />
                            <div className=" h-full">
                                <a href="/migration">
                                    <h5 className="text-lg font-semibold tracking-tight font-HeadingFont  text-gray-900 hover:font-bold hover:text-gray-900">Migration</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md text-[15px]">It's guide and support individuals moving abroad, ensuring a smooth immigration process for countries like New Zealand, the UK, Ireland, Australia, and Canada.</p>
                            </div>
                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex justify-center items-center m-4 p-2 h-[250px]  bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[150px] p-2 block object-cover " src={verification} alt="Services_image" />
                                <hr />
                            <div className=" h-full">
                                <a href="/Council_verification">
                                    <h5 className="text-md font-semibold tracking-tight font-HeadingFont  text-gray-900  hover:font-bold hover:text-gray-900"> Goodstanding & Council Verification</h5>
                                </a>
                                <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-md text-[15px]">Validation & additional offerings for authentication and assistance, including immigration, documentation, and consultation services.</p>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
            </div>
    </>
  )
}

export default ServicesSectionMob