import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

// images added here
import Doctors from '../../../../Assets/examCoaching/Attendcoaching/doctors.webp'
import Nurses from '../../../../Assets/examCoaching/Attendcoaching/nurses.webp'
import occupational from '../../../../Assets/examCoaching/Attendcoaching/occupational.webp'
import optometrists from '../../../../Assets/examCoaching/Attendcoaching/optometrists.webp'
import dentists from '../../../../Assets/examCoaching/Attendcoaching/dentists.webp'
import dietitians from '../../../../Assets/examCoaching/Attendcoaching/dietitians.webp'
import physiotherapists from '../../../../Assets/examCoaching/Attendcoaching/physiotherapists.webp'
import pharmacists from '../../../../Assets/examCoaching/Attendcoaching/pharmacists.webp'
import podiatrists from '../../../../Assets/examCoaching/Attendcoaching/podiatrists.webp'

function WhoAndWhyCardsMob() {
  return (
    <>
        <div className="md:hidden place-content-center ml-10 mr-3  my-10 ">
            <Swiper 
                className="w-full h-full mb-20"
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                '0': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '340': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '480': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                '680': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                }
                }}
                modules={[ Autoplay]}

            >
                <SwiperSlide>
                    <div className='grid'>
                        <img className='cursor-pointer ' src={Doctors} alt="Doctors/Consultants" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid'>
                        <img className='cursor-pointer ' src={Nurses} alt="Nurses" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid'>
                        <img className='cursor-pointer ' src={dietitians} alt="Dietitians" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid'>
                        <img className='cursor-pointer ' src={optometrists} alt="Optometrists" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid'>
                        <img className='cursor-pointer ' src={pharmacists} alt="Pharmacists" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid'>
                    <img className='cursor-pointer ' src={podiatrists} alt="Podiatrists" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid'>
                        <img className='cursor-pointer ' src={occupational} alt="Occupational Therapists" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid'>
                        <img className='cursor-pointer ' src={dentists} alt="Dentists" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid -ml-6 w-[200px]'>
                        <img className='cursor-pointer ' src={physiotherapists} alt="Physiotherapists" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default WhoAndWhyCardsMob