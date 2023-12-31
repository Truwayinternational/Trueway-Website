import React from 'react'
import UaePccHero from './UaePccHero'
import PurposesofUaePcc from './PurposesofUaePcc'
import HowToGetPcc from './HowToGetPcc'
import HowToApply from './HowToApply'
import HowDoObtain from './HowDoObtain'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import Form2 from '../../../../Components/Forms/Form2'
import FaqUaePcc from './FaqUaePcc'



function UaePccIndex() {
  return (
    <div>
        <UaePccHero/>
        <PurposesofUaePcc/>
        <HowToGetPcc/>
        <HowToApply/>
        <HowDoObtain/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqUaePcc/>
    </div>
  )
}

export default UaePccIndex