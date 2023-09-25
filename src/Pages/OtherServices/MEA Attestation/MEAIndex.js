import React from 'react'
import MEAattestaion from './MEAattestaion'
import WhatIsMEA from './WhatIsMEA'
import AttestedCopy from './AttestedCopy'
import PurposesOfMEA from './PurposesOfMEA'
import ProcedureOfMEA from './ProcedureOfMEA'
import DocumentRequired from './DocumentRequired'



function MEAIndex() {
  return (
    <div>
        <MEAattestaion />
        <WhatIsMEA />
        <AttestedCopy/>
        <PurposesOfMEA/>
        <ProcedureOfMEA/>
        <DocumentRequired/>
    </div>
  )
}

export default MEAIndex