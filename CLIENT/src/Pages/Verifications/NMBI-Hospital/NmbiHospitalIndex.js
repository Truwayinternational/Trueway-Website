import React from 'react'
import NmbiHospitalHero from './NmbiHospitalHero'
import NavigateNmbiHospital from './NavigateNmbiHospital'
import WhyChooseTruewayNmbiHsptl from './WhyChooseTruewayNmbiHsptl'
import DocumentsNmbiHospital from './DocumentsNmbiHospital'
import Form2 from '../../../Components/Forms/Form2'
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../../OtherServices/OurClients'
import FaqNmbiHospital from './FaqNmbiHospital'

function NmbiHospitalIndex() {
  return (
    <div>
        <NmbiHospitalHero/>
        <NavigateNmbiHospital/>
        <WhyChooseTruewayNmbiHsptl/>
        <DocumentsNmbiHospital/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
        <FaqNmbiHospital/>
    </div>
  )
}

export default NmbiHospitalIndex