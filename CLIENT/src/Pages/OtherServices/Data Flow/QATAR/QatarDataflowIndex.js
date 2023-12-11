import React from 'react'
import QatarDataflowHero from './QatarDataflowHero'
import ContactforDataflow from '../ContactforDataflow'
import PSVinQatar from './PSVinQatar'
import ProcessForQatar from './ProcessForQatar'
import DocumentsForQatar from './DocumentsForQatar'
import Form2 from '../../../../Components/Forms/Form2'
import FaqQatarDataflow from './FaqQatarDataflow'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'

function QatarDataflowIndex() {
  return (
    <div>
        <QatarDataflowHero/>
        <ContactforDataflow/>
        <PSVinQatar/>
        <ProcessForQatar/>
        <DocumentsForQatar/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqQatarDataflow/>
    </div>
  )
}

export default QatarDataflowIndex