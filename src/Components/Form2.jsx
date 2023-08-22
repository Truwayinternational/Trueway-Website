import  {React, useState} from 'react'

import bgContact from '../Assets/bg_contact.png'



function Form2() {

    const [formData, setFormData] = useState({
        name:"",
        phone:"",
        subject:"",
        email:"",
        message:"",
    })    

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData((prevData) => ({...prevData,[name]:value}))
    }
    
    const handleSubmit = () =>{
        console.log(formData, "the input of form")
    }


  return (
    <div>
        <div className='h-full my-10 '>
            <div className='flex justify-center' >
                <div className='bg-no-repeat bg-cover bg-center px-20 md:rounded-3xl ' style={{backgroundImage: `url(${bgContact})`}}>
                    <h2 className='text-center font-bold md:text-5xl text-2xl text-white pt-10'> No Delay ; </h2>
                    <h3 className='text-center pt-5 font-semibold tracking-wider  md:text-3xl  text-lg'>Put your details here</h3>
                    <div className='w-full px-2 mt-10'>
                        <form action="" id='contact_form' onSubmit={handleSubmit}>
                            <div className='lg:flex mb-5 w-full'>
                                <div className="w-full lg:w-1/2 mr-5">
                                    <label htmlFor="name_field" className=' text-lg text-white pt-5'> Name </label>
                                    <input className="rounded-md h-12 p-5 w-full bg-green-50 ring-0 focus:ring-0 focus:outline-none focus:border-none" type="text" name="name" id="name_field" required value={formData.name} onChange={(event)=>handleInputChange(event)}/>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label htmlFor="phone_field" className="  text-lg text-white pt-5">Phone No</label>
                                    <input className="rounded-md h-12 p-5 w-full bg-green-50 ring-0 focus:ring-0 focus:outline-none focus:border-none" type="tel" name="phone" id="phone_number" required value={formData.phone} onChange={(event)=> handleInputChange (event)}/>
                                </div>
                            </div>
                            <div className="lg:flex mb-5 w-full">
                                <div className="w-full lg:w-1/2 mr-5">
                                    <label htmlFor="subject_field" className=" text-lg text-white pt-5"> Subject </label>
                                    <input className="rounded-md h-12 p-5 w-full bg-green-50 ring-0 focus:ring-0 focus:outline-none focus:border-none" type="text" name="subject" id="subject_field" required value={formData.subject} onChange={(event)=> handleInputChange(event)}/>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label htmlFor="email_field" className=" text-lg text-white pt-5">Email ID</label>
                                    <input className="rounded-md h-12 p-5 w-full bg-green-50 ring-0 focus:ring-0 focus:outline-none focus:border-none" type="email" name="email" id="email_field" required value={formData.email} onChange={(event)=> handleInputChange(event)}/>
                                </div>
                            </div>
                            <div className="my-5 ">
                                    <label htmlFor="message_field" className=" text-lg text-white pt-5">Message</label>
                                    <textarea className="w-full rounded-md p-5 ring-0 focus:ring-0 focus:outline-none focus:border-none" name="message" id="message_field" rows="6" value={formData.message} onChange={(event)=> handleInputChange (event)}></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button type="submit" className="flex justify-center bg-white mt-8 mb-12 items-center text-black py-3 px-8 text-xl rounded-xl shadow-2xl hover:text-white hover:bg-green-700 "> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form2