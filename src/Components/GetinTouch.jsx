import React from 'react'

import {MdCall, MdEmail, MdWhatsapp} from 'react-icons/md'


function GetinTouch() {
  return (
    <>
        <div className='w-full h-full flex justify-center items-centre'>
            <div className='m-auto bg-zinc-200 lg:w-2/3 mx-10 p-10  rounded-2xl'>
                <h1 className='font-bold text-3xl subpixel-antialiased text-center'> Write to us </h1>
                <div className='my-10 '>
                    <form className='m-auto' action="" >
                        <div className="lg:flex mb-5 ">
                            <div className="w-full lg:w-1/2 mr-6">
                                <label for="first_name_field" className="block text-sm text-gray-800">Name:</label>
                                <input className=" w-full rounded-lg p-2 my-3 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none " type="text" name="name" required/>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <label for="message_felid" className="block text-sm text-gray-800">Comment or Message </label>
                                <textarea className="rounded-lg  w-full p-2 my-3 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none " type="text" name="messages" rows={8} required/>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 mr-6 lg:mt-[-12rem]">
                            <label for="phoneNumber_field" className="block text-sm text-gray-800">Phone Number:</label>
                            <input className="  w-full rounded-lg p-2 my-3 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none " type="text" name="phone" required/>
                        </div>

                        <div className="w-full lg:w-1/2 mr-6 ">
                            <label for="phoneNumber_field" className="block text-sm text-gray-800">Email Address:</label>
                            <input className="  w-full rounded-lg p-2 my-3 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none " type="email" name="email" required/>
                        </div>
                        
                        <div className='text-center'>
                            <button className=' px-8 my-10 py-2 border-none bg-green-500  hover:bg-green-700 text-white rounded-xl '> Submit </button>
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
                                        <a href='mailto:tvm@truewayinternational.com' className="text-sm  text-gray-600"> Email Us</a>
                                    </div>
                                </dl>
                            </div>
                            <div className="px-6">
                                <dl className="text-center ">
                                    <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                        <dd className="text-4xl font-bold mx-3 text-green-500 hover:text-green-700">
                                        <MdWhatsapp />
                                        </dd>
                                        <a href='https://wa.link/c3ukjh' className="text-sm  text-gray-600"> Contact Us</a>
                                    </div>
                                </dl>
                            </div>
                            <div className="px-6">
                                <dl className="text-center">
                                    <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                                        <dd className="text-4xl font-bold mx-2 text-green-500 hover:text-green-700">
                                        <MdCall />
                                        </dd>
                                        <a href='tel:+918327626262' className="text-sm text-gray-600"> Call Us</a>
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