import React from 'react'
import QatarPccHero from './QatarPccHero'
import PurposeOfQatarPcc from './PurposeOfQatarPcc'
import HowToApplyQatarPcc from './HowToApplyQatarPcc'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import Form2 from '../../../../Components/Forms/Form2'
import FaqQatarPcc from './FaqQatarPcc'


function QatarPccIndex() {
  return (
    <div>
        <QatarPccHero/>
        <PurposeOfQatarPcc/>
        <HowToApplyQatarPcc/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqQatarPcc/>
    </div>
  )
}

export default QatarPccIndex