import React from 'react'
import { UseEffecReports } from '../../hooks/UseCaseReport';


export const Report = () => {

  const { data } = UseEffecReports();

  console.log(data);
  return (
    <div>Report</div>
  )
}
