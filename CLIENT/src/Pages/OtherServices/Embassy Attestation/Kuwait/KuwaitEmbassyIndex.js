import React from 'react'
import {Helmet} from "react-helmet";

import KuwaitEmbassyHero from './KuwaitEmbassyHero'
import PurposeOfKuwaitEmbassy from './PurposeOfKuwaitEmbassy'
import HowDoIGetKuwait from './HowDoIGetKuwait'
import DocumentRequiredKuwait from './DocumentRequiredKuwait'
import TheBenifits from './TheBenifits'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import FaqKuwaitEmbassy from './FaqKuwaitEmbassy'



function KuwaitEmbassyIndex() {
  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Fast & Secure Kuwait Embassy Certificate Attestation Services in India </title>
          <meta name="description" content="Trueway is the No.1 Kuwait Embassy Certificate Attestation Consultancy in India. We attest all types of documents such as degree, birth, marriage certificates at an affordable rate." />
          <link rel="canonical" href="https://truewayinternational.com/kuwait-embassy"/>
        </Helmet>

        <KuwaitEmbassyHero/>
        <PurposeOfKuwaitEmbassy/>
        <HowDoIGetKuwait/>
        <DocumentRequiredKuwait/>
        <TheBenifits/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqKuwaitEmbassy/>
    </div>
  )
}

export default KuwaitEmbassyIndex