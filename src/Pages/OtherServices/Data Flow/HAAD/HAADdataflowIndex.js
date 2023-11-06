import React from 'react'
import HAADdataflowHero from './HAADdataflowHero'
import ContactforDataflow from '../ContactforDataflow'
import PSVinAbudhabi from './PSVinAbudhabi'
import ProcessInHAAD from './ProcessInHAAD'
import DocumentsForHAAD from './DocumentsForHAAD'
import Form2 from '../../../../Components/Forms/Form2'
import FaqHAADdataflow from './FaqHAADdataflow'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'



function HAADdataflowIndex() {


  return (
    <div>
        <HAADdataflowHero/>
        <ContactforDataflow/>
        <PSVinAbudhabi/>
        <ProcessInHAAD/>
        <DocumentsForHAAD/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqHAADdataflow/>
    </div>
  )
}

export default HAADdataflowIndex