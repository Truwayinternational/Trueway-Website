import React from 'react'
import SaudiPccHero from './SaudiPccHero'
import PorposeOfSaudiPcc from './PorposeOfSaudiPcc'
import HowToApplySaudiPcc from './HowToApplySaudiPcc'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import Form2 from '../../../../Components/Forms/Form2'
import FaqSaudiPcc from './FaqSaudiPcc'


function SaudiPccIndex() {
  return (
    <div>
        <SaudiPccHero/>
        <PorposeOfSaudiPcc/>
        <HowToApplySaudiPcc/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqSaudiPcc/>
    </div>
  )
}

export default SaudiPccIndex