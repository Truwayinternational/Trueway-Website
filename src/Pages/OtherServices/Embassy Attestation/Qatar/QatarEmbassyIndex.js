import React from 'react'
import QatarEmbassyHero from './QatarEmbassyHero'
import SiginificanceOfQatarEmbassy from './SiginificanceOfQatarEmbassy'
import HowDoIGetQatar from './HowDoIGetQatar'
import DocumentsRequired from './DocumentsRequired'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import FaqQatar from './FaqQatar'



function qatarEmbassyIndex() {
  return (
    <div>
        <QatarEmbassyHero/>
        <SiginificanceOfQatarEmbassy/>
        <HowDoIGetQatar/>
        <DocumentsRequired/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqQatar/>
    </div>
  )
}

export default qatarEmbassyIndex