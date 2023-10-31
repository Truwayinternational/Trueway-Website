import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import slider1 from '../../Assets/trueway welcome.png'
import slider2 from '../../Assets/Migration.png'
import slider3 from '../../Assets/Exam Coaching.png'
import slider4 from '../../Assets/Abrod.png'


import {IoLogoWhatsapp} from 'react-icons/io'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'



function HomeSlider() {
  return (
    <>
    <div className='lg:flex hidden'>
      <Swiper 
      style={{
        "--swiper-pagination-color": "#43b54b",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": ".3",
        "--swiper-pagination-bullet-size": "5px",
        "--swiper-pagination-bullet-width": "1px",
        "--swiper-pagination-bullet-horizontal-gap": "3px"
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="relative group w-full h-full"
      spaceBetween={50}
      centeredSlides={true}
      slidesPerView={1}
      pagination ={{
        clickable:true,
        dynamicBullets: true,
      }}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      >
      <SwiperSlide>
        <div className="image relative">
          <img src={slider1} alt="" />
          <div className="title_content absolute top-[20%] left-[6rem] space-y-5">
            <h2 className='text-[30px] font-HeadingFont'> Hello From <br />
             <b className='text-[40px] f-[700]'> Trueway International </b></h2>
            <p className='font-poppins text-[14px] w-[40%] justify-center text-gray-600'>
            Trueway International is an ISO-assured confirmation organisation providing UAE Attestation Services in India and is affirmed by Ministries and government offices in India and abroad. Main services include Attestation, Dataflow Verification, Good Standing and Council Verifications, College & Hospital Verifications, PCC, BLS & ACLS, Coaching.
            </p>
            <button className='flex rounded-lg p-2 px-4  bg-transparent border-solid border-2 border-green-600'>
             <IoLogoWhatsapp className='text-green-700 text-2xl mx-2 '/> <a href="https://wa.link/c3ukjh">Free Consulting Now</a>
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="image relative">
          <img src={slider2} alt="slider_2" />
          <div className="title_content absolute top-[20%] left-[6rem] space-y-5">
            <h3 className='text-[30px] font-HeadingFont'> Make The Migration <br />
            <b className='text-[40px] f-[700]'>Smooth With Dataflow</b></h3>
            <p className='font-poppins text-[14px] w-[40%] justify-center text-gray-600'>
            For every migration, data flow is significant. The types of dataflow services we provide are DHA, HAAD, MOH, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman. In order to prove the authenticity of the documents you submitted, Dataflow is mandatory.
            </p>
            <button className='flex rounded-lg p-2 px-4  bg-transparent border-solid border-2 border-green-600'>
             <IoLogoWhatsapp className='text-green-700 text-2xl mx-2 '/> 
             <a href="https://wa.link/c3ukjh"> Contact us to make the migration easy </a>
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="image relative">
          <img src={slider3} alt="slider_3" />
          <div className="title_content absolute top-[20%] left-[6rem] space-y-5">
            <h3 className='text-[30px] font-HeadingFont'> The Complete Option for <br/><b className='text-[40px] f-[700]'>Exam Coaching</b></h3>
            <p className='font-poppins text-[14px] w-[40%] justify-center text-gray-600'>
            Trying to achieve the highest scores in the exams to go abroad? For that, you need a complete academic preparation course. We provide coaching for IELTS, OET, and Prometric exams. We teach you the key skills and give you a better understanding of the subject.
            </p>
            <button className='flex rounded-lg p-2 px-4  bg-transparent border-solid border-2 border-green-600'>
             <IoLogoWhatsapp className='text-green-700 text-2xl mx-2 '/> <a href="https://wa.link/c3ukjh">Register your slot now</a>
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="image relative">
          <img src={slider4} alt="" />
          <div className="title_content absolute top-[20%] left-[6rem] space-y-5">
            <h2 className='text-[40px] f-[700] font-HeadingFont'><b>Is Employment Abroad your dream?</b></h2>
            <p className='font-poppins text-[14px] w-[40%] justify-center text-gray-600'>
            Verification, Attestation, data flow, and many more are needed to get visa approval to fly abroad. All this will make you mad, but with Trueway International, all of these are easy, quick, and trustworthy.
            </p>
            <button className='flex rounded-lg p-2 px-4  bg-transparent border-solid border-2 border-green-600' >
             <BiSolidPhoneCall className='text-green-700 text-2xl mx-2'/> <a href="tel:+918327626262">Connect with our customer care expert</a>
            </button>
          </div>
        </div>
      </SwiperSlide>
        <div className="top-[50%] absolute z-10 button-prev-slide h-[40px] w-[40px]  text-white bg-black grid place-items-center group-hover:left-0  -left-[23rem] duration-500 cursor-pointer">
            <BsArrowLeft />
        </div>
        <div className="top-[50%] absolute z-10 button-next-slide h-[40px] w-[40px] text-white bg-black grid place-items-center group-hover:right-0  -right-[23rem] duration-500 cursor-pointer">
            <BsArrowRight  />
        </div>
    </Swiper>
    </div>
  </>
  )
}

export default HomeSlider

