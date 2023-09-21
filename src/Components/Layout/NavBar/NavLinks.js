import React from 'react';
import {Link} from 'react-router-dom'
import {links} from './LinksData'


function NavLinks() {
  return (
    <>
        {
          links.map((link, index) => (
            <div key={index} >
              <div className='lg:px-3 px-3 text-xl lg:text-sm text-left lg:cursor-pointer group'>
                <h1 className='py-7 hover:text-green-500 '> {link.name } </h1>
                {link.subMenu && (
                  <div className=''>
                    <div className='absolute top-20 hidden group-hover:lg:block hover:lg:block'>
                        {/* rotate a small div for navlinks */}
                      <div className='py-3'>  
                        <div className='w-4 h-4 left-3 absolute mt-1 bg-green-50 rotate-45'></div>
                      </div>
                      <div className='bg-green-50 rounded-xl p-5 grid grid-cols-3 gap-10'>
                        {link.subLinks.map((mysublinks, index)=>(
                            <div key={index}>
                              <h1 className='text-md font-semibold'>
                                <Link to={mysublinks.headLink}>{mysublinks.Head}</Link>
                              </h1>
                              {mysublinks.subLink.map((slink, index)=>(
                                <li key={index} className='text-xs text-gray-600 py-1 px-1 '>
                                  <Link to={slink.link} className='hover:text-green-600 '> {slink.name} </Link>
                                </li>
                              ))} 
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        }
    </>
  )
}

export default NavLinks