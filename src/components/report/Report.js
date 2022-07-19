import React, { useState, useEffect } from 'react'
import {CategoryScale} from 'chart.js'; 
import { Bar } from 'react-chartjs-2';
import { UseEffecReports } from '../../hooks/UseCaseReport';


Chart.register(CategoryScale);


export const Report = () => {



  const { data } = UseEffecReports();

  console.log(data);

  var charReport = {
    labels: data.map(x => x.id_vehiculo),
    datasets: [{
      label: `${data.length} Coins Available`,
      data: data.map(x => x.cantidad),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };
  console.log(charReport)
  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  console.log(options)
  return (
    <div>
      <h1>Report</h1>
      <Bar
        data={charReport}
        height={400}
        options={options}
      />
    </div>
  )





}

