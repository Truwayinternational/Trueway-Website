import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

// images added here
import Doctors from '../../../../Assets/examCoaching/Attendcoaching/doctors.png'
import vets from '../../../../Assets/examCoaching/Attendcoaching/vets.png'
import Radiographers from '../../../../Assets/examCoaching/Attendcoaching/radiographers.png'
import Nurses from '../../../../Assets/examCoaching/Attendcoaching/nurses.png'
import occupational from '../../../../Assets/examCoaching/Attendcoaching/occupational.png'
import optometrists from '../../../../Assets/examCoaching/Attendcoaching/optometrists.png'
import dentists from '../../../../Assets/examCoaching/Attendcoaching/dentists.png'
import dietitians from '../../../../Assets/examCoaching/Attendcoaching/dietitians.png'
import physiotherapists from '../../../../Assets/examCoaching/Attendcoaching/physiotherapists.png'
import pharmacists from '../../../../Assets/examCoaching/Attendcoaching/pharmacists.png'
import podiatrists from '../../../../Assets/examCoaching/Attendcoaching/podiatrists.png'



function WhoandWhyIeltsMob() {
  return (
    <>
        <div className="lg:hidden place-content-center ml-10  my-10 ">
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
                    <div className='grid -ml-2 w-[200px]'>
                        <img className='cursor-pointer ' src={Radiographers} alt="radiograhers" />
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
                    <div className='grid'>
                        <img className='cursor-pointer ' src={vets} alt="vets"/>
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

export default WhoandWhyIeltsMob