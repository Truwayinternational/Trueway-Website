import React from 'react'
import NMChero from './NMChero'
import PuposeOfNMC from './PuposeOfNMC'
import OurCouncil from './OurCouncil'
import YourGuideNMC from './YourGuideNMC'
import Form2 from '../../../Components/Forms/Form2'
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../../OtherServices/OurClients'
import FaqNmc from './FaqNmc'

function NMCindex() {
  return (
    <div>
        <NMChero/>
        <PuposeOfNMC/>
        <OurCouncil/>
        <YourGuideNMC/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
        <FaqNmc/>
    </div>
  )
}

export default NMCindex