import React from 'react'
import { LighthouseScore } from './LighthouseScore';
import { LoadingTimes } from './LoadingTimes';

export const Vitals = () => {

  return (
    <div>
      <LoadingTimes />
      <LighthouseScore />
    </div>
  )
}
