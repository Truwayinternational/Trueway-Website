import React from 'react'
import AustraliaMigrationHero from './AustraliaMigrationHero'
import CounterIreland from '../CounterIreland'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import WhyChooseTruewayAustralia from './WhyChooseTruewayAustralia'
import AustraliaHealtcare from './AustraliaHealtcare'
import OurProcess from './OurProcess'
import FaqAustraliaMigration from './FaqAustraliaMigration'


function AustraliaMigrationIndex() {
  return (
    <div>
        <AustraliaMigrationHero/>
        <CounterIreland/>
        <WhyChooseTruewayAustralia/>
        <AustraliaHealtcare/>
        <OurProcess/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
        <FaqAustraliaMigration/>
    </div>
  )
}

export default AustraliaMigrationIndex