import React from 'react'
import MEAattestaion from './MEAattestaion'
import WhatIsMEA from './WhatIsMEA'
import PurposesOfMEA from './PurposesOfMEA'
import ProcedureOfMEA from './ProcedureOfMEA'
import DocumentRequired from './DocumentRequired'

// import from component its needed all pages
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqMEA from './FaqMEA'



function MEAIndex() {
  return (
    <div>
        <MEAattestaion />
        <WhatIsMEA />
        <PurposesOfMEA/>
        <ProcedureOfMEA/>
        <DocumentRequired/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqMEA/>
    </div>
  )
}

export default MEAIndex