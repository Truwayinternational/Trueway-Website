import { React , useState} from 'react'
import {GrMenu, GrClose} from 'react-icons/gr'
import logoMain from '../Assets/logo.png'



function Navbar() {

    const [nav, setNav] = useState(false)

    const handleClick = () =>{
        setNav(!nav)
    }

  return (
    <div className='sticky w-screen h-[80px] z-10 bg-zinc-100 drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <img src={logoMain} alt='logo_image' className='w-[200px] object-contain md:w-[200px]' />
                <ul className='hidden md:flex cursor-pointer'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Attestation</li>
                    <li>Exam Coaching</li>
                    <li>WES</li>
                    <li>PCC</li>
                    <li>Migration</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="md:hidden" onClick={handleClick}>
                {!nav ? <GrMenu className='w-5 text-3xl inline'/> : <GrClose className='w-5'/>}
            </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>About Us</li>
            <li className='border-b-2 border-zinc-300 w-full'>Attestation</li>
            <li className='border-b-2 border-zinc-300 w-full'>Exam Coaching</li>
            <li className='border-b-2 border-zinc-300 w-full'>WES</li>
            <li className='border-b-2 border-zinc-300 w-full'>PCC</li>
            <li className='border-b-2 border-zinc-300 w-full'>Migration</li>
            <li className='border-b-2 border-zinc-300 w-full'>Services</li>
            <li className='border-b-2 border-zinc-300 w-full'>Blog</li>
            <li className='border-b-2 border-zinc-300 w-full'>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar