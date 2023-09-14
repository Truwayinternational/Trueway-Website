import React from 'react'
import CertificateAttestation from './CertificateAttestation'
import WhatIsAttestation from './WhatIsAttestation'
import WhatisCertificationAttestation from './WhatisCertificationAttestation'
import PurposesOfCertificateAttestation from './PurposesOfCertificateAttestation'
import ProcedureOfCA from './ProcedureOfCA'
import ProcedureAccordion from './ProcedureAccordion'
import HelpYou from './HelpYou'
import Faq from './Faq'



function CertificateAttestation_index() {
  return (
    <div>
        <CertificateAttestation />
        <WhatIsAttestation />
        <WhatisCertificationAttestation  />
        <PurposesOfCertificateAttestation />
        <ProcedureOfCA />
        <ProcedureAccordion />
        <HelpYou />
        <Faq />
    </div>
  )
}

export default CertificateAttestation_index