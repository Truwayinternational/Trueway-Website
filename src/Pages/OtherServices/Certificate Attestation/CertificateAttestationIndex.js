import React from 'react'
import CertificateAttestation from './CertificateAttestation'
// import WhatIsAttestation from './WhatIsAttestation'
import WhatisCertificationAttestation from './WhatisCertificationAttestation'
import PurposesOfCertificateAttestation from './PurposesOfCertificateAttestation'
import ProcedureOfCA from './ProcedureOfCA'
import ProcedureAccordion from './ProcedureAccordion'
import HelpYou from './HelpYou'

// trueway services add
import OurCommitment from '../../../Components/OurCommitment'


import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqCertification from './FaqCertification'






function CertificateAttestationIndex() {
  return (
    <div>
        <CertificateAttestation />
        {/* <WhatIsAttestation /> */}
        <WhatisCertificationAttestation  />
        <PurposesOfCertificateAttestation />
        <ProcedureOfCA />
        <ProcedureAccordion />
        <HelpYou />
        <OurCommitment/>
        <OurClients />
        <Form2/>
        <FaqCertification />
    </div>
  )
}

export default CertificateAttestationIndex;