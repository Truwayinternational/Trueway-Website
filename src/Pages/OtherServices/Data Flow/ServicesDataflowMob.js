import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

import uae from '../../../Assets/dataflow/uae.png'
import ksa from '../../../Assets/dataflow/soudi.png'
import oman from '../../../Assets/dataflow/oman.png'
import bahrain from '../../../Assets/dataflow/bahrain.png'
import qatar from '../../../Assets/dataflow/qatar.png'
import kuwait from '../../../Assets/dataflow/kuwait.png'


function ServicesDataflowMob() {
  return (
    <div className="lg:hidden flex mx-auto px-10  max-w-[1240px]">
            <Swiper 
                className="w-full h-full "
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                '@0.00': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '@0.40': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '@0.60': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                }
                }}
                modules={[ Autoplay]}>

                <SwiperSlide>
                  <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                      <img className='px-3 w-[150px] mx-auto' src={uae} alt="uae_logo" />
                      <a href="/df_moh">
                          <h1 className='font-HeadingFont text-2xl font-bold text-center pb-4 '>
                              MOH
                          </h1>
                      </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                      <img className='px-3 w-[150px] mx-auto' src={ksa} alt="ksa_logo" />
                      <a href="/df_saudiArabia">
                          <h1 className='font-HeadingFont text-2xl font-bold text-center pb-4 '>
                              Saudi
                          </h1>
                      </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={oman} alt="oman_logo" />
                     <a href="/df_oman">
                        <h1 className='font-HeadingFont text-2xl font-bold text-center pb-4 '>
                            Oman
                        </h1>
                     </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={uae} alt="DHA_logo" />
                     <a href="/df_dha">
                        <h1 className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            DHA
                        </h1>
                     </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={kuwait} alt="kuwait_logo" />
                     <a href="/df_kuwait">
                        <h1 className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            Kuwait
                        </h1>
                     </a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={uae} alt="HAAD_logo" />
                     <a href="/df_haad">
                        <h1 className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            HAAD
                        </h1>
                     </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={bahrain} alt="bahrain_logo" />
                     <a href="/df_bahrain">
                        <h1 className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            Bahrain
                        </h1>
                     </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={qatar} alt="qatar_logo" />
                     <a href="/df_qatar">
                        <h1 className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            Qatar
                        </h1>
                     </a>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
  )
}

export default ServicesDataflowMob