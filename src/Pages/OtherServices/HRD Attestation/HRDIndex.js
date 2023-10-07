import React from 'react'


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

import FaqHRD from './FaqHRD';




function HRDIndex() {

  return (
    <div>
        <HRDattestation />
        <WhatIsHRD />
        <HRDservices />
        <ServicesMob /> {/*  countries in mobile screen size */}
        <PurposesOfHRD /> 
        <ProcedureForHrd />
        <DocumentsRequired />
        <OurCommitment/>
        <OurClients />
        <FaqHRD/>
    </div>
  )
  
}

export default HRDIndex;