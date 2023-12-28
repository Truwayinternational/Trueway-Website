import React from 'react'
import CgfnsHero from './CgfnsHero'
import PurposeOfCgfns from './PurposeOfCgfns'
import BestCgfns from './BestCgfns'
import GuideForCgfns from './GuideForCgfns'
import Form2 from '../../../Components/Forms/Form2'
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../../OtherServices/OurClients'
import FaqCgfns from './FaqCgfns'


function CgfnsIndex() {
  return (
    <div>
        <CgfnsHero/>
        <PurposeOfCgfns/>
        <BestCgfns/>
        <GuideForCgfns/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
        <FaqCgfns/>
    </div>
  )
}

export default CgfnsIndex