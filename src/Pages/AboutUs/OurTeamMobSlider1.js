import React from 'react'

// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import vishnuSir from '../../Assets/AboutUs/Vishnu s kumar.webp'
import Lazitha from '../../Assets/AboutUs/Lezitha M S.webp'
import Vishnu from '../../Assets/AboutUs/Vishnu V S.webp'
import Anusha from '../../Assets/AboutUs/Anusha.webp'

function OurTeamMobSlider1() {
  return (
    <>
        <div className='flex justify-center md:hidden'>
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
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                500: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    {/* vishnu sir  */}
                    <div className='flex flex-col justify-center  mx-auto mb-16'>
                        <img className='w-[200px] mx-auto' src={vishnuSir} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-md font-bold font-HeadingFont text-green-500 text-center'>
                                Vishnu S Kumar
                            </h6>
                            <p className='text-gray-500 text-sm font-poppins text-center'>
                                Managing Director
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* lazitha  */}
                    <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[200px] mx-auto' src={Lazitha} alt="team member "/>
                        <div className='flex flex-col justify-center px-2'>
                            <h6 className='text-md font-bold font-HeadingFont text-green-500 mx-auto'>
                            Lezitha M S
                            </h6>
                            <p className='text-gray-500 text-sm font-poppins mx-auto'>
                            CEO
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* Vishnu V S  */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[200px] mx-auto' src={Vishnu} alt="team member "/>
                        <div className='flex flex-col justify-center px-2 mx-auto'>
                            <h6 className='text-md font-bold font-HeadingFont text-green-500 text-center'>
                            Vishnu V S
                            </h6>
                            <p className='text-gray-500 text-sm font-poppins text-center'>
                            Managing Partner
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   {/* anusha */}
                   <div className='flex flex-col justify-center  mx-auto'>
                        <img className='w-[200px] mx-auto' src={Anusha} alt="team member "/>
                        <div className='flex flex-col justify-center px-2'>
                            <h6 className='text-md font-bold font-HeadingFont text-green-500 text-center'>
                            Anusha Sarath
                            </h6>
                            <p className='text-gray-500 text-sm font-poppins mx-auto'>
                            HR Manager
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default OurTeamMobSlider1