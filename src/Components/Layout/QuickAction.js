import React from 'react'

import whatsappMain from '../../Assets/whatsappmain.png'

function QuickAction() {

  return (
    <div className=''>
        <div className='fixed max-w-[1240px] place-content-center flex md:right-10 right-5  z-10 top-1/2'>
            <a  href='https://wa.link/c3ukjh' target='_blank' rel="noopener noreferrer"> 
                <img className='md:w-20 w-16 shadow-2xl rounded-full ' src={whatsappMain} alt="whatsapp_chatting" /> 
            </a>
        </div>
    </div>
  )
}

export default QuickAction