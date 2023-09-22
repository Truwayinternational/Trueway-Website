import React from 'react'
import EmbassyAttestation from './EmbassyAttestation'
import WhatIsEmbassy from './WhatIsEmbassy'
import PurposesOfEmbassyAttestation from './PurposesOfEmbassyAttestation'
import PopulerContries from './PopulerContries'
import PopularContreisCardMob from './PopularContreisCardMob'
import HowDoIGet from './HowDoIGet'
import YourBestChoice from './YourBestChoice'

// trueway services import
import WhyIsTrueway from '../../../Components/WhyisTrueway' 

import OurClients from '../OurClients'
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
        <YourBestChoice />
        <WhyIsTrueway/>
        <OurClients />
        <FaqEmbassy/>
    </div>
  )
}

export default EmbassyAttestationIndex;