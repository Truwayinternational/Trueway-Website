import React from 'react'
import MOHhero from './MOHhero'
import PrimarySourceVerification from './PrimarySourceVerification'
import ProcessForMOH from './ProcessForMOH'
import DocumentsRequiredMOH from './DocumentsRequiredMOH'
import Form2 from '../../../../Components/Forms/Form2'
import FaqMOH from './FaqMOH'



function MohIndex() {

  return (

    <div>
        <MOHhero/>
        <PrimarySourceVerification/>
        <ProcessForMOH/>
        <DocumentsRequiredMOH/>
        <Form2/>
        <FaqMOH/>
    </div>
  )
}

export default MohIndex