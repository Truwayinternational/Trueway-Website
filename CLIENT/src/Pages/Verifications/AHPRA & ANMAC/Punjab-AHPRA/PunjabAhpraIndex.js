import React from 'react'
import PunjabAhpraHero from './PunjabAhpraHero'
import DocumentPunjabAhpra from './DocumentPunjabAhpra'
import OurCommitment from '../../../../Components/OurCommitment'
import Form2 from '../../../../Components/Forms/Form2'
import OurClients from '../../../OtherServices/OurClients'

function PunjabAhpraIndex() {
  return (
    <div>
        <PunjabAhpraHero/>
        <DocumentPunjabAhpra/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
    </div>
  )
}

export default PunjabAhpraIndex