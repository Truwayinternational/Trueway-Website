import React, { useContext, useEffect, useState } from 'react'
import { userInstance } from '../../axiosInstance'
import { NavLink } from 'react-router-dom'
import { IMG_URL } from '../../constent'
import { AdminContext } from './AdminContext'
import Swal from 'sweetalert2'


function AdminBlogs() {
    
    const [blogs, setBlogs] = useState([])
    const [reload, setReload] = useState(false)
    
    const {admin, setAdmin} = useContext(AdminContext)
    

    const deleteBlog = async (blogId) =>{
         await userInstance.delete("/admin/blogs/" + blogId)
        // alert("Are you Sure..?", data)
    }

    // blog delete alert with popup
    const handleDeleteAlert = (blogId) => {
        Swal.fire({
          title: "Are you sure..?",
          text: 'delete item',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, Delete it',
          cancelButtonText: 'Cancel',
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await deleteBlog(blogId);
              Swal.fire("Deleted", 'Your file has been deleted', 'success');
              setReload(!reload);
            } catch (error) {
              Swal.fire("Error", 'Failed to delete the file', 'error');
            }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Cancelled", 'Your file is safe ☺️', 'error');
          }
        });
    };



    useEffect(()=>{
        const fetchBlogs = async () => {
            const {data} = await userInstance.get("/admin/blogs")
            setBlogs(data)
        }
        fetchBlogs()
    },[reload])

    function logout () {
        setAdmin(null === !admin)
        localStorage.removeItem("token")
    }


  return (
    <div className="container mx-auto mt-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center my-5">Blog Posts</h2>
        <div className='flex justify-between items-center'>
        <div className='inline-flex my-5 mx-5 md:ml-20'>
            <NavLink className="bg-green-600 text-white px-4 py-2 rounded-lg " to={"/admin/add-blog"}>Add Blogs</NavLink>
        </div>
        <div className=' my-5 inline-flex mx-5 md:mr-20'>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg  " onClick={logout}>Log out</button>
        </div>
        </div>
        
        <ul>
            {blogs.length > 0 && blogs.map((blog) => (
            <li key={blog.Id} className="lg:flex mb-4 p-4 border rounded">
                <div className='block lg:w-1/3 w-full mx-3 p-3'>
                    <img className='w-[300px] h-[300px] m-3 p-3' src={IMG_URL + blog.image} alt="BlogPoster"/>
                </div>
                <div className='lg:w-2/3 w-full flex flex-col px-3'>
                    <h1 className="text-2xl md:text-4xl font-semibold mb-2 px-3 font-HeadingFont">{blog.title}</h1>
                    <p className='text-gray-600 mb-4 px-3 text-lg font-poppins'>
                       Published Date: {blog.createdAt?.slice(0, 10)}
                    </p>
                    <p className='text-gray-600 mb-4 px-3 text-lg font-poppins'>
                        updated Date: {blog.updatedAt?.slice(0, 10)}
                    </p>

                    <div className='h-60 overflow-y-scroll' dangerouslySetInnerHTML={{ __html: blog.content }} />

                    <div className="flex mt-4">
                        <NavLink className='bg-blue-500 text-white px-4 py-2 rounded-lg mx-2' to={"/admin/blogs/" + blog._id} > Edit </NavLink>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-lg mx-2"
                            onClick={() => handleDeleteAlert(blog._id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default AdminBlogs