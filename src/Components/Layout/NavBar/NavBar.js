import React  from 'react'
import LogoMain from '../../../Assets/logo.webp'
import { NavLink} from 'react-router-dom'
import NavLinks from './NavLinks'


import MobNavbar from './MobNavbar'

// clicking to nav link and scroll to top section
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior for a smoother transition
    });
}

function NavBar() {
    
    return <nav className='bg-white sticky top-0 z-10 border border-b-1 border-gray-300'>
        <div className='flex items-center 2xl:text-xl text-sm font-semibold  justify-around'>
            <div className='lg:Z-50  p-6 lg:w-auto w-full flex justify-between'>
                <img src={LogoMain} alt='logo' className='lg:ms-0 mx-auto items-center  cursor-pointer h-12  '/>
            </div>

            {/* web nav bar */}

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
        </div>

        {/* moblie Nav  */}
        <MobNavbar/>
    </nav>
}

export default NavBar;