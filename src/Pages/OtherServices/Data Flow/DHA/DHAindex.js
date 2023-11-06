import React from 'react'
import DHAhero from './DHAhero'
import ContactforDataflow from '../ContactforDataflow'
import PSVinDubai from './PSVinDubai'
import ProcessForDubai from './ProcessForDubai'
import DocumentsForDHA from './DocumentsForDHA'
import Form2 from '../../../../Components/Forms/Form2'
import FaqDHAdataflow from './FaqDHAdataflow'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'



function DHAindex() {
  return (
    <div>
        <DHAhero/>
        <ContactforDataflow/>
        <PSVinDubai/>
        <ProcessForDubai/>
        <DocumentsForDHA/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqDHAdataflow/>
    </div>
  )
}

export default DHAindex