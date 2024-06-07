import React, {useEffect} from 'react'

function WebForm() {
  useEffect(()=> {
    const onDocumentReady =()=>{
      const body = document.body;
      const script = document.createElement('script');
      script.src = 'https://truewayinternational.myfreshworks.com/crm/sales/web_forms/981881e10ea8e4f62f04524578ae90a3f7c65bff05afc4c9f2ca32896556ca00/form.js';
      script.crossOrigin = 'anonymous';
      script.id = 'fs_981881e10ea8e4f62f04524578ae90a3f7c65bff05afc4c9f2ca32896556ca00';
      // document.body?.appendChild(script);
      if (!document.getElementById('fs_981881e10ea8e4f62f04524578ae90a3f7c65bff05afc4c9f2ca32896556ca00')){
        document.getElementById('test').append(script)
      }
      console.log(body);
    };
    // check if document is already loaded
    if (document.readyState === 'loading') {
      // if not, wait for it to load 
      document.addEventListener('DOMContentLoaded', onDocumentReady); 
    }else{
      // if already loaded, execute immediately
      onDocumentReady();
    }
    // cleanup function
    return () => {
      document.removeEventListener('DOMContentLoaded', onDocumentReady);
    };
  }, []);
  return (
    <div id="test" className='my-10'>
        
    </div>
  )
}

export default WebForm



