import React from 'react'
import DataFlowHero from './DataFlowHero'
import WhatisDataflow from './WhatisDataflow'
import CopyDataflow from './CopyDataflow'
import RelevenceOfDataflow from './RelevenceOfDataflow'
import PrimarySourceDataflow from './PrimarySourceDataflow'
import PSVnecessary from './PSVnecessary'
import ProcessInDataflow from './ProcessInDataflow'
import DocumentsRequired from './DocumentsRequired'




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
    </div>
  )
}

export default DataFlowIndex