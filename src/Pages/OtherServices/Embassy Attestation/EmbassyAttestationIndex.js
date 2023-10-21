import React from 'react'
import EmbassyAttestation from './EmbassyAttestation'
import WhatIsEmbassy from './WhatIsEmbassy'
import PurposesOfEmbassyAttestation from './PurposesOfEmbassyAttestation'
import PopulerContries from './PopulerContries'
import PopularContreisCardMob from './PopularContreisCardMob'
import HowDoIGet from './HowDoIGet'
import YourBestChoice from './YourBestChoice'
import DocumentRequired from './DocumentRequired'
import EducationalDocuments from './EducationalDocuments'
import NonEducational from './NonEducational'

// trueway services add from same home page
import OurCommitment from '../../../Components/OurCommitment'

import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqEmbassy from './FaqEmbassy'


function EmbassyAttestationIndex() {
  return (
    <div>
        <EmbassyAttestation />
        <WhatIsEmbassy />
        <PurposesOfEmbassyAttestation />
        <PopulerContries />  {/*  countries in Large screen size and countries added in large size hide in mobile screen */}
        <PopularContreisCardMob /> {/*  countries in mobile screen size */}
        <HowDoIGet />
        <DocumentRequired/>
        <YourBestChoice />
        <EducationalDocuments/>
        <NonEducational/>
        <OurCommitment/>
        <OurClients />
        <Form2/>
        <FaqEmbassy/>
    </div>
  )
}

export default EmbassyAttestationIndex;