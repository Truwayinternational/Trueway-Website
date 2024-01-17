import React from 'react'
import KeralaAhpraHero from './KeralaAhpraHero'
import DocumentKeralaAhpra from './DocumentKeralaAhpra'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../../OtherServices/OurClients'

function KeralaAhpraIndex() {
  return (
    <div>
      <KeralaAhpraHero/>
      <DocumentKeralaAhpra/>
      <Form2/>
      <OurCommitment/>
      <OurClients/>
    </div>
  )
}

export default KeralaAhpraIndex