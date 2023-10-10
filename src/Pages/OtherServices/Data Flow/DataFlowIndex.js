import React from 'react'
import DataFlowHero from './DataFlowHero'
import WhatisDataflow from './WhatisDataflow'
import CopyDataflow from './CopyDataflow'
import RelevenceOfDataflow from './RelevenceOfDataflow'
import PrimarySourceDataflow from './PrimarySourceDataflow'
import PSVnecessary from './PSVnecessary'



function DataFlowIndex() {
  return (
    <div>
        <DataFlowHero/>
        <WhatisDataflow/>
        <CopyDataflow/>
        <RelevenceOfDataflow/>
        <PrimarySourceDataflow/>
        <PSVnecessary/>
    </div>
  )
}

export default DataFlowIndex