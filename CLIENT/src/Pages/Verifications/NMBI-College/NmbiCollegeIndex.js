import React from 'react'
import NmbiCollegeHero from './NmbiCollegeHero'
import GuideNmbiCollege from './GuideNmbiCollege'
import WhyChooseTrueway from './WhyChooseTrueway'
import DocumentNmbiCollege from './DocumentNmbiCollege'
import Form2 from '../../../Components/Forms/Form2'
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../../OtherServices/OurClients'

function NmbiCollegeIndex() {
  return (
    <div>
        <NmbiCollegeHero/>
        <GuideNmbiCollege/>
        <WhyChooseTrueway/>
        <DocumentNmbiCollege/>
        <Form2/>
        <OurCommitment/>
        <OurClients/>
    </div>
  )
}

export default NmbiCollegeIndex