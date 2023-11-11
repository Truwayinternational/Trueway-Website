import React from 'react'
import PrometricsHero from './PrometricsHero'
import WhatisPrometric from './WhatisPrometric'
import DifferentCountries from './DifferentCountries'
import YourPathToGuaranteed from './YourPathToGuaranteed'
import OurCommitment from '../../../../Components/OurCommitment'
import OurClients from '../../OurClients'
import Form2 from '../../../../Components/Forms/Form2'
import FaqPrometric from './FaqPrometric'


function PrometricsIndex() {
  return (
    <div>
        <PrometricsHero/>
        <WhatisPrometric/>
        <DifferentCountries/>
        <YourPathToGuaranteed/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqPrometric/>
    </div>
  )
}

export default PrometricsIndex