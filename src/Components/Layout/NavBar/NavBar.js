import { React, useState } from 'react'
import LogoMain from '../../../Assets/logo.png'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'

import {TiThMenu} from 'react-icons/ti'
import {GrClose} from 'react-icons/gr'

// clicking to nav link and scroll to top section
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior for a smoother transition
    });
}

function NavBar() {

const [open, SetOpen] = useState(false)
    
  return <nav className='bg-white sticky top-0 z-10 border border-b-1 border-gray-300'>
        <div className='flex items-center lg:text-md text-sm font-semibold  justify-around'>
            <div className='Z-50 p-6 lg:w-auto w-full flex justify-between'>
                <img src={LogoMain} alt='logo' className='lg:ms-0  items-center  cursor-pointer h-12  '/>
                <div className='lg:hidden text-3xl' onClick={()=>SetOpen(!open)}>
                    { open ?  <GrClose/>: <TiThMenu /> } 
                </div>
            </div>
            <ul className='lg:flex hidden Capitalize items-center gap-2 font-[poppins] cursor-pointer'>
                <li>
                    <NavLink to="/" className='py-3 cursor-pointer  inline-block hover:text-green-500 [&.active]:text-green-600 [&.active]:font-bold' onClick={scrollToTop} > 
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className='py-3 cursor-pointer  inline-block hover:text-green-500 [&.active]:text-green-600 [&.active]:font-bold' onClick={scrollToTop}> 
                        About
                    </NavLink>
                </li>
                <NavLinks />
                <li>
                    <NavLink to="/wes" className='py-3 cursor-pointer  inline-block hover:text-green-500 [&.active]:text-green-600 [&.active]:font-bold' onClick={scrollToTop}> 
                        WES
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" className='py-3 cursor-pointer  inline-block hover:text-green-500 [&.active]:text-green-600 [&.active]:font-bold' onClick={scrollToTop}> 
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blogs" className='py-3 cursor-pointer  inline-block hover:text-green-500 [&.active]:text-green-600 [&.active]:font-bold' onClick={scrollToTop}> 
                        Blogs 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className='py-3 cursor-pointer  inline-block hover:text-green-500 [&.active]:text-green-600 [&.active]:font-bold ' onClick={scrollToTop}> 
                       Contact
                    </NavLink>
                </li>
            </ul>

            {/* moblie Nav  */}
            
            <ul className={!open ? "hidden left-[100%] " : "absolute bg-green-600 w-full px-8 mt-[700px] "}>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <NavLink to="/" className='text-xl text-white'> 
                    Home
                    </NavLink>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <NavLink to="/about" className='text-xl text-white'> 
                    About
                    </NavLink>
                </li>
                <div>
                <li className='border-b-2 border-zinc-300 w-full text-xl text-white'> 
                    Attestation
                </li>
                </div>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <NavLink to="/#!" className=' text-xl text-white '> 
                        Dataflow
                    </NavLink>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <NavLink to="/#!" className=' text-xl text-white '> 
                        Exam Coaching
                    </NavLink>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <NavLink to="/pcc" className=' text-xl text-white '> 
                        PCC
                    </NavLink>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <NavLink to="/migration" className=' text-xl text-white '> 
                        Migration
                    </NavLink>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <NavLink to="/wes" className=' text-xl text-white '> 
                        WES
                    </NavLink>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <NavLink to="/services" className=' text-xl text-white '> 
                        Services
                    </NavLink>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <NavLink to="/contact" className=' text-xl text-white '> 
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
}

export default NavBar