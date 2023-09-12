import React, { useState } from 'react'
import LogoMain from '../../../Assets/logo.png'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

import {TiThMenu} from 'react-icons/ti'
import {GrClose} from 'react-icons/gr'

function NavBar() {

    const [open, SetOpen] = useState(false)

  return <nav className='bg-white sticky top-0 z-10 border border-b-1 border-gray-300'>
        <div className='flex items-center lg:text-md text-sm font-semibold  justify-around'>
            <div className='Z-50 p-6 lg:w-auto w-full flex justify-between'>
                <img src={LogoMain} alt='logo' className='lg:ms-0  items-center  cursor-pointer h-12  '/>
                <div className='lg:hidden text-3xl' onClick={()=>SetOpen(!open)}>
                    { open ?  <GrClose/>: <TiThMenu />} 
                </div>
            </div>
            <ul className='lg:flex hidden Capitalize items-center gap-2 font-[poppins]'>
                <li>
                    <Link to="/" className='py-3  inline-block hover:text-green-500 '> 
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className='py-3 inline-block hover:text-green-500 '> 
                        About
                    </Link>
                </li>
                <NavLinks />
                <li>
                    <Link to="/wes" className='py-3 inline-block hover:text-green-500 '> 
                        WES
                    </Link>
                </li>
                <li>
                    <Link to="/services" className='py-3 inline-block hover:text-green-500 '> 
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/blogs" className='py-3 inline-block hover:text-green-500 '> 
                        Blogs 
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className='py-3 inline-block hover:text-green-500 '> 
                       Contact
                    </Link>
                </li>
            </ul>

            {/* moblie Nav  */}
            
            <ul className={!open ? "hidden left-[100%] " : "absolute bg-green-500 w-full px-8 mt-[700px] "}>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/" className='text-xl text-white'> 
                    Home
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/about" className='text-xl text-white'> 
                    About
                    </Link>
                </li>
                <div>
                <li className='border-b-2 border-zinc-300 w-full text-xl text-white'> 
                    Attestation
                </li>
                </div>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/#!" className=' text-xl text-white '> 
                        Dataflow
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/#!" className=' text-xl text-white '> 
                        Exam Coaching
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/pcc" className=' text-xl text-white '> 
                        PCC
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/migration" className=' text-xl text-white '> 
                        Migration
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/wes" className=' text-xl text-white '> 
                        WES
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/services" className=' text-xl text-white '> 
                        Services
                    </Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/contact" className=' text-xl text-white '> 
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default NavBar