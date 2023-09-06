import React, { useState } from 'react'

import {MdCall, MdEmail, MdWhatsapp} from 'react-icons/md'


function GetinTouch() {

    const [formData, setFormData] = useState ({
        name: "",
        message:"",
        phone:"",
        email:"",
    })

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setFormData ((prevData) => ({...prevData, [name]: value}))
    }

    const handleSubmit = () =>{
        console.log(formData, "input data of form")
        alert("Form submitted Successfully")
    }

  return (
    <>
        <div className='w-full h-full flex justify-center items-centre'>
            <div className='m-auto bg-zinc-200  max-w-[1240px] lg:w-2/3 mx-10 p-10  rounded-2xl'>
                <h1 className='font-bold text-3xl subpixel-antialiased text-center'> Write to us </h1>
                <div className='my-10 '>
                    <form className='m-auto' action="" onSubmit={handleSubmit}>
                        <div className="lg:flex mb-5 ">
                            <div className="w-full lg:w-1/2 mr-6">
                                <label htmlFor="first_name_field" className="block text-md text-gray-800">Name</label>
                                <input className=" w-full rounded-lg px-3 py-2 my-3 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none " type="text" name="name" required value={formData.name} onChange={(event) => handleInputChange (event)}/>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label htmlFor="message_felid" className="block text-md text-gray-800">Comment or Message </label>
                                <textarea className="rounded-lg  w-full py-2 px-3 my-3 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none " type="text" name="message" rows={8} required value={formData.message} onChange={(event) => handleInputChange (event)}/>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 mr-6 lg:mt-[-12rem]">
                            <label htmlFor="phoneNumber_field" className="block text-md text-gray-800">Phone Number</label>
                            <input className="  w-full rounded-lg px-3 py-2 my-3 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none " type="text" name="phone" required value={formData.phone} onChange={(event) => handleInputChange (event)}/>
                        </div>

                        <div className="w-full lg:w-1/2 mr-6 ">
                            <label htmlFor="phoneNumber_field" className="block text-md text-gray-800">Email Address</label>
                            <input className="  w-full rounded-lg px-3 py-2 my-3 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none " type="email" name="email" required value={formData.email} onChange={(event) => handleInputChange (event)} />
                        </div>
                        
                        <div className='text-center'>
                            <button className=' px-8 my-10 py-3 border-none bg-green-500  hover:bg-green-700 text-white rounded-xl '> Submit </button>
                        </div>
                    </form>
                    
                    <div className='text-center'>
                        <p className='text-gray-700 font-bold text-md'> To Know more Get in touch with our experts </p>
                    </div>
                    <div className='text-center flex justify-center items-center '>
                        <div className='flex flex-row  mt-8'>

                            <div className="px-6 ">
                                <dl className="text-center ">
                                    <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                        <MdEmail className="text-4xl font-bold mx-2 text-green-500 hover:text-green-700"/>
                                        <a href='mailto:social@truewayinternational.com' className="text-sm font-bold text-gray-600"> Email Us</a>
                                    </div>
                                </dl>
                            </div>
                            <div className="px-6">
                                <dl className="text-center ">
                                    <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                        <dd className="text-4xl font-bold mx-3 text-green-500 hover:text-green-700">
                                        <MdWhatsapp />
                                        </dd>
                                        <a href='https://wa.link/c3ukjh' className="text-sm font-bold  text-gray-600"> Contact Us</a>
                                    </div>
                                </dl>
                            </div>
                            <div className="px-6">
                                <dl className="text-center">
                                    <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                        <dd className="text-4xl font-bold mx-2 text-green-500 hover:text-green-700">
                                        <MdCall />
                                        </dd>
                                        <a href='tel:+918327626262' className="text-sm text-gray-600 font-bold"> Call Us</a>
                                    </div>
                                </dl>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default GetinTouch