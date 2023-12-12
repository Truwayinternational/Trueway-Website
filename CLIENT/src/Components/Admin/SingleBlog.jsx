import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userInstance } from '../../axiosInstance'
import { useState } from 'react'
import UploadImage from './UploadImage'
import TextEditor from './TextEditor'



function SingleBlog() {

    const [title, setTitle] = useState ("")
    const [content, setContent] = useState ("")

    const navigate = useNavigate()

    const [uploaded, setUploaded] = useState('')
    const [metaTitle, setMetaTitle] = useState('')
    const [metaDescription, setMetaDescription] = useState('')
    
    // add and edit blog
    async function handleSubmit(e) {
        try {
            e.preventDefault();

            const formData = {
                title, content, uploaded, metaTitle, metaDescription

            }
            if(blogId){
                //update blog
                const { data } = await userInstance.put("/admin/blogs/" + blogId, formData)
                console.log(data)
            }else{
                //add blog
                const { data } = await userInstance.post("/add-blog", formData)
                console.log(data);
            }
            navigate('/admin/blogs')
        } catch (error) {
            console.error(error);
        }
    }



    const {blogId} = useParams()

    useEffect(()=> {
        const fetchSingleBlog = async ()=>{
            const {data} = await userInstance.get("/admin/blogs/" + blogId)
            setTitle(data.title)
            setContent(data.content)
            setUploaded(data.image)
            setMetaTitle(data.metaTitle)
            setMetaDescription(data.metaDescription)
            
        }
        if (blogId) {
            fetchSingleBlog()
        }else{
            return
        }
    },[blogId])

    

  return (
    <div className='bg-green-100 flex flex-col'>
        <h1 className='md:text-4xl text-2xl font-HeadingFont font-semibold text-center mt-10'> Add / Edit Your Blogs </h1>
        <form  onSubmit={handleSubmit} className='flex justify-center md:mx-auto mx-8 flex-col  my-10 py-10 md:w-[80%] lg:w-2/3 p-3'>
            <div className='flex flex-col py-2'>
                <label className='text-xl font-semibold font-poppins py-2' htmlFor="">Blog Title</label>
                <input className='rounded-lg text-lg  mt-2 p-2 focus:border-blue-500  focus:outline-none text-gray-700 ' type="text" name='title' placeholder="Title here..." value={title} onChange={(event)=> setTitle(event.target.value)} 
                required/>
            </div>
            {/* image uploaded component */}
            <UploadImage 
                uploaded={uploaded} 
                setUploaded={setUploaded} 
            />
            {/* text editor component */}
            <TextEditor content={content} setContent={setContent} />

            <br />
            <div className='bg-black h-[2px] rounded-2xl'></div>
            <br/>

            {/* Meta title and Meta descrtiptions  */}
            <p className='pb-2 font-poppins'>
                Add your Meta details here (if need..)
            </p>
            <div className='flex flex-col py-2'>
                <label className='text-xl font-semibold font-poppins py-2' htmlFor="">Meta Title</label>
                <input className='rounded-lg text-lg  mt-2 p-2 focus:border-blue-500  focus:outline-none text-gray-700 ' type="text" name='title' placeholder=" Meta title here..." 
                value={metaTitle} onChange={(event)=> setMetaTitle(event.target.value)} 
                />
            </div>
            <div className='flex flex-col py-2'>
                <label className='text-xl font-semibold font-poppins py-2' htmlFor="">Meta Description</label>
                <textarea rows={4} className='block p-2.5 text-lg focus:border-blue-500  focus:outline-none text-gray-700 rounded-lg  ' type="text" name='content' placeholder="Write your Meta description here..." 
                value={metaDescription} onChange={(event)=>setMetaDescription(event.target.value)}
                />
            </div>
            <button className='bg-green-700 my-5 p-3 text-white font-HeadingFont font-semibold text-2xl rounded-xl hover:bg-green-800' type='submit'> Submit </button>
        </form>
    </div>
  )
}

export default SingleBlog