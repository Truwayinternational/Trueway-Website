import React from 'react'

// Import Swiper React components for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Kiran from '../../Assets/AboutUs/Kiran.png'
import Archana from '../../Assets/AboutUs/Archana S S.png'
import veena from '../../Assets/AboutUs/Veena.png'
import karthika from '../../Assets/AboutUs/Karthika.png'
import rineesha from '../../Assets/AboutUs/Rineesha.png'
import Mary from '../../Assets/AboutUs/Mary.png'
import athira from '../../Assets/AboutUs/Athira.png'
import SAJINI from '../../Assets/AboutUs/Sajini.png'
import revatni from '../../Assets/AboutUs/Ravathy.png'
import shimna from '../../Assets/AboutUs/Shimna.png'
import sony from '../../Assets/AboutUs/Sony.png'
import ramya from '../../Assets/AboutUs/Ramya.png'
import febin from '../../Assets/AboutUs/Febin.png'
import Rijil from '../../Assets/AboutUs/Rijil.png'
import karthikeyan from '../../Assets/AboutUs/Karthikeyan.png'
import saheena from '../../Assets/AboutUs/Shaheeena.png'
import jibin  from '../../Assets/AboutUs/Jibin.png'


function OurTeamMobSlider2() {
  return (

    <>
        <div className='flex justify-center md:hidden mt-10 mx-3'>
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
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                dynamicBullets: true,
                clickable: true,
                }}
                breakpoints={{
                320: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                540: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    {/* Kiran G S  */}
                    <div className='flex flex-col justify-center  mx-auto mb-16'>
                        <img className='w-[180px] mx-auto' src={Kiran} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Kiran G S
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Finance Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Archana S S */}
                    <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={Archana} alt="team member "/>
                        <div className='flex flex-col justify-center px-2'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Archana S S
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            General Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Veena V H  */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={veena} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Veena V H
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Senior Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Karthika Krishnan  */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={karthika} alt="team member "/>
                        <div className='flex flex-col justify-center px-2'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Karthika Krishnan
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Branch Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Rineesha R  */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={rineesha} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Rineesha R
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Senior Document Analyst
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Mary Jemy  */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={Mary} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Mary Jemy
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Senior CRM
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Athira C */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={athira} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Athira C
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Document Analyst
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Sajini Jayan */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={SAJINI} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Sajini Jayan
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Document Analyst
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Revathy Krishnan */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={revatni} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Revathy Krishnan
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Document Control Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Shimna Hameed */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={shimna} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Shimna Hameed
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Customer Relation Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Sony Joseph */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={sony} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Sony Joseph
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Customer Relation Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Ramya R */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={ramya} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Ramya R
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Customer Relation Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Febin M P */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={febin} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Febin M P
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Background Verification Officer
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Rijil C */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={Rijil} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Rijil C
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Document Verification Officer
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Karthikeyan */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={karthikeyan} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Karthikeyan
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Document Verification Officer
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Saheena A S */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={saheena} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Saheena A S
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Office Assistant
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Jibin George  */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[180px] mx-auto' src={jibin} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-sm font-bold font-HeadingFont text-green-500 text-center'>
                            Jibin George 
                            </h6>
                            <p className='text-gray-500 text-xs font-poppins text-center'>
                            Office Assistant
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default OurTeamMobSlider2