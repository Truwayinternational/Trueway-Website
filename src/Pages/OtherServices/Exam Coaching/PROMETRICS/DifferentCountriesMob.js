import React from 'react'

// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// added images here
import saudiPrometric from '../../../../Assets/examCoaching/prometric/Mob Saudi Prometric Exam coaching  in kerala.webp'
import qatarPrometric from '../../../../Assets/examCoaching/prometric/Mob Qatar Prometric Exam coaching  in kerala.webp'
import omanPrometric from '../../../../Assets/examCoaching/prometric/Mob oman Prometric Exam coaching in Kerala.webp'
import KuwaitPrometric from '../../../../Assets/examCoaching/prometric/Mob Kuwait Prometric Exam coaching in Kerala-1.webp'
import bahrainPrometric from '../../../../Assets/examCoaching/prometric/Mob Bahrain Prometric Exam coaching  in Kerala.webp'
import DHAprometric from '../../../../Assets/examCoaching/prometric/Mob DHA Prometric Exam coaching  in Kerala.webp'
import MohPrometric from '../../../../Assets/examCoaching/prometric/Mob MOH Prometric Exam Coaching in Kerala.webp'
import HaadPrometric from '../../../../Assets/examCoaching/prometric/Mob HAAD Prometric Exam coaching  in Kerala.webp'

import {BiSolidChevronRightCircle} from 'react-icons/bi'

function DifferentCountriesMob() {
  return (
    <>
        <div className='md:hidden h-full w-full '>
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
                }}}
                modules={[Pagination]}
            >
                {/* saudi card */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center my-5 px-3">
                        <img className="order-first mt-2 block " src={saudiPrometric} alt="saudi prometric" />
                            <div className="text-center py-2 my-3">
                                <BiSolidChevronRightCircle 
                                className='text-green-500 text-xl ml-10'/>
                                <h5 className="text-xl  font-semibold text-green-500 font-HeadingFont ml-5 -mt-6">
                                 Saudi Prometric Exam <br/>coaching in kerala </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                                    The top Prometric coaching facility in Kerala can help you prepare for the Saudi Prometric Exam. A career in Saudi Arabia's healthcare industry can be started by passing this important exam with the assistance of our qualified professors and in-depth study materials.
                                </p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* qatar card */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center my-5 px-3">
                        <img className="order-first mt-2 block " src={qatarPrometric} alt="qatar prometric" />
                            <div className="text-center py-2 my-3">
                                <BiSolidChevronRightCircle 
                                className='text-green-500 text-xl ml-10'/>
                                <h5 className="text-xl font-semibold text-green-500 font-HeadingFont px-5 ml-5 -mt-6">
                                Qatar Prometric Exam <br/>coaching in kerala </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                                You can achieve your dreams with our specialist tutoring for the Qatar Prometric Exam and start working in the Qatar healthcare industry. You will gain the skills and self-assurance needed to perform well on this test from our committed teachers and exam-focused materials.
                                </p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* oman prometric */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center my-5 px-3">
                        <img className="order-first mt-2 block " src={omanPrometric} alt="oman prometric" />
                            <div className="text-center py-2 my-3">
                                <BiSolidChevronRightCircle 
                                className='text-green-500 text-xl ml-10'/>
                                <h5 className="text-xl font-semibold text-green-500 font-HeadingFont px-5 ml-5 -mt-6">
                                Oman Prometric Exam <br/>coaching in kerala </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                                Our Prometric Exam tutoring in Kerala is the best option for people who want to work as healthcare professionals in Oman. Our program is intended to pass the Oman Prometric Exam with a high mark, so you can be confident that you'll be ready for success.
                                </p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* Kuwait prometric */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center my-5 px-3">
                        <img className="order-first mt-2 block " src={KuwaitPrometric} alt="Kuwait prometric" />
                            <div className="text-center py-2 my-3">
                                <BiSolidChevronRightCircle 
                                className='text-green-500 text-xl ml-10'/>
                                <h5 className="text-xl font-semibold text-green-500 font-HeadingFont px-5 ml-5 -mt-6">
                                Kuwait Prometric Exam <br/>coaching in kerala </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                                Start your career in the healthcare sector in Kuwait with our excellent Kuwait Prometric Exam coaching. You'll pass this important test with the help of our professional advice and study guides.
                                </p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* Bahrain prometric */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center my-5 px-3">
                        <img className="order-first mt-2 block " src={bahrainPrometric} alt="Bahrain prometric" />
                            <div className="text-center py-2 my-3">
                                <BiSolidChevronRightCircle 
                                className='text-green-500 text-xl ml-10'/>
                                <h5 className="text-xl font-semibold text-green-500 font-HeadingFont px-5 ml-5 -mt-6">
                                Bahrain Prometric Exam <br/>coaching in kerala </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                                At our coaching centre in Kerala, you may confidently prepare for the Bahrain Prometric Exam. With the help of our power of materials and expert instructors, you will be able to do your best on this test.
                                </p>
                            </div>
                    </div>
                </SwiperSlide>

                 {/* DHA */}
                 <SwiperSlide>
                    <div className="flex flex-col justify-center items-center my-5 px-3">
                        <img className="order-first mt-2 block " src={DHAprometric} alt="DHA prometric" />
                            <div className="text-center py-2 my-3">
                                <BiSolidChevronRightCircle 
                                className='text-green-500 text-xl ml-10'/>
                                <h5 className="text-xl font-semibold text-green-500 font-HeadingFont px-5 ml-5 -mt-6">
                                DHA Prometric Exam <br/>coaching in kerala </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                                With our specialist instruction in Kerala, you may ace the Dubai Health Authority (DHA) Prometric Exam. The material we provide is made to fully prepare you for this significant exam, which will lead to opportunities in Dubai's healthcare industry.
                                </p>
                            </div>
                    </div>
                </SwiperSlide>

                 {/* MOH prometric*/}
                 <SwiperSlide>
                    <div className="flex flex-col justify-center items-center my-5 px-3">
                        <img className="order-first mt-2 block " src={MohPrometric} alt="MOH prometric" />
                            <div className="text-center py-2 my-3">
                                <BiSolidChevronRightCircle 
                                className='text-green-500 text-xl ml-10'/>
                                <h5 className="text-xl font-semibold text-green-500 font-HeadingFont px-5 ml-5 -mt-6">
                                MOH Prometric Exam <br/>coaching in kerala </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                                With the help of our experienced coaching facility in Kerala, begin preparing for the Ministry of Health (MOH) Prometric Exam. Our tutors and study materials are designed to support you in passing this important test and pursuing a fulfilling career in healthcare.
                                </p>
                            </div>
                    </div>
                </SwiperSlide>

                {/* HAAD prometric */}
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center my-5 px-3">
                        <img className="order-first mt-2 block " src={HaadPrometric} alt="HAAD prometric" />
                            <div className="text-center py-2 my-3">
                                <BiSolidChevronRightCircle 
                                className='text-green-500 text-xl ml-10'/>
                                <h5 className="text-xl font-semibold text-green-500 font-HeadingFont px-5 ml-2 -mt-6">
                                HAAD Prometric Exam <br/>coaching in kerala </h5>
                                <p className="text-center font-light text-zinc-500 md:text-md px-8 py-4">
                                Our preparation for the Health Authority of Abu Dhabi (HAAD) Prometric Exam is ideal for individuals who want to work in the healthcare industry in Abu Dhabi. Our all-inclusive coaching package will help you succeed in this important test.
                                </p>
                            </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default DifferentCountriesMob