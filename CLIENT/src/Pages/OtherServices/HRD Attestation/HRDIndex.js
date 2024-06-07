import React from 'react'
import {Helmet} from "react-helmet";

import HRDattestation from './HRDattestation'
import WhatIsHRD from './WhatIsHRD';
import HRDservices from './HRDservices';
import ServicesMob from './ServicesMob';
import PurposesOfHRD from './PurposesOfHRD';
import ProcedureForHrd from './ProcedureForHrd';
import DocumentsRequired from './DocumentsRequired';

// services card scrolling add 
import OurCommitment from '../../../Components/OurCommitment';
import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqHRD from './FaqHRD';




function HRDIndex() {

  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Fast & Secure HRD Attestation Services in India |Educational Certificate</title>
          <meta name="description" content="Trueway is the top Home Department Attestation Agency in India. We offer various kinds of educational document verification services quickly at affordable rates." />
          <link rel="canonical" href="https://truewayinternational.com/hrd-attestation"/>
        </Helmet>

        <HRDattestation />
        <WhatIsHRD />
        <HRDservices />
        <ServicesMob /> {/*  countries in mobile screen size */}
        <PurposesOfHRD /> 
        <ProcedureForHrd />
        <DocumentsRequired />
        <OurCommitment/>
        <OurClients />
        <Form2/>
        <FaqHRD/>
    </div>
  )
  
}

export default HRDIndex;