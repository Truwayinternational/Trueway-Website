import React from 'react'
import {Helmet} from "react-helmet";

import MalaysiaEmbassyHero from './MalaysiaEmbassyHero'
import PurposeOfMalaysiaEmbassy from './PurposeOfMalaysiaEmbassy'
import HowDoIGetMalaysian from './HowDoIGetMalaysian'
import DocumentRequiredforMalaysia from './DocumentRequiredforMalaysia'
import TruewayBestForMalaysia from './TruewayBestForMalaysia'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import FaqMalaysiaEmbassy from './FaqMalaysiaEmbassy'

function MalaysiaEmbassyIndex() {
  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Top Malaysia Embassy Certificate Attestation Agency in India | Fast & Secure</title>
          <meta name="description" content="Trueway is the No.1 Malaysia Embassy Certificate Attestation Consultancy in India. We attest all types of documents such as degree, birth, marriage certificates at an affordable rate." />
          <link rel="canonical" href="https://truewayinternational.com/malaysia-embassy"/>
        </Helmet>

        <MalaysiaEmbassyHero/>
        <PurposeOfMalaysiaEmbassy/>
        <HowDoIGetMalaysian/>
        <DocumentRequiredforMalaysia/>
        <TruewayBestForMalaysia/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqMalaysiaEmbassy/>
    </div>
  )
}

export default MalaysiaEmbassyIndex