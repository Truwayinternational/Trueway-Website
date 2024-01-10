import React from 'react'
import NMBIhero from './NMBIhero'
import SignificanceOfNMBI from './SignificanceOfNMBI'
import OurCouncilServices from './OurCouncilServices'
import WhyTrueway from './WhyTrueway'
import HowDoWeWork from './HowDoWeWork'
import Form2 from '../../../Components/Forms/Form2'
import OurClients from '../../OtherServices/OurClients'
import OurCommitment from '../../../Components/OurCommitment'
import FaqNMBI from './FaqNMBI'

function NMBIindex() {
  return (
    <div>
        <NMBIhero/>
        <SignificanceOfNMBI/>
        <OurCouncilServices/>
        <WhyTrueway/>
        <HowDoWeWork/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
        <FaqNMBI/> 
    </div>
  )
}

export default NMBIindex