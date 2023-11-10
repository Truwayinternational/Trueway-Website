import React from 'react'
import IeltsHero from './IeltsHero'
import WhatIsIELTS from './WhatIsIELTS'
import WhoandWhyIelts from './WhoandWhyIelts'
import UnderstandIELTS from './UnderstandIELTS'
import CharacteristicsIELTS from './CharacteristicsIELTS'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import Form2 from '../../../../Components/Forms/Form2'
import FaqIELTS from './FaqIELTS'

function IeltsIndex() {
  return (
    <div>
        <IeltsHero/>
        <WhatIsIELTS/>
        <WhoandWhyIelts/>
        <UnderstandIELTS/>
        <CharacteristicsIELTS/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqIELTS/>
    </div>
  )
}

export default IeltsIndex