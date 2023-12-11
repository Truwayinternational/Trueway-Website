import React from 'react'
import ApostilleHero from './ApostilleHero'
import WhatIsApostille from './WhatIsApostille'
import PurposeOfApostille from './PurposeOfApostille'
import ProcedureOfApostille from './ProcedureOfApostille'
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqApostille from './FaqApostille'

function ApostilleIndex() {
  return (
    <div>
        <ApostilleHero/>
        <WhatIsApostille/>
        <PurposeOfApostille/>
        <ProcedureOfApostille/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqApostille/>
    </div>
  )
}

export default ApostilleIndex