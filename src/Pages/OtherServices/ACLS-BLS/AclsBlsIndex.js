import React from 'react'
import AclsBlsHero from './AclsBlsHero'
import AdvancedCardio from './AdvancedCardio'
import BasicLife from './BasicLife'
import CourseFeatures from './CourseFeatures'
import DocumentsForACLS from './DocumentsForACLS'
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqAcls from './FaqAcls'

function AclsBlsIndex() {
  return (
    <div>
        <AclsBlsHero/>
        <AdvancedCardio/>
        <BasicLife/>
        <CourseFeatures/>
        <DocumentsForACLS/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqAcls/>
    </div>
  )
}

export default AclsBlsIndex