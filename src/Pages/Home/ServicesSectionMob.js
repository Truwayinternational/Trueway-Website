import React from 'react'
import { Link } from 'react-router-dom';

// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import services images 

import Certificate from '../../Assets/services/Certificate.png'
import embassy from '../../Assets/services/Embassy.png'
import MEA_MOFA from '../../Assets/services/MOFA-&-MEA.png'
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
                className="w-full h-full"
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                dynamicBullets: true,
                clickable: true,
                }}
                breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.50': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[300px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={Certificate} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="/certificateAttestation">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Certificate Attestation</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">Certificate attestation is the process of verifying the authenticity of a document when a person heads out to another nation </p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[300px]  bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={embassy} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Embassy Attestation</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">Embassy attestation is the process of legalizing official documents in order to be accepted in a foreign country. </p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[380px]  bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={MEA_MOFA} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900"> MEA / MOFA Attestation</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">MEA is the process of getting documents authenticated of a country.The MOFA is the Ministry of Foreign Affairs of the destination country verifies and certifies the authenticity of the documents.</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[300px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={HRD} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">HRD attestation</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">The purpose of HRD attestation is to verify the authenticity of educational documents issued by educational institutions</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[330px]  bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={apostille} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Apostille attestation</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">Apostille attestation verifies public document authenticity for international use, like birth certificates or diplomas, ensuring foreign recognition</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[300px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={Home} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Home attestation</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">It is the attestation of non-educational documents from home countries where the documents are issued</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[300px] md:h-[320px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={DataFlow} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Dataflow verification</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">Data flow verification is a process that ensures the correct and secure data movement within a system or application.</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[300px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={ExamCoaching} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Exam coaching</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">Expert coaching for OET, IELTS, and Prometric exams.</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[300px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={ACLS} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">ACLS/BLS</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">Providing life-saving ACLS and BLS medical training and support as a valuable and responsive service</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[300px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={PCC} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Police clearance certificate</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">PCC is an official document by police, confirming an individual's criminal record status within a jurisdiction.</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[320px] md:h-[350px] bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={Migration} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Migration</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">Migration services guide and support individuals moving abroad, ensuring a smooth immigration process for countries like New Zealand, the UK, Ireland, Australia, and Canada.</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='' >
                        <div className="flex justify-center items-center m-4 p-3 h-[330px] md:h-[350px]  bg-zinc-100 border border-green-500 px-3 rounded-3xl shadow-2xl hover:bg-green-100 cursor-pointer">
                                <img className="order-first w-[200px] h-[200px] p-2 block object-cover " src={verification} alt="Services_image" />
                                <hr />
                            <div className=" h-full py-2">
                                <Link to="#!">
                                    <h5 className="text-lg font-semibold tracking-tight  text-gray-900 md:text-1xl py-1 hover:font-bold hover:text-gray-900">Verification & other services</h5>
                                </Link>
                                <p className=" font-light tracking-tighter text-zinc-500 text-justify md:text-md">Migration services guide and support individuals moving abroad, ensuring a smooth immigration process for countries like New Zealand, the UK, Ireland, Australia, and Canada.</p>
                            </div>
                        </div>
                </div>
                </SwiperSlide>
            </Swiper>
            </div>
    </>
  )
}

export default ServicesSectionMob