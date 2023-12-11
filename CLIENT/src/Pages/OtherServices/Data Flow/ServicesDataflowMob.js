import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

import uae from '../../../Assets/dataflow/uae.webp'
import ksa from '../../../Assets/dataflow/soudi.webp'
import oman from '../../../Assets/dataflow/oman.webp'
import bahrain from '../../../Assets/dataflow/bahrain.webp'
import qatar from '../../../Assets/dataflow/qatar.webp'
import kuwait from '../../../Assets/dataflow/kuwait.webp'


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
                '250': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '320': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '480': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                '1020': {
                  slidesPerView: 3,
                  spaceBetween: 10,
                }
                }}
                modules={[ Autoplay]}>

                <SwiperSlide>
                  <div className='flex flex-col w-full  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                      <img className='px-3 w-[150px] mx-auto' src={uae} alt="uae_logo" />
                      <a href="/dataflow-moh">
                          <p className='font-HeadingFont text-2xl font-bold text-center pb-4 '>
                              MOH
                          </p>
                      </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                      <img className='px-3 w-[150px] mx-auto' src={ksa} alt="ksa_logo" />
                      <a href="/dataflow-saudiArabia">
                          <p className='font-HeadingFont text-2xl font-bold text-center pb-4 '>
                              Saudi
                          </p>
                      </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={oman} alt="oman_logo" />
                     <a href="/dataflow-oman">
                        <p className='font-HeadingFont text-2xl font-bold text-center pb-4 '>
                            Oman
                        </p>
                     </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={uae} alt="DHA_logo" />
                     <a href="/dataflow-dha">
                        <p className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            DHA
                        </p>
                     </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={kuwait} alt="kuwait_logo" />
                     <a href="/dataflow-kuwait">
                        <p className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            Kuwait
                        </p>
                     </a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={uae} alt="HAAD_logo" />
                     <a href="/dataflow-haad">
                        <p className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            HAAD
                        </p>
                     </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={bahrain} alt="bahrain_logo" />
                     <a href="/dataflow-bahrain">
                        <p className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            Bahrain
                        </p>
                     </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='flex flex-col  bg-white border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer p-4'>
                    <img className='px-3 w-[150px] mx-auto' src={qatar} alt="qatar_logo" />
                     <a href="/dataflow-qatar">
                        <p className='font-HeadingFont text-2xl font-bold text-center pb-4'>
                            Qatar
                        </p>
                     </a>
                  </div>
                </SwiperSlide>
            </Swiper>
      </div>
  )
}

export default ServicesDataflowMob