import React, { useContext, useEffect, useState } from 'react'
import login from '../../Assets/login.webp'
import { useNavigate } from 'react-router-dom'
import { userInstance } from '../../axiosInstance'
import { toast } from 'react-toastify';

import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { AdminContext } from '../Admin/AdminContext';

function Login() {
    
    const navigate = useNavigate()
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")

    const [open, setOpen] = useState(false)
    const {admin, setAdmin} = useContext(AdminContext)
 

    async function adminLogin(event) {
        event.preventDefault();
        try {
            const { data } = await userInstance.post("/admin", { email, password });
            localStorage.setItem("token", data.token)
            setAdmin({id:data.id, email:data.email})
            
        } catch (error) {
            console.error("Axios error:", error);
            toast.error(error.response.data.message);
            // alert(error.response.data.message)
            // window.location.reload()
        }
    }

    useEffect(()=>{
        if(admin){
            navigate('/admin/blogs')
        }
    },[admin, navigate])

    // handle password toggle button
    const toggle = ()=>{
        setOpen(!open)
    }
    
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-full w-full '>
            <div className='hidden sm:block'>
                <img className='h-full w-full object-cover' src={login} alt="illustrator login" />
            </div>

            <div className='bg-gray-900 flex flex-col justify-center '>
                <form className='max-w-[400px] w-full mx-auto bg-green-200 p-8 px-8 rounded-lg relative' onSubmit={adminLogin}>
                    <h2 className='text-4xl text-gray-900 font-bold text-center font-HeadingFont'> Log in </h2>
                    <div className='flex flex-col py-2 '>
                        <label htmlFor="">Email </label>
                        <input className='rounded-lg bg-gray-800 mt-2 p-2 focus:border-blue-500 focus:bg-gray-900 focus:outline-none text-gray-300 ' type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div className='flex flex-col  py-2 '>
                        <label htmlFor=""> Password </label>
                        <input className='rounded-lg bg-gray-800 mt-2 p-2 focus:border-blue-500 focus:bg-gray-900 focus:outline-none text-gray-300 ' 
                        type={(open === false)? "password" : "text"} name='password' value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
                    </div>
                    <div className='text-2xl absolute top-52 right-10 cursor-pointer text-gray-300'>
                        {
                            (open === false) ? <IoIosEyeOff onClick={toggle}/> : <IoIosEye onClick={toggle}/>
                        }
                    </div>
                    <div className='flex justify-between text-gray-900 py-2 '>
                        <p className='flex items-center '><input className="mr-2 cursor-pointer" type="checkbox" /> Remember me </p>
                        <a href='#!'> Forget Password </a>
                    </div>
                    <button className='w-full my-5 py-2 bg-green-600 shadow-lg shadow-teal-500/80 text-white font-HeadingFont rounded-lg'>Log in</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login