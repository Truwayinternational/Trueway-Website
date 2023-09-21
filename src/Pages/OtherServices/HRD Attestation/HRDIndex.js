import React from 'react'


import HRDattestation from './HRDattestation'
import WhatIsHRD from './WhatIsHRD';
import HRDservices from './HRDservices';
import ServicesMob from './ServicesMob';
import PurposesOfHRD from './PurposesOfHRD';




function HRDIndex() {

  return (
    <div>
        <HRDattestation />
        <WhatIsHRD />
        <HRDservices />
        <ServicesMob /> {/*  countries in mobile screen size */}
        <PurposesOfHRD /> 
    </div>
  )
  
}

export default HRDIndex;