import React from 'react'
import DataFlowHero from './DataFlowHero'
import WhatisDataflow from './WhatisDataflow'
import CopyDataflow from './CopyDataflow'
import RelevenceOfDataflow from './RelevenceOfDataflow'
import PrimarySourceDataflow from './PrimarySourceDataflow'
import PSVnecessary from './PSVnecessary'
import ProcessInDataflow from './ProcessInDataflow'
import DocumentsRequired from './DocumentsRequired'
import YourBestDataflow from './YourBestDataflow'
import YourBestDataflowCards from './YourBestDataflowCards'
import OurCommitment from '../../../Components/OurCommitment'
import OurClients from '../OurClients'
import Form2 from '../../../Components/Forms/Form2'
import FaqDataFlow from './FaqDataFlow'




function DataFlowIndex() {
  return (
    <div>
        <DataFlowHero/>
        <WhatisDataflow/>
        <CopyDataflow/>
        <RelevenceOfDataflow/>
        <PrimarySourceDataflow/>
        <PSVnecessary/>
        <ProcessInDataflow/>
        <DocumentsRequired/>
        <YourBestDataflow/>
        <YourBestDataflowCards/>
        <OurCommitment/>
        <OurClients/>
        <Form2/>
        <FaqDataFlow/>
    </div>
  )
}

export default DataFlowIndex