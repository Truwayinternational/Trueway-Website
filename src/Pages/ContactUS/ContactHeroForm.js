import  React, {useState} from 'react'

// social media icons 
import {MdOutlineEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {PiPhoneCallFill} from 'react-icons/pi'
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube} from 'react-icons/fa'


function ContactHeroForm() {

    const [status, setStatus] = useState("Submit")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, number, message } = e.target.elements
        let details = {
            name: name.value,
            number: number.value,
            email: email.value,
            message: message.value
        }
        let response = await fetch("http://localhost:3000/contact", {
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
        <div className='lg:flex  justify-center max-w-[1240px] mx-auto place-content-center lg:my-20 my-10'>
            <div className='lg:w-1/2 lg:mx-10'>
                <div className='px-5 md:mx-20 lg:mx-auto'> 
                    <p className='text-md md:text-lg text-justify text-gray-900 font-poppins lg:p-0'>
                        Trueway International is always a call away, and we are more than happy to lend a hand. Our working hours are from <b> 9:30 a.m. to 5:30 p.m</b>, but our award-winning support system and customer care are always for you, round the clock.
                    </p>
                    <h3 className='text-black font-HeadingFont font-bold md:text-3xl text-2xl py-10'>
                        Reach out to us
                    </h3>
                    {/* email option  */}
                    <div className='py-2 inline-flex'>
                        <div className='bg-green-600 p-2 rounded-full cursor-pointer'>
                            <MdOutlineEmail className='text-white md:text-3xl text-xl'/>
                        </div>
                        <a href='mailto:tvm@truewayinternational.com'className='md:text-xl text-lg font-HeadingFont font-semibold md:ml-5 ml-2 my-auto' target='_blank' rel="noopener noreferrer">
                            tvm@truewayinternational.com
                        </a>
                    </div>
                    <hr />

                    {/* call option */}
                    <div className='py-2 inline-flex'>
                        <div className='bg-green-600 p-2 rounded-full cursor-pointer mr-2'>
                            <a href="tel:+918327626262" target='_blank' rel="noopener noreferrer">
                                <PiPhoneCallFill className='text-white md:text-3xl text-xl'/>
                            </a>
                        </div>
                        <div className='bg-green-600 p-2 rounded-full cursor-pointer mx-2'>
                            <a href="https://wa.link/c3ukjh" target='_blank' rel="noopener noreferrer">
                            <IoLogoWhatsapp className='text-white md:text-3xl text-xl'/>
                            </a>
                        </div>
                        <a href='tel:+918327626262'className='md:text-3xl text-xl font-HeadingFont font-semibold md:ml-4 ml-2 my-auto' target='_blank' rel="noopener noreferrer">
                            +91 83276 26262
                        </a>
                    </div>
                    <hr />

                    {/* all other Social media icons  */}
                    <div className='py-2 inline-flex'>
                        <div className='bg-green-600 p-2 rounded-full cursor-pointer mr-2'>
                            <a href="https://www.facebook.com/truewayinternational/" target='_blank' rel="noopener noreferrer">
                                <FaFacebookF className='text-white md:text-3xl text-xl'/>
                            </a>
                        </div>
                        <div className='bg-green-600 p-2 rounded-full cursor-pointer mx-2'>
                            <a href="https://www.instagram.com/truewayinternational/" target='_blank' rel="noopener noreferrer">
                            <FaInstagram className='text-white md:text-3xl text-xl'/>
                            </a>
                        </div>
                        <div className='bg-green-600 p-2 rounded-full cursor-pointer mx-2'>
                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTruewayinterna1" target='_blank' rel="noopener noreferrer">
                            <FaTwitter className='text-white md:text-3xl text-xl'/>
                            </a>
                        </div>
                        <div className='bg-green-600 p-2 rounded-full cursor-pointer mx-2'>
                            <a href="https://www.linkedin.com/company/trueway-international-tvm/" target='_blank' rel="noopener noreferrer">
                            <FaLinkedinIn className='text-white md:text-3xl text-xl'/>
                            </a>
                        </div>
                        <div className='bg-green-600 p-2 rounded-full cursor-pointer mx-2'>
                            <a href="https://www.youtube.com/channel/UCRq22m2bbJ5AONWGQug9FpA" target='_blank' rel="noopener noreferrer">
                            <FaYoutube className='text-white md:text-3xl text-xl'/>
                            </a>
                        </div>
                    </div>

                    {/* Our Head office */}
                    <h3 className='text-black font-HeadingFont font-bold md:text-3xl text-2xl pt-10'>
                        Our Head Office
                    </h3>
                    <div className='pb-3 lg:pr-44'>
                        <h3 className='text-green-600 font-HeadingFont font-bold md:text-2xl text-xl pt-10 pb-5'>
                            Trueway International
                        </h3>
                        <a href="https://www.google.com/maps/place/Trueway+international/@8.5648616,76.8732188,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05bb83a7f4081b:0xefc31dbc16018dff!8m2!3d8.5648563!4d76.8757937!16s%2Fg%2F11pdw9prh1?authuser=0&entry=ttu" target='_blank' rel="noopener noreferrer" className='text-md md:text-lg text-justify text-gray-900 font-poppins font-semibold'>
                        Logtech towers, First floor, Bypass Jn, Kazhakkoottam, Trivandrum, Kerala - 695582
                        </a>
                    </div>
                </div>
            </div>

            {/* contact form placed here */}
            <div className='lg:w-1/2 lg:mr-20 lg:mx-0 md:mx-20 mx-5 mt-10 lg:mt-0'>
                <div className='w-full'>
                    <div className='grid' >
                        <div className='bg-zinc-200 rounded-3xl'>
                            <h2 className='text-center font-bold md:text-3xl text-2xl text-black py-10 px-5 font-HeadingFont'> Fill Here For Quick Response </h2>
                            <div className='w-full md:px-10 px-4'>
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full my-3">
                                        <label htmlFor="name_field" className=' text-lg font-HeadingFont font-semibold text-black pt-5'> Name </label>
                                        <input className="rounded-lg h-12 p-5 w-full  ring-0 focus:ring-0 focus:outline-none focus:border-none" type="text" name="name" id="name" required />
                                    </div>

                                    <div className="w-full my-3">
                                        <label htmlFor="phone_field" className="text-lg font-HeadingFont font-semibold text-black pt-5">Phone Number</label>
                                        <input className="rounded-lg h-12 p-5 w-full  ring-0 focus:ring-0 focus:outline-none focus:border-none" type="tel" name="phone" id="number" required />
                                    </div>

                                    <div className="w-full my-3">
                                        <label htmlFor="email_field" className="text-lg font-HeadingFont font-semibold text-black pt-5">Email ID</label>
                                        <input className="rounded-lg h-12 p-5 w-full ring-0 focus:ring-0 focus:outline-none focus:border-none" type="email" name="email" id="email" required />
                                    </div>

                                    <div className="w-full my-3">
                                        <label htmlFor="message_field" className="text-lg font-HeadingFont font-semibold text-black pt-5">Message</label>
                                        <textarea className="w-full rounded-lg p-5 ring-0 focus:ring-0 focus:outline-none focus:border-none" name="message" id="message" rows="6" />
                                    </div>
                                <div className='flex justify-center'>
                                    <button className="flex justify-center bg-green-600 text-white mt-8 mb-12 items-center font-HeadingFont  py-3 px-8 text-xl rounded-xl shadow-2xl hover:bg-green-800 " type="submit"> {status}</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactHeroForm