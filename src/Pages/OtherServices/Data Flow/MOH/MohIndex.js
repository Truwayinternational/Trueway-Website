import React from 'react'
import MOHhero from './MOHhero'
import PrimarySourceVerification from './PrimarySourceVerification'
import ProcessForMOH from './ProcessForMOH'
import DocumentsRequiredMOH from './DocumentsRequiredMOH'
import Form2 from '../../../../Components/Forms/Form2'
import FaqMOH from './FaqMOH'

// add all dataflow inner pages
import ContactforDataflow from '../ContactforDataflow'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'



function MohIndex() {

  return (

    <div>
        <MOHhero/>
        <ContactforDataflow/>
        <PrimarySourceVerification/>
        <ProcessForMOH/>
        <DocumentsRequiredMOH/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqMOH/>
    </div>
  )
}

export default MohIndex