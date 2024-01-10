import React from 'react'
import PunjabNmcHero from './PunjabNmcHero'
import DocumentPunjabNmc from './DocumentPunjabNmc'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../../OtherServices/OurClients'

function PunjabNmcIndex() {
  return (
    <div>
        <PunjabNmcHero/>
        <DocumentPunjabNmc/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
    </div>
  )
}

export default PunjabNmcIndex