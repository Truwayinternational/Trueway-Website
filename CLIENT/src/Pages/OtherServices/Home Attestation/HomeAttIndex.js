
import React from 'react'
import HomeAttestation from './HomeAttestation'
import WhatisHome from './WhatisHome'
import PurposesOfHome from './PurposesOfHome'
import ProcedureForHome from './ProcedureForHome'
import DocumetnsForHome from './DocumetnsForHome'
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqHome from './FaqHome'


function HomeAttIndex() {

  return (
    <div>
        <HomeAttestation/>
        <WhatisHome/>
        <PurposesOfHome/>
        <ProcedureForHome/>
        <DocumetnsForHome/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqHome/>
    </div>
  )
}

export default HomeAttIndex