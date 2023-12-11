import React from 'react'
import errorImg from '../Assets/404error.webp'
import { NavLink  } from 'react-router-dom'



function ErrorPage() {
  return (
    <div className='h-full my-10 flex flex-col justify-center items-center'>
      <img className='lg:h-[70vh] lg:w-[50vw]' src={errorImg} alt="404 ERROR" />
      <NavLink className="py-3 px-12 bg-green-400 border-none rounded-lg cursor-pointer text-xl font-HeadingFont font-semibold hover:bg-green-600 hover:text-white " to="/" >Back to Home</NavLink>
    </div>
  )
}

export default ErrorPage