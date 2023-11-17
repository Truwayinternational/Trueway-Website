import React from 'react'
import MaharashtraHero from './MaharashtraHero'
import WeProvideMaharashtra from './WeProvideMaharashtra'
import DocumentsForMaharashtra from './DocumentsForMaharashtra'
import WhyShouldYouChooseUs from '../../../../Components/WhyShouldYouChooseUs'
import OurClients from '../../OurClients'
import Form2 from '../../../../Components/Forms/Form2'
import FaqMaharashtra from './FaqMaharashtra'

function MaharashtraIndex() {
  return (
    <div>
        <MaharashtraHero/>
        <WeProvideMaharashtra/>
        <DocumentsForMaharashtra/>
        <WhyShouldYouChooseUs/>
        <OurClients/>
        <Form2/>
        <FaqMaharashtra/>
    </div>
  )
}

export default MaharashtraIndex