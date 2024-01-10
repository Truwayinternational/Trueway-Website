import React from 'react'
import KeralaNmcHero from './KeralaNmcHero'
import DocumentKeralaNmc from './DocumentKeralaNmc'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../../OtherServices/OurClients'

function KeralaNmcIndex() {
  return (
    <div>
        <KeralaNmcHero/>
        <DocumentKeralaNmc/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
    </div>
  )
}

export default KeralaNmcIndex