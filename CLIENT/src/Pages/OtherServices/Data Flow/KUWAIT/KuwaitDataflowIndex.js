import React from 'react'
import KuwaitDataflowHero from './KuwaitDataflowHero'
import ContactforDataflow from '../ContactforDataflow'
import PSVinKuwait from './PSVinKuwait'
import ProcessForKuwait from './ProcessForKuwait'
import DocumentsForKuwait from './DocumentsForKuwait'
import Form2 from '../../../../Components/Forms/Form2'
import FaqKuwaitDataflow from './FaqKuwaitDataflow'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'


function KuwaitDataflowIndex() {
  return (
    <div>
        <KuwaitDataflowHero/>
        <ContactforDataflow/>
        <PSVinKuwait/>
        <ProcessForKuwait/>
        <DocumentsForKuwait/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqKuwaitDataflow/>
    </div>
  )
}

export default KuwaitDataflowIndex