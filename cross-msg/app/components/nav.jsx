'use client'

import React from 'react'
import { Metric } from "@tremor/react";
import { ConnectWallet } from "@thirdweb-dev/react";


export default function Nav() {
  return (
    <div className='flex justify-between m-8'>
     <Metric color="blue" className='mr-8'>
        MSG
     </Metric>
    <ConnectWallet />
    </div>
  )
}