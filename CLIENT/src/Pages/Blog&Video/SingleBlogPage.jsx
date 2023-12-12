import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userInstance } from '../../axiosInstance'
import { Helmet } from 'react-helmet'
import { SlCalender } from 'react-icons/sl'
import { IMG_URL } from "../../constent";
import { IoSearch } from "react-icons/io5";


function SingleBlogPage() {
  const navigate = useNavigate();

  const {blogId} = useParams()
  const [blog, setBlog] = useState({})
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(()=>{
    async function fetchSingleBlog () {
      const {data} = await userInstance.get('/blogs/'+ blogId)
      setBlog(data)
    }
    fetchSingleBlog()

    async function searchBlog() {
      const { data } = await userInstance.get(`/blogs?search=${search}`);
      setBlogs(data);
    }
    searchBlog();
  },[search, blogId])

  return (

    <div>
    { blog && 
     <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{blog?.metaTitle?blog.metaTitle:"Blog - Trueway International"} </title>
          <meta name="description" content={blog?.metaDescription?blog.metaDescription:"Blog Description - Trueway international "} />
        </Helmet>

      {/* blogs added here */}
        <div className="flex my-10 flex-col lg:flex-row">
          <div className="lg:w-2/3 w-full">
                <div  className="grid grid-cols-1 bg-slate-100 rounded-lg shadow-lg w-full px-2 my-5 h-fit ">
                  {/* blog image here */}
                  <div className="flex p-3 cursor-pointer">
                    <img
                      className="object-fill rounded-lg p-5"
                      src={IMG_URL + blog.image}
                      alt="blogImageHere"
                    />
                  </div>
                  {/* blog other details here */}
                  <div className="flex p-3 py-5">
                    <div className="">
                      <h1 className="md:text-3xl text-xl font-semibold font-HeadingFont cursor-pointer hover:text-gray-700">
                        {blog.title}
                      </h1>
                      <p className="text-lg py-3 text-green-800">
                        <SlCalender className="inline-flex text-black mr-3 -mt-1" />{" "}
                        Published at:{" "}
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </p>

                      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                      {/* <p className="md:text-[16px] md:leading-6 text-sm font-poppins text-justify text-gray-600 ">
                        {blog.content}
                      </p> */}
                    </div>
                  </div>
                </div>
          </div>

          {/* right side recent blogs list */}
          <div className="lg:w-1/3 w-full  flex flex-col  lg:px-5 px-3 ">
            <div>
              <label className="relative block mx-5 my-10 xl:w-2/3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 p-3">
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
                <li key={index} className='text-lg hover:text-blue-500 hover:underline cursor-pointer p-4'
                onClick={() => navigate("/blogs/" + blog._id)}>
                  {blog.title} 
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
     </> 
    }
    </div>
  )
}

export default SingleBlogPage

