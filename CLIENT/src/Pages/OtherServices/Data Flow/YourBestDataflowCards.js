import React from 'react'

// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import section images 
import Doctor from '../../../Assets/dataflow/doctor.webp'
import nurses from '../../../Assets/dataflow/nurses.webp'
import dentist from '../../../Assets/dataflow/dentist.webp'
import physiotherapist from '../../../Assets/dataflow/physio.webp'
import medical from '../../../Assets/dataflow/medical.webp'
import pharmacist from '../../../Assets/dataflow/pharmacy.webp'
import radiographer from '../../../Assets/dataflow/radio.webp'


function YourBestDataflowCards() {

  return (

    <>
       <div className='bg-zinc-100 h-full w-full'>
            <div className='flex  max-w-[1240px] mx-auto place-content-center '>
                <div className='grid grid-cols-1 pb-10 mx-5'>
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
                        className="w-full h-full mb-10"
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        <SwiperSlide>
                            <div className="flex  h-[33rem] md:h-[30rem] py-10 flex-col justify-center px-auto m-4 p-3  bg-white px-4 rounded-3xl hover:shadow-lg hover:bg-green-50 cursor-pointer">
                                <img className="w-20 mx-auto object-cover"src={Doctor} alt="doctor_icon" />
                                <div className=" h-full py-2">
                                    <h5 className="text-2xl font-bold tracking-wide font-HeadingFont  text-black py-2 text-center"> Doctors </h5>
                                    <p className=" font-light text-zinc-500 text-center md:text-md">We provide specialised assistance to doctors navigating the DataFlow procedure, where local experience standards vary. For DHA, MOH, and HAAD exams, doctors typically need 2 years post-MBBS and 3 years post-graduation (MS, MD, or DNB). For Qatar, Oman, and Saudi Arabia, 3 years after graduation and post-graduation are needed. DataFlow processing takes approximately 30-45 days, but diplomas are not accepted in Gulf countries.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col h-[33rem] md:h-[30rem] py-10 justify-center px-auto m-4 p-3  bg-white px-4 rounded-3xl hover:shadow-lg hover:bg-green-50 cursor-pointer">
                                <img className="w-20 mx-auto object-cover"src={nurses} alt="nurses_icon" />
                                <div className=" h-full py-2">
                                    <h5 className="text-2xl font-bold tracking-wide font-HeadingFont  text-black py-2 text-center"> Nurses </h5>
                                    <p className=" font-light text-zinc-500 text-center md:text-md">We Our assistance includes the DataFlow procedure for nurses, with various national eligibility standards.For DHA, MOH, and HAAD exams, nurses typically require 2 years post-GNM/BSc Nursing and 3 years post-MSc Nursing. In Qatar, Oman, and Saudi Arabia, 3 years of experience after both graduation and MSc Nursing are needed. DataFlow processing takes about 30-45 days, and diplomas are accepted for nurses in Gulf countries.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col h-[33rem] md:h-[30rem] py-10 justify-center px-auto m-4 p-3  bg-white px-4 rounded-3xl hover:shadow-lg hover:bg-green-50 cursor-pointer">
                                <img className="w-20 mx-auto lg:pt-3 pt-1 object-cover"src={dentist} alt="dentist_icon" />
                                <div className=" h-full lg:py-2 ">
                                    <h5 className="text-2xl font-bold tracking-wide font-HeadingFont  text-black py-1  text-center"> Dentists </h5>
                                    <p className=" font-light  text-zinc-500 text-center md:text-md">We offer dentists complete support for the DataFlow procedure. Availability varies by nation: for DHA, MOH, and HAAD exams, dentists need 2 years post-BDS and 3 years post-MDS, specialising in fields like Dento-maxillofacial radiology, Endodontics, Oral and maxillofacial surgery, Orthodontics, etc. In Qatar, Oman, and Saudi Arabia, 3 years of experience after both graduation and post-graduation (MDS) are required. DataFlow processing typically takes 30-45 days, and diplomas are not accepted for dentists in Gulf countries.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col h-[33rem] md:h-[30rem] py-10 justify-center px-auto m-4 p-3  bg-white px-4 rounded-3xl hover:shadow-lg hover:bg-green-50 cursor-pointer">
                                <img className="w-20 mx-auto object-cover"src={physiotherapist} alt="physiotherapist_icon" />
                                <div className=" h-full py-2">
                                    <h5 className="text-2xl font-bold tracking-wide font-HeadingFont  text-black py-2 text-center"> Physiotherapists </h5>
                                    <p className=" font-light text-zinc-500 text-center md:text-md">For physiotherapists navigating the DataFlow procedure, we provide complete support. Eligibility varies: for DHA, MOH, and HAAD exams, physiotherapists need 2 years post-bachelor and 3 years post-Master in Physiotherapy. In Qatar, Oman, and Saudi Arabia, 3 years post-masters are required. DataFlow processing takes about 30-45 days, and diplomas are not recognized by Gulf governments.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col h-[33rem] md:h-[30rem] py-10 justify-center px-auto m-4 p-3  bg-white px-4 rounded-3xl hover:shadow-lg hover:bg-green-50 cursor-pointer">
                                <img className="w-20 mx-auto object-cover" src={medical} alt="medical_icon" />
                                <div className=" h-full py-2">
                                    <h5 className="text-2xl font-bold tracking-wide font-HeadingFont  text-black py-2 text-center"> Medical laboratory technician </h5>
                                    <p className=" font-light text-zinc-500 text-center md:text-md">Throughout the DataFlow process, we offer medical laboratory personnel crucial support. Eligibility criteria differ by country: for DHA, MOH, and HAAD exams, technicians need 2 years post-Diploma in MLT or BSc MLT, and 3 years post-MSc MLT. In Qatar, Oman, and Saudi Arabia, 3 years post-graduation and post-MSc MLT are required. DataFlow processing takes approximately 30-45 days, and diplomas are recognized by Gulf governments.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col h-[33rem] md:h-[30rem] py-10 justify-center px-auto m-4 p-3  bg-white px-4 rounded-3xl hover:shadow-lg hover:bg-green-50 cursor-pointer">
                                <img className="w-20 mx-auto object-cover"src={pharmacist} alt="Pharmacist_icon" />
                                <div className=" h-full py-2">
                                    <h5 className="text-2xl font-bold tracking-wide font-HeadingFont  text-black py-2 text-center"> Pharmacist </h5>
                                    <p className=" font-light text-zinc-500 text-center md:text-md">Pharmacists can navigate the DataFlow procedure with the help of our support. Eligibility varies by country: for DHA, MOH, and HAAD exams, pharmacists need 2 years post-Diploma in Pharmacy or BPharma, and 3 years post-MPHRMA. In Qatar, Oman, and Saudi Arabia, 3 years post-graduation and post-MPHRMA are required. DataFlow processing typically takes 30-45 days, and Gulf governments recognize diplomas in this field.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col h-[33rem] md:h-[30rem] py-10 justify-center px-auto m-4 p-3  bg-white px-4 rounded-3xl hover:shadow-lg hover:bg-green-50 cursor-pointer">
                                <img className="w-20 mx-auto object-cover" src={radiographer} alt="Radiographer_icon" />
                                <div className=" h-full py-2">
                                    <h5 className="text-2xl font-bold tracking-wide font-HeadingFont  text-black py-2 text-center"> Radiographer </h5>
                                    <p className=" font-light text-zinc-500 text-center md:text-md">For radiographers navigating the DataFlow process, we provide essential support. Eligibility criteria differ by country: for DHA, MOH, and HAAD exams, radiographers need 2 years post-Diploma in Radiography or BSc and 3 years post-MSc. In Qatar, Oman, and Saudi Arabia, 3 years post-graduation and post-MSc are required. DataFlow processing typically takes 30-45 days, and Gulf governments accept diplomas in this field.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    </>

  )
}

export default YourBestDataflowCards