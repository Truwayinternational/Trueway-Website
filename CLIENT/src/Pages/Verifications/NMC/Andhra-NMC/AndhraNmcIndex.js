import React from 'react'
import AndhraNmcHero from './AndhraNmcHero'
import DocumentAndhraNmc from './DocumentAndhraNmc'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../../OtherServices/OurClients'

function AndhraNmcIndex() {
  return (
    <div>
        <AndhraNmcHero/>
        <DocumentAndhraNmc/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
    </div>
  )
}

export default AndhraNmcIndex