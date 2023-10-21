import React from 'react'

// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// location Branches images added here
import Kazhakoottam from '../../Assets/contactUs/Kazhakkoottam.png'
import Attingal from '../../Assets/contactUs/Attingal.png'
import Kochi from '../../Assets/contactUs/Kochi.png'
import Bangalure from '../../Assets/contactUs/Bangalore.png'
import Chennai from '../../Assets/contactUs/Chennai.png'



function BranchesMob() {
  return (
    <>
      <div className='flex justify-center md:hidden h-full w-full my-10 mx-auto px-5'>
      <Swiper
        style={{
          "--swiper-pagination-color": "#43b54b",
          "--swiper-pagination-bullet-inactive-color": "#999999","--swiper-pagination-bullet-inactive-opacity": ".3",
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
            320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
            520: {
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
        {/* location 1 */}
          <SwiperSlide>
            <div className='flex justify-center mx-auto mb-16'>
              <a href="https://www.google.com/maps/place/Trueway+international/@8.5682433,76.868242,16z/data=!4m6!3m5!1s0x3b05bb83a7f4081b:0xefc31dbc16018dff!8m2!3d8.5648563!4d76.8757937!16s%2Fg%2F11pdw9prh1?authuser=0&entry=ttu" target='_blank' rel="noopener noreferrer">
              <img src={Kazhakoottam} alt="kazhakkoottam Location" />
              </a>
            </div>
          </SwiperSlide>
          {/* location 2 */}
          <SwiperSlide>
            <div className='flex justify-center mx-auto mb-14'>
              <a href="https://www.google.com/maps/place/Adsomia+india+pvt+ltd/@8.6936387,76.8197565,20.43z/data=!4m14!1m7!3m6!1s0x3b05e9a0e100813f:0xffd7aae933928cfc!2sAdsomia+india+pvt+ltd!8m2!3d8.6934554!4d76.8199276!16s%2Fg%2F11sbd0j9fk!3m5!1s0x3b05e9a0e100813f:0xffd7aae933928cfc!8m2!3d8.6934554!4d76.8199276!16s%2Fg%2F11sbd0j9fk?authuser=0&entry=ttu" target='_blank' rel="noopener noreferrer">
              <img src={Attingal} alt="attingal Location" />
              </a>
            </div>
          </SwiperSlide>
          {/* location 3 */}
          <SwiperSlide>
            <div className='flex justify-center mx-auto mb-14'>
              <a href="https://www.google.com/maps/place/Trueway+Attestation/@9.9723527,76.2831195,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0873a7cd8c8ddb:0xd5318173f12c4809!8m2!3d9.9723474!4d76.2856944!16s%2Fg%2F11rr5z000x?authuser=0&entry=ttu" target='_blank' rel="noopener noreferrer">
              <img src={Kochi} alt="kochi Location" />
              </a>
            </div>
          </SwiperSlide>
          {/* location 4 */}
          <SwiperSlide>
            <div className='flex justify-center mx-auto mb-14
            '>
              <a href="https://www.google.com/maps/place/Trueway+international/@12.9772634,77.5763505,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae195748ea8e0f:0x4bea4f115b98dc9b!8m2!3d12.9772634!4d77.5763505!16s%2Fg%2F11p5hvkrgk?entry=ttu" target='_blank' rel="noopener noreferrer">
              <img src={Bangalure} alt="bangalore Location" />
              </a>
            </div>
          </SwiperSlide>
          {/* location 5 */}
          <SwiperSlide>
            <div className='flex justify-center mx-auto mb-14
            '>
              <a href="https://www.google.com/maps/place/Adsomia+India+Pvt+ltd/@13.0613,80.2611,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52671d995dccb1:0x3e422a5d1d2dac8a!8m2!3d13.0613!4d80.2611!16s%2Fg%2F11scpvln6y?entry=ttu" target='_blank' rel="noopener noreferrer">
              <img src={Chennai} alt="chennai Location" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default BranchesMob