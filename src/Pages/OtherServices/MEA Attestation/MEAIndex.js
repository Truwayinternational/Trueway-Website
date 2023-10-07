import React from 'react'
import MEAattestaion from './MEAattestaion'
import WhatIsMEA from './WhatIsMEA'
import AttestedCopy from './AttestedCopy'
import PurposesOfMEA from './PurposesOfMEA'
import ProcedureOfMEA from './ProcedureOfMEA'
import DocumentRequired from './DocumentRequired'

// import from component its needed all pages
import OurCommitment from '../../../Components/OurCommitment'

import OurClients from '../OurClients'
import FaqMEA from './FaqMEA'



function MEAIndex() {
  return (
    <div>
        <MEAattestaion />
        <WhatIsMEA />
        <AttestedCopy/>
        <PurposesOfMEA/>
        <ProcedureOfMEA/>
        <DocumentRequired/>
        <OurCommitment/>
        <OurClients/>
        <FaqMEA/>
    </div>
  )
}

export default MEAIndex