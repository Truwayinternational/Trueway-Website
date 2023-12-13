import React, { useEffect, useState } from 'react'
import {SlCalender} from 'react-icons/sl'
import { userInstance } from "../../axiosInstance";


// Import Swiper React components (for responsive design )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function OurBlogsCards() {

    const [blogs, setBlogs] = useState([]);

    const limit = 5
    useEffect(() => {
        async function searchBlog() {
          const { data } = await userInstance.get(`/blogs?limit=${limit}`);
          setBlogs(data);
        }
        searchBlog();
      }, [limit]);


  return (

    <>
        <div className='max-w-[1240px] mx-auto place-content-center mb-10'>
                <div className='my-10 '>
                    <h5 className='text-center font-bold text-gray-800 text-3xl md:text-5xl lg:my-[100px] font-HeadingFont'>
                        Read<span className='text-green-500 font-bold p-3'>Our Blogs</span>
                    </h5>
                </div>
                <div className='flex flex-row pb-10 mx-5'>
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
                        className="w-full h-full mb-10 grid grid-cols-3"
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
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
                        modules={[Pagination]}
                    >

                        {blogs.length > 0 && blogs.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <div className="mb-16 h-[450px] py-5  justify-center px-auto m-4 p-3 bg-zinc-100 px-4 rounded-3xl hover:shadow-lg hover:bg-green-50 cursor-pointer">
                                    <div className='flex   text-green-800 px-4'>
                                        <SlCalender className='mt-3 text-lg'/> <span className='font-bold p-3'>
                                            {new Date(blog.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className=" h-full py-2">
                                        <h5 className="text-2xl font-bold tracking-wide font-HeadingFont  text-black py-2 text-center"> {`${blog.title.slice(0, 40)}...`} </h5>
                                        <p className=" font-light tracking-normal text-zinc-500 text-justify md:text-lg">
                                        </p>
                                        <div className='h-fit overflow-hidden font-light tracking-normal text-zinc-500 text-justify md:text-lg' dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 250) + '...' }} />
                                        <br/>
                                        <a href={`/blogs/${blog._id}`}
                                        className='mt-10 font-bold text-green-600 hover:text-green-900 px-3 text-center mx-auto'>
                                            Read More..
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </div>
    </>
  )
}

export default OurBlogsCards