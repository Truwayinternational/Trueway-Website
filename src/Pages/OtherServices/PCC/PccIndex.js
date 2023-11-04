import React from 'react'
import PccHeroPage from './PccHeroPage'
import PccFromCountries from './PccFromCountries'
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'


function PccIndex() {
  return (
    <div>
        <PccHeroPage/>
        <PccFromCountries/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
    </div>
  )
}

export default PccIndex