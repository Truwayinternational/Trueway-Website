import React from 'react'
import OmanDataFlowHero from './OmanDataFlowHero'
import ContactforDataflow from '../ContactforDataflow'
import PSVinOman from './PSVinOman'
import ProcessForOman from './ProcessForOman'
import DocumentsForOman from './DocumentsForOman'
import Form2 from '../../../../Components/Forms/Form2'
import FaqOmanDataflow from './FaqOmanDataflow'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'

function OmanDataflowIndex() {
  return (
    <div>
        <OmanDataFlowHero/>
        <ContactforDataflow/>
        <PSVinOman/>
        <ProcessForOman/>
        <DocumentsForOman/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqOmanDataflow/>
    </div>
  )
}

export default OmanDataflowIndex