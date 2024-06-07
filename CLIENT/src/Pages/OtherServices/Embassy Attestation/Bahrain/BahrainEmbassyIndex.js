import React from 'react'
import {Helmet} from "react-helmet";

import BahrainEmbassyHero from './BahrainEmbassyHero'
import PurposeOfBahrainEmbassy from './PurposeOfBahrainEmbassy'
import HowDoIGetBahrain from './HowDoIGetBahrain'
import DocumentRequiredForBahrain from './DocumentRequiredForBahrain'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import FaqBahrainEmbassy from './FaqBahrainEmbassy'



function BahrainEmbassyIndex() {
  return (
    <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Top Bahrain Embassy Certificate Attestation Agency in India | Fast & Secure</title>
          <meta name="description" content="Trueway is the No.1 Bahrain Embassy Certificate Attestation Consultancy in India. We attest all types of documents such as degree, birth, marriage certificates at an affordable rate." />
          <link rel="canonical" href="https://truewayinternational.com/bahrain-embassy"/>
        </Helmet>

        <BahrainEmbassyHero/>
        <PurposeOfBahrainEmbassy/>
        <HowDoIGetBahrain/>
        <DocumentRequiredForBahrain/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqBahrainEmbassy/>
    </>
  )
}

export default BahrainEmbassyIndex