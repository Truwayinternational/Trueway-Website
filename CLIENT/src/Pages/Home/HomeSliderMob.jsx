import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

//import slider images 
import slider1 from '../../Assets/responsive:home/Banner1.webp'
import slider2 from '../../Assets/responsive:home/Banner2.webp'
import slider3 from '../../Assets/responsive:home/Banner3.webp'
import slider4 from '../../Assets/responsive:home/Banner4.webp'

//icons import
import {IoLogoWhatsapp} from 'react-icons/io'
import {BiSolidPhoneCall} from 'react-icons/bi'

function HomeSliderMob() {
  return (
    <div className='md:hidden h-full w-full '>
        <Swiper 
          style={{
            "--swiper-pagination-color": "#43b54b",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": ".3",
            "--swiper-pagination-bullet-size": "3px",
            "--swiper-pagination-bullet-width": "1px",
            "--swiper-pagination-bullet-horizontal-gap": "3px"
          }}
        pagination={{
        dynamicBullets: true,
        clickable:true
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className='flex items-center'>
        <div className="flex flex-col relative">
          <img src={slider1} alt="slider_1" className='w-screen'/>
          <div className=" absolute top-3 pl-5 sm:px-8">
            <h3 className='text-[30px] sm:text-[48px] font-semibold leading-10 sm:leading-normal py-2 md:px-5 font-HeadingFont'> Hello From <br/><b>Trueway International</b></h3>
            <p className='font-poppins sm:text-[25px] text-[14px]  px-0 justify-center text-gray-600'>
            Trueway International is an ISO-assured confirmation organisation providing UAE Attestation Services in India and is affirmed by Ministries and government offices in India and abroad. Main services include Attestation, Dataflow Verification, Good Standing and Council Verifications, College & Hospital Verifications, PCC, BLS & ACLS, Coaching.
            </p>
            <button className='flex rounded-lg p-2 my-2 px-4  bg-transparent border-solid border-2 border-green-600 sm:text-3xl sm:p-3 sm:m-5 sm:my-5'>
             <IoLogoWhatsapp className='text-green-700 text-xl mx-2  sm:text-3xl '/> <a href="https://wa.link/c3ukjh"> Free Consulting Now </a>
            </button>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
        <div className="flex flex-col relative">
          <img src={slider2} alt="slider_2" className='object-fill w-screen'/>
          <div className=" absolute top-3 pl-5 sm:px-8">
            <h3 className='text-[30px] sm:text-[48px] font-semibold leading-10 sm:leading-normal py-2 md:px-5 font-HeadingFont'> Make The Migration<br /><b className='md:text-[60px] tracking-normal'>Smooth With Dataflow</b></h3>
            <p className='font-poppins sm:text-[25px] text-[14px]  px-0 justify-center text-gray-600 '>
            For every migration, data flow is significant. The types of dataflow services we provide are DHA, HAAD, MOH, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman. In order to prove the authenticity of the documents you submitted, Dataflow is mandatory.
            </p>
            <button className='flex rounded-lg p-2 my-2 px-4  bg-transparent border-solid border-2 border-green-600 sm:text-3xl sm:p-3 sm:m-5 sm:my-5'>
             <IoLogoWhatsapp className='text-green-700 text-xl mx-2  sm:text-3xl '/> <a href="https://wa.link/c3ukjh">Contact us to migration easy</a>
            </button>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
        <div className="image relative">
          <img src={slider3} alt="slider_1" className='object-fill w-screen'/>
          <div className=" absolute top-3 pl-5 sm:px-8">
            <h3 className='text-[30px] sm:text-[48px] font-semibold leading-10 sm:leading-normal py-2 md:px-5 font-HeadingFont'>The Complete Option <br/> for Exam Coaching</h3>
            <p className='font-poppins sm:text-[25px] text-[14px]  px-0 justify-center text-gray-600 '>
            Trying to achieve the highest scores in the exams to go abroad? For that, you need a complete academic preparation course. We provide coaching for IELTS, OET, and Prometric exams. We teach you the key skills and give you a better understanding of the subject.
            </p>
            <button className='flex rounded-lg p-2 my-2 px-4  bg-transparent border-solid border-2 border-green-600 sm:text-3xl sm:p-3 sm:m-5 sm:my-5'>
             <IoLogoWhatsapp className='text-green-700 text-xl mx-2  sm:text-3xl '/> <a href="https://wa.link/c3ukjh">Register your slot now</a>
            </button>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center'>
        <div className="image relative">
          <img src={slider4} alt="slider_4" className='object-fill w-screen'/>
          <div className="absolute top-3 pl-5 sm:px-8">
            <h3 className='text-[30px] sm:text-[48px] font-semibold leading-10 sm:leading-normal py-2 md:px-5 font-HeadingFont'> Is Employment Abroad your dream? </h3>
            <p className='font-poppins sm:text-[25px] text-[14px]  px-0 justify-center text-gray-600 '>
            Verification, Attestation, data flow, and many more are needed to get visa approval to fly abroad. All this will make you mad, but with Trueway International, all of these are easy, quick, and trustworthy.
            </p>
            <button className='flex rounded-lg p-2 my-2 px-4  bg-transparent border-solid border-2 border-green-600 sm:text-3xl sm:p-3 sm:m-5 sm:my-5'>
             <BiSolidPhoneCall className='text-green-700 text-xl mx-2  sm:text-3xl '/> <a href="tel:+918327626262">Free Consulting Now</a>
            </button>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSliderMob



