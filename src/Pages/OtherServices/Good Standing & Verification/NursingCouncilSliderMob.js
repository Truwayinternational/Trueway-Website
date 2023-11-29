import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay} from 'swiper/modules';

import NursingCouncilImage from '../../../Assets/goodstanding/Nursing Council_.webp'

function NursingCouncilSliderMob() {
  return (
    <> 
        <div className='flex md:hidden mx-auto justify-center my-10 px-5'>
          <div className=' mx-10  bg-white border border-gray-300     rounded-3xl w-full shadow-lg'>
              <div className='flex flex-col mx-auto my-5'>
                <img className='mx-auto w-1/2' src={NursingCouncilImage} alt="Nursing council" />
                <h6 className='text-2xl font-HeadingFont font-semibold py-3 mx-auto'>Nursing Council</h6>
              </div>

                <Swiper 
                    className='mb-8 gap-3'
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
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '600': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '820': {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    }
                    }}
                    modules={[ Autoplay]}>

                <SwiperSlide>
                  <div className='grid mx-8  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                    <a href="/kerala-nursing-council">
                      <h6 className='font-HeadingFont text-xl font-semibold text-center '>
                      Kerala <br/> Nursing Council
                      </h6>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='grid mx-8  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                    <a href="/tamilnadu-nursing-council">
                      <h6 className='font-HeadingFont text-xl font-semibold text-center '>
                        Tamil Nadu <br/> Nursing Council
                      </h6>
                    </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='grid mx-8  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                      <a href="/andhrapredesh-nursing-council">
                        <h6 className='font-HeadingFont text-xl font-semibold text-center'>
                        Andhra Pradesh <br/> Nursing Council
                        </h6>
                      </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='grid mx-8  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                      <a href="/karnataka-nursing-council">
                        <h6 className='font-HeadingFont text-xl font-semibold text-center'>
                        Karnataka <br/> Nursing Council
                        </h6>
                      </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='grid mx-8  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                      <a href="/maharashtra-nursing-council">
                        <h6 className='font-HeadingFont text-xl font-semibold text-center'>
                        Maharashtra <br/> Nursing Council
                        </h6>
                      </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='grid mx-8  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                      <a href="/delhi-nursing-council">
                        <h6 className='font-HeadingFont text-xl font-semibold text-center'>
                        Delhi <br/> Nursing Council
                        </h6>
                      </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='grid mx-8  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                      <a href="/telangana-nursing-council">
                        <h6 className='font-HeadingFont text-xl font-semibold text-center'>
                          Telangana <br/> Nursing Council
                        </h6>
                      </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='grid mx-8  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                      <a href="/madhyapradesh-nursing-council">
                        <h6 className='font-HeadingFont text-xl font-semibold text-center'>
                          Madhya Pradesh <br/> Nursing Council
                        </h6>
                      </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='grid mx-8  bg-zinc-100 border border-zinc-400 rounded-3xl hover:bg-green-500 hover:text-white cursor-pointer  py-10'>
                      <a href="/saudiarabia-nursing-council">
                        <h6 className='font-HeadingFont text-xl font-semibold text-center'>
                          Saudi Arabia <br/> Nursing Council
                        </h6>
                      </a>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
        </div>
    </>
  )
}

export default NursingCouncilSliderMob