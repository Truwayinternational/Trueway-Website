import  React, {useState} from 'react'

import bgContact from '../../Assets/bg_contact.webp'




function Form2() {

    const [status, setStatus] = useState("Submit")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, number,subject, message } = e.target.elements
        let details = {
            name: name.value,
            number: number.value,
            email: email.value,
            subject:subject.value,
            message: message.value
        }
        let response = await fetch("https://truewayinternational.com/" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(details)
        })
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
        window.location.reload();
    }

  return (
    <>
        <div className='h-full my-10 '>
            <div className='flex justify-center' >
                <div className='bg-no-repeat bg-cover bg-center px-12 md:rounded-3xl ' style={{backgroundImage: `url(${bgContact})`}}>
                    <h2 className='text-center font-bold md:text-5xl text-4xl text-white pt-10 font-HeadingFont'> No Delay ; </h2>
                    <h3 className='text-center pt-5 font-bold tracking-wider  md:text-3xl  text-2xl font-HeadingFont'>Put your details here</h3>
                    <div className='w-full mt-10'>
                        <form onSubmit={handleSubmit} >
                            <div className='lg:flex mb-5 w-full'>
                                <div className="w-full lg:w-1/2 mr-5">
                                    <label htmlFor="name_field" className=' text-lg text-white pt-5'> Name </label>
                                    <input className="rounded-md h-12 p-5 w-full bg-green-50 ring-0 focus:ring-0 focus:outline-none focus:border-none" type="text" name="name" id="name" required/>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label htmlFor="phone_field" className="  text-lg text-white pt-5">Phone No</label>
                                    <input className="rounded-md h-12 p-5 w-full bg-green-50 ring-0 focus:ring-0 focus:outline-none focus:border-none" type="tel" name="phone" id="number" required />
                                </div>
                            </div>
                            <div className="lg:flex mb-5 w-full">
                                <div className="w-full lg:w-1/2 mr-5">
                                    <label htmlFor="subject_field" className=" text-lg text-white pt-5"> Subject </label>
                                    <input className="rounded-md h-12 p-5 w-full bg-green-50 ring-0 focus:ring-0 focus:outline-none focus:border-none" type="text" name="subject" id="subject" required />
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label htmlFor="email_field" className=" text-lg text-white pt-5">Email ID</label>
                                    <input className="rounded-md h-12 p-5 w-full bg-green-50 ring-0 focus:ring-0 focus:outline-none focus:border-none" type="email" name="email" id="email"/>
                                </div>
                            </div>
                            <div className="my-5 ">
                                    <label htmlFor="message_field" className=" text-lg text-white pt-5">Message</label>
                                    <textarea className="w-full rounded-md p-5 ring-0 focus:ring-0 focus:outline-none focus:border-none" name="message" id="message" rows="6" ></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button className="flex justify-center bg-white mt-8 mb-12 items-center text-black py-3 px-8 text-xl rounded-xl shadow-2xl hover:text-white hover:bg-green-700 " type="submit">{status}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Form2