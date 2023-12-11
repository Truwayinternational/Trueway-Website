import React from 'react'

import MOFAattesttion from './MOFAattesttion'
import WhatIsMofa from './WhatIsMofa'
import PurposesOfMofa from './PurposesOfMofa'
import ProcedureForMofa from './ProcedureForMofa'
import DocoumentForMofa from './DocoumentForMofa'

// services srolling cards added
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqMofa from './FaqMofa'

function MOFAindex() {
  return (

    <div>
        <MOFAattesttion/>
        <WhatIsMofa/>
        <PurposesOfMofa/>
        <ProcedureForMofa/>
        <DocoumentForMofa/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqMofa/>
    </div>
  )
}

export default MOFAindex