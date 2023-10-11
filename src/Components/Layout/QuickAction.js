import React, {useState} from 'react'

import whatsappMain from '../../Assets/whatsappmain.png'
import quickEnguiry from '../../Assets/Q.png'

import whatsapp from '../../Assets/whatsapp.png'
import callIcon from '../../Assets/Phone.png'



function QuickAction() {

  const [show, setShow] = useState(false)

  return (
    <div className=''>
        <div className='flex fixed max-w-[1240px] place-content-center left-0 z-10 top-[48%]'>
          <img className='md:w-12 w-10  cursor-pointer' src={quickEnguiry} alt="quick enquiry toggle" onClick={ ()=> setShow (!show) }/>

            {/* show and hide quick enquiry */}
            { show &&  
              <div className='quickEnquiry'>
                <a  href='tel:+918327626262' target='_blank' rel="noopener noreferrer"> 
                  <img className='md:w-[26px] w-5 pt-7 ml-2' src={callIcon} alt="whatsapp_chatting" /> 
                </a>
              
                <a  href='https://wa.link/c3ukjh' target='_blank' rel="noopener noreferrer"> 
                  <img className='md:w-10 w-8  pt-3 ml-1' src={whatsapp} alt="whatsapp_chatting" /> 
                </a>
              </div>
            }
        </div>
        {/* whatsapp enquiry icon  right side */}
        <div className='flex fixed max-w-[1240px] place-content-center md:right-10 right-4  z-10 top-1/2'>
            <a  href='https://wa.link/c3ukjh' target='_blank' rel="noopener noreferrer"> 
                <img className='md:w-20 w-12 shadow-2xl rounded-full ' src={whatsappMain} alt="whatsapp_chatting"/> 
            </a>
        </div>
    </div>
  )
}

export default QuickAction