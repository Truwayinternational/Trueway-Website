import React from 'react'
import OetHero from './OetHero'
import WhatIsOet from './WhatIsOet'
import WhoAndWhy from './WhoAndWhy'
import FormatOetTest from './FormatOetTest'
import ServicesWeProvide from './ServicesWeProvide'
import OurFeatures from './OurFeatures'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import Form2 from '../../../../Components/Forms/Form2'
import FaqOetCoaching from './FaqOetCoaching'

function OetIndex() {
  return (
    <div>
        <OetHero/>
        <WhatIsOet/>
        <WhoAndWhy/>
        <FormatOetTest/>
        <ServicesWeProvide/>
        <OurFeatures/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqOetCoaching/>
    </div>
  )
}

export default OetIndex