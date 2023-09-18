import React from 'react'
import EmbassyAttestation from './EmbassyAttestation'
import WhatIsEmbassy from './WhatIsEmbassy'
import PurposesOfEmbassyAttestation from './PurposesOfEmbassyAttestation'
import PopulerContries from './PopulerContries'
import PopularContreisCardMob from './PopularContreisCardMob'

function EmbassyAttestation_index() {
  return (
    <div>
        <EmbassyAttestation />
        <WhatIsEmbassy />
        <PurposesOfEmbassyAttestation />
        <PopulerContries />  {/*  countries in Large screen size */}
        <PopularContreisCardMob /> {/*  countries in mobile screen size */}
    </div>
  )
}

export default EmbassyAttestation_index