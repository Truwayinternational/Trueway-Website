import React from 'react'
import {Helmet} from "react-helmet";

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
import WeProvideAttestaionFor from './WeProvideAttestaionFor'

// trueway services add from same home page
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqEmbassy from './FaqEmbassy'


function EmbassyAttestationIndex() {
  return ( 
    <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Embassy Attestation Services India | Fast & Secure Certificate Verification</title>
          <meta name="description" content="If you plan to visit a foreign country, Trueway offers affordable embassy attestation services for UAE, Qatar, Oman, Kuwait, Bahrain, Malaysia. Book a free quote now" />
          <link rel="canonical" href="http://truewayinternational.com/embassy-attestation" />
        </Helmet>

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
        <WeProvideAttestaionFor />
        <OurCommitment/>
        <OurClients />
        <Form2/>
        <FaqEmbassy/>
    </>
  )
}

export default EmbassyAttestationIndex;