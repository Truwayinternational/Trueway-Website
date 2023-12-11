import React from 'react'
import KuwaitEmbassyHero from './KuwaitEmbassyHero'
import PurposeOfKuwaitEmbassy from './PurposeOfKuwaitEmbassy'
import HowDoIGetKuwait from './HowDoIGetKuwait'
import DocumentRequiredKuwait from './DocumentRequiredKuwait'
import TheBenifits from './TheBenifits'
import Form2 from '../../../../Components/Forms/Form2'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import FaqKuwaitEmbassy from './FaqKuwaitEmbassy'



function KuwaitEmbassyIndex() {
  return (
    <div>
        <KuwaitEmbassyHero/>
        <PurposeOfKuwaitEmbassy/>
        <HowDoIGetKuwait/>
        <DocumentRequiredKuwait/>
        <TheBenifits/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqKuwaitEmbassy/>
    </div>
  )
}

export default KuwaitEmbassyIndex