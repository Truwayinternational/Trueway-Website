import React from 'react'
import EmbassyAttestation from './EmbassyAttestation'
import WhatIsEmbassy from './WhatIsEmbassy'
import PurposesOfEmbassyAttestation from './PurposesOfEmbassyAttestation'
import PopulerContries from './PopulerContries'
import PopularContreisCardMob from './PopularContreisCardMob'
import HowDoIGet from './HowDoIGet'
import YourBestChoice from './YourBestChoice'

// trueway services add from same home page
import WhyIsTrueway from '../../../Components/WhyisTrueway' 


import OurClients from '../OurClients'
import FaqEmbassy from './FaqEmbassy'
import DocumentRequired from './DocumentRequired'
import EducationalDocuments from './EducationalDocuments'
import NonEducational from './NonEducational'


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
        <WhyIsTrueway/>
        <OurClients />
        <FaqEmbassy/>
    </div>
  )
}

export default EmbassyAttestationIndex;