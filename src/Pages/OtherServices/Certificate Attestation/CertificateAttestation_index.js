import React from 'react'
import CertificateAttestation from './CertificateAttestation'
import WhatIsAttestation from './WhatIsAttestation'
import WhatisCertificationAttestation from './WhatisCertificationAttestation'
import PurposesOfCertificateAttestation from './PurposesOfCertificateAttestation'
import ProcedureOfCA from './ProcedureOfCA'
import ProcedureAccordion from './ProcedureAccordion'



function CertificateAttestation_index() {
  return (
    <div>
        <CertificateAttestation />
        <WhatIsAttestation />
        <WhatisCertificationAttestation  />
        <PurposesOfCertificateAttestation />
        <ProcedureOfCA />
        <ProcedureAccordion />
    </div>
  )
}

export default CertificateAttestation_index