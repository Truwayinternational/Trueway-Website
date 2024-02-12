import React from 'react'
import {Helmet} from "react-helmet";

import QatarEmbassyHero from './QatarEmbassyHero'
import SiginificanceOfQatarEmbassy from './SiginificanceOfQatarEmbassy'
import HowDoIGetQatar from './HowDoIGetQatar'
import DocumentsRequired from './DocumentsRequired'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import FaqQatar from './FaqQatar'



function qatarEmbassyIndex() {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Top Qatar Embassy Certificate Attestation Agency in India | Fast & Secure</title>
          <meta name="description" content="Trueway is the No.1 Qatar Embassy Certificate Attestation Consultancy in India. We attest all types of documents such as degree, birth, marriage certificates at an affordable rate." />
          <link rel="canonical" href="https://truewayinternational.com/qatar-embassy"/>
        </Helmet>

        <QatarEmbassyHero/>
        <SiginificanceOfQatarEmbassy/>
        <HowDoIGetQatar/>
        <DocumentsRequired/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqQatar/>
    </div>
  )
}

export default qatarEmbassyIndex