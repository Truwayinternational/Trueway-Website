import React from 'react'

// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import Avatar_3 from '../../../Assets/certificate attestation/avatar_3.webp'

// import card background images
import step1 from '../../../Assets/MOFA : HOME/Group1.webp'
import step2 from '../../../Assets/MOFA : HOME/Group2.webp'
import step3 from '../../../Assets/MOFA : HOME/Group3.webp'
import step4 from '../../../Assets/MOFA : HOME/Group4.webp'


import {BiSolidChevronRightCircle} from 'react-icons/bi'


function ProcedureCard() {
  return (
    <>
        {/*  md screen and lg screen view  */}
        
        <div className='hidden md:flex '>
            <div className='hidden md:flex h-full lg:pl-20 lg:my-auto py-10'>
                <img src={Avatar_3} alt="avatar_3" />
            </div>
            <div className='grid grid-cols-1'>
                <div className=' lg:p-10 md:p-3'>
                <div className='w-full cursor-pointer'>
                    <img className='hover:shadow-2xl border-[1px] border-gray-200 rounded-3xl cursor-pointer ' src={step1} alt="step 1 for procedure" />
                    <h3 className='absolute lg:mt-[-10rem] md:mt-[-9rem]  text-xl font-semibold px-5 text-green-500 '><BiSolidChevronRightCircle className='inline-flex'/> SDM/ HRD </h3>
                    <p className='absolute text-base text-gray-500 lg:max-w-[18rem] md:max-w-[16rem] mt-[-7rem] pr-3 pl-6'>
                    In this stage this department verifies and confirms the authenticity of the documents submitted.
                    </p>
                </div>
                </div>
                <div className=' lg:p-10 md:p-3'>
                <div className='w-full cursor-pointer'>
                    <img className='hover:shadow-2xl border-[1px] border-gray-200 rounded-3xl cursor-pointer ' src={step3} alt="step 2 for procedure" />
                    <h3 className='absolute lg:mt-[-10rem] md:mt-[-9rem]  text-xl font-semibold px-5 md:max-w-[16rem] lg:max-w-xs text-green-500'><BiSolidChevronRightCircle className='inline-flex'/> UAE Embassy Attestation </h3>
                    <p className='absolute text-base text-gray-500 lg:max-w-[18rem] md:max-w-[16rem] lg:mt-[-7rem] md:mt-[-88px] pr-3 pl-6'>
                    The UAE embassy will attest to the documents and prove their genuineness.
                    </p>
                </div>
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <div className=' lg:p-10 md:p-3'>
                    <div className='w-full cursor-pointer'>
                        <img className='hover:shadow-2xl border-[1px] border-gray-200 rounded-3xl cursor-pointer 'src={step2} alt="step 3 for procedure" />
                        <h3 className='absolute lg:mt-[-10rem] md:mt-[-9rem]  text-xl font-semibold px-5 text-green-500 '><BiSolidChevronRightCircle className='inline-flex'/> MEA </h3>
                        <p className='absolute text-base text-gray-500 lg:max-w-[18rem] md:max-w-[16rem] mt-[-7rem] pr-3 pl-6'>
                        Here, MEA also confirms the authenticity of the certificate.
                        </p>
                    </div>
                </div>
                <div className=' lg:p-10 md:p-3'>
                    <div className='w-full cursor-pointer'>
                        <img className='hover:shadow-2xl border-[1px] border-gray-200 rounded-3xl cursor-pointer' src={step4} alt="step 4 for procedure" />
                        <h3 className='absolute lg:mt-[-10rem] md:mt-[-9rem]  text-xl font-semibold px-5 text-green-500 '><BiSolidChevronRightCircle className='inline-flex'/> MOFA </h3>
                        <p className='absolute text-base text-gray-500 lg:max-w-[18rem] md:max-w-[16rem] mt-[-7rem] pr-3 pl-6'>
                        This is the last stage. MOFA in the UAE provides the final and crucial attestation.
                        </p>
                    </div>
                </div>
            </div>
        </div>


        {/* Responsiveness in mobile view  */}

        <div className='flex justify-center mx-auto md:hidden h-full w-full my-10'>
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
                {/* step 1 */}
                <SwiperSlide>
                <div className='flex justify-center mx-auto  mb-14'>
                    <div>
                        <img src={step1} alt="step 1 precess" />
                        <h3 className='absolute mt-[-10rem] text-xl font-semibold px-5 text-green-500 '><BiSolidChevronRightCircle className='inline-flex'/> SDM/ HRD </h3>
                        <p className='absolute text-base text-gray-500 max-w-[18rem] mt-[-7rem] pr-3 pl-6'>
                        In this stage this department verifies and confirms the authenticity of the documents submitted.
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                {/* step 2 */}
                <SwiperSlide>
                <div className='flex justify-center mx-auto  mb-14'>
                    <div>
                        <img src={step2} alt="step 2 precess" />
                        <h3 className='absolute mt-[-10rem] text-xl font-semibold px-5 text-green-500 '><BiSolidChevronRightCircle className='inline-flex'/> MEA </h3>
                        <p className='absolute text-base text-gray-500 max-w-[18rem] mt-[-7rem] pr-3 pl-6'>
                        Here, MEA also confirms the authenticity of the certificate.
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                {/* step 3 */}
                <SwiperSlide>
                <div className='flex justify-center mx-auto  mb-14'>
                    <div>
                        <img src={step3} alt="step 3 precess" />
                        <h3 className='absolute mt-[-10rem] text-xl font-semibold px-4 text-green-500'><BiSolidChevronRightCircle className='inline-flex'/> UAE Embassy Attestation </h3>
                        <p className='absolute text-base text-gray-500 max-w-[18rem] mt-[-7rem] pr-3 pl-6'>
                        The UAE embassy will attest to the documents and prove their genuineness.
                        </p>
                    </div>
                </div>
                </SwiperSlide>
                {/* step 4 */}
                <SwiperSlide>
                <div className='flex justify-center mx-auto  mb-14
                '>
                    <div>
                        <img src={step4} alt="step 4 precess" />
                        <h3 className='absolute mt-[-10rem] text-xl font-semibold px-5 text-green-500 '><BiSolidChevronRightCircle className='inline-flex'/> MOFA </h3>
                        <p className='absolute text-base text-gray-500 max-w-[18rem] mt-[-7rem] pr-3 pl-6'>
                        This is the last stage. MOFA in the UAE provides the final and crucial attestation.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>

    </>
  )
}

export default ProcedureCard