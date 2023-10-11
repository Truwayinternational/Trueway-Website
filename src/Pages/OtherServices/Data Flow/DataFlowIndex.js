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
    </div>
  )
}

export default DataFlowIndex