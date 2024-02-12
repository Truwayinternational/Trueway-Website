import React from 'react'
import IrelandHero from './IrelandHero'
import CounterIreland from '../CounterIreland'
import WhyIreland from './WhyIreland'
import OneStopMigraiton from './OneStopMigraiton'
import WhyChooseTrueway from './WhyChooseTrueway'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import FaqIrelandMigration from './FaqIrelandMigration'

function IrelandMigrationIndex() {
  return (
    <div>
        <IrelandHero/>
        <CounterIreland/>
        <WhyIreland/>
        <OneStopMigraiton/>
        <WhyChooseTrueway/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
        <FaqIrelandMigration/>
    </div>
  )
}

export default IrelandMigrationIndex