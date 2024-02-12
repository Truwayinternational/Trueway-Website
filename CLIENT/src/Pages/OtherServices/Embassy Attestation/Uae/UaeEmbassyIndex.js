import React from 'react'
import {Helmet} from "react-helmet";

import UaeEmbassyHero from './UaeEmbassyHero'
import PurposeOfUaeEmbassy from './PurposeOfUaeEmbassy'
import HowDoIGetUae from './HowDoIGetUae'
import DocumentsRequiredForUae from './DocumentsRequiredForUae'
import TruewayBetterForUae from './TruewayBetterForUae'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import FaqUaeEmbassy from './FaqUaeEmbassy'




function UaeEmbassyIndex() {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Top UAE Embassy Certificate Attestation Agency in India | Fast & Secure</title>
          <meta name="description" content="Trueway is the No.1 UAE Embassy Certificate Attestation Consultancy in India. We attest all types of documents such as degree, birth, marriage certificates at an affordable rate." />
          <link rel="canonical" href="https://truewayinternational.com/uae-embassy" />
        </Helmet>

        <UaeEmbassyHero/>
        <PurposeOfUaeEmbassy/>
        <HowDoIGetUae/>
        <DocumentsRequiredForUae/>
        <TruewayBetterForUae/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqUaeEmbassy/>
    </div>
  )
}

export default UaeEmbassyIndex