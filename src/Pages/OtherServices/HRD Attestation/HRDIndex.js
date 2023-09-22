import React from 'react'


import HRDattestation from './HRDattestation'
import WhatIsHRD from './WhatIsHRD';
import HRDservices from './HRDservices';
import ServicesMob from './ServicesMob';
import PurposesOfHRD from './PurposesOfHRD';
import ProcedureForHrd from './ProcedureForHrd';
import DocumentsRequired from './DocumentsRequired';




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
    </div>
  )
  
}

export default HRDIndex;