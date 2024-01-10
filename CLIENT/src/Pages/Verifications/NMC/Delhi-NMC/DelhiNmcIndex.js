import React from 'react'
import DelhiNmcHero from './DelhiNmcHero'
import DocumentDelhiNmc from './DocumentDelhiNmc'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../../OtherServices/OurClients'

function DelhiNmcIndex() {
  return (
    <div>
        <DelhiNmcHero/>
        <DocumentDelhiNmc/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
    </div>
  )
}

export default DelhiNmcIndex