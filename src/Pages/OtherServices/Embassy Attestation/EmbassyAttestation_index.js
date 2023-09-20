import React from 'react'
import EmbassyAttestation from './EmbassyAttestation'
import WhatIsEmbassy from './WhatIsEmbassy'
import PurposesOfEmbassyAttestation from './PurposesOfEmbassyAttestation'
import PopulerContries from './PopulerContries'
import PopularContreisCardMob from './PopularContreisCardMob'
import HowDoIGet from './HowDoIGet'
import YourBestChoice from './YourBestChoice'
import OurClients from '../OurClients'
import FaqEmbassy from './FaqEmbassy'


function EmbassyAttestation_index() {
  return (
    <div>
        <EmbassyAttestation />
        <WhatIsEmbassy />
        <PurposesOfEmbassyAttestation />
        <PopulerContries />  {/*  countries in Large screen size */}
        <PopularContreisCardMob /> {/*  countries in mobile screen size */}
        <HowDoIGet />
        <YourBestChoice />
        <OurClients />
        <FaqEmbassy/>
    </div>
  )
}

export default EmbassyAttestation_index