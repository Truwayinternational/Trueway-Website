import React from 'react'


import HRDattestation from './HRDattestation'
import WhatIsHRD from './WhatIsHRD';
import HRDservices from './HRDservices';
import ServicesMob from './ServicesMob';




function HRDIndex() {

  return (
    <div>
        <HRDattestation />
        <WhatIsHRD />
        <HRDservices />
        <ServicesMob /> {/*  countries in mobile screen size */}

    </div>
  )
  
}

export default HRDIndex;