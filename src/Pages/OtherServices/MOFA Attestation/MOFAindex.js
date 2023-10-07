import React from 'react'

import MOFAattesttion from './MOFAattesttion'
import WhatIsMofa from './WhatIsMofa'
import AttestedCopyMofa from './AttestedCopyMofa'
import PurposesOfMofa from './PurposesOfMofa'
import ProcedureForMofa from './ProcedureForMofa'
import DocoumentForMofa from './DocoumentForMofa'

// services srolling cards added
import OurCommitment from '../../../Components/OurCommitment'

import OurClients from '../OurClients'
import FaqMofa from './FaqMofa'

function MOFAindex() {
  return (

    <div>
        <MOFAattesttion/>
        <WhatIsMofa/>
        <AttestedCopyMofa/>
        <PurposesOfMofa/>
        <ProcedureForMofa/>
        <DocoumentForMofa/>
        <OurCommitment/>
        <OurClients/>
        <FaqMofa/>
    </div>
  )
}

export default MOFAindex