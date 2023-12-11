import React, { useEffect, useState } from "react";

import { SlCalender } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { userInstance } from "../../axiosInstance";
import { IMG_URL } from "../../constent";
import { useNavigate } from "react-router-dom";

function BlogsIndex() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function searchBlog() {
      const { data } = await userInstance.get(`/blogs?search=${search}`);
      setBlogs(data);
    }
    searchBlog();
  }, [search]);

  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="bg-green-300 w-full h-auto py-10 ">
          <h1 className="text-center md:text-5xl text-4xl font-bold font-HeadingFont py-10">
            Read Our Blogs
          </h1>
        </div>

        {/* blogs added here */}
        <div className="flex my-10 flex-col lg:flex-row">
          <div className="lg:w-2/3 w-full">
            {blogs.length > 0 &&
              blogs.map((blog, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2  bg-slate-100 rounded-lg shadow-lg w-full px-2 my-5 h-fit ">
                  {/* blog image here */}
                  <div
                    className="flex p-3 cursor-pointer "
                    onClick={() => navigate("/blogs/" + blog._id)}
                  >
                    <img
                      className="object-fill rounded-lg p-5"
                      src={IMG_URL + blog.image}
                      alt="blogImageHere"
                    />
                  </div>
                  {/* blog other details here */}
                  <div className="flex p-3 py-5">
                    <div className="">
                      <h1
                        className="md:text-3xl text-xl font-semibold font-HeadingFont cursor-pointer hover:text-gray-700"
                        onClick={() => navigate("/blogs/" + blog._id)}
                      >
                        {blog.title}
                      </h1>
                      <p className="text-lg py-3 text-green-800">
                        <SlCalender className="inline-flex text-black mr-3 -mt-1" />{" "}
                        Created at:{" "}
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </p>

                      <div className='h-60 overflow-y-scroll' dangerouslySetInnerHTML={{ __html: blog.content }} />

                      <button
                        className=" text-white bg-blue-400 p-3 font-poppins rounded-xl mt-5 cursor-pointer"
                        onClick={() => navigate("/blogs/" + blog._id)}
                      >
                        {" "}
                        Read more...
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* right side recent blogs list */}
          <div className="lg:w-1/3 w-full  flex flex-col  lg:px-5 px-3 ">
            <div>
              <label className="relative block mx-5 my-10 xl:w-2/3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <IoSearch />
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search recen articles..."
                  type="text"
                  name="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>

            <div className='pl-5 my-5 '>
              <h3 className='text-3xl font-semibold font-HeadingFont underline-offset-8 underline'>
                  Recent Articles
              </h3>
              <ul className='my-10 list-disc mx-3 font-poppins text-gray-600'>
              { blogs.length > 0 && blogs.map((blog, index)=>(
                <li key={index} className='text-lg hover:text-blue-500 hover:underline cursor-pointer'
                onClick={() => navigate("/blogs/" + blog._id)}>
                  {blog.title} 
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsIndex;

