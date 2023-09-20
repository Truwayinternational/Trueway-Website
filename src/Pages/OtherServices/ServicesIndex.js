import React from 'react'

// added pages of other services

import CertificateAttestationIndex from './Certificate Attestation/CertificateAttestationIndex'
import EmbassyAttestationIndex from './Embassy Attestation/EmbassyAttestationIndex'
import HRDIndex from './HRD Attestation/HRDIndex'





function ServicesIndex() {
  return (
    <div>
      <CertificateAttestationIndex />
      <EmbassyAttestationIndex />
      {/* MEA not completed */}
      {/* MOFA not completed */}
      <HRDIndex />
    </div>
  )
}

export default ServicesIndex