
import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend,Title,
  Tooltip} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { UseEffecReports } from '../../hooks/UseCaseReport';
import { UseEffectGetReportMaintenances } from '../../hooks/UseCaseMaintenance';



ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip
  

);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
    },
    label:{
      backgroundColor:'#ffffff'
    }
  },
};


export const Report = () => {

  const { data } = UseEffecReports();
  const { datamaintenances } = UseEffectGetReportMaintenances();

 // label: `${data?.length} Cantidad de Rutas del Vehiculo`,
  const charReport = {
    labels: data?.map(x => x.id_vehiculo),
    datasets: [{
      label: `Cantidad de Rutas del Vehiculo`,
      data: data?.map(x => x.cantidad),
      backgroundColor:  [
        '#4dc9f6',
        '#f67019',
        '#f53794',
        '#537bc4',
        '#acc236',
        '#166a8f',
        '#00a950',
        '#58595b',
        '#8549ba'
    ],
      borderWidth: 2
    }]
  };

  const charReportMaintenance = {
    labels: datamaintenances?.map(x => x.id_vehiculo),
    datasets: [{
      label: `Cantidad de Mantenimientos`,
      data: datamaintenances?.map(x => x.cantidad),
      backgroundColor: [
        '#4dc9f6',
        '#f67019',
        '#f53794',
        '#537bc4',
        '#acc236',
        '#166a8f',
        '#00a950',
        '#58595b',
        '#8549ba'
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
  console.log(charReportMaintenance)
  

  var optionss = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      display: true,
      labels: {
        fontColor: '#ffffff',
      },
      position: "bottom",
      align: "start",
    },

  }

  console.log(options)
  return (
    <div className='container-sm'>
      <h1 align='center' font-family='Arial Narrow Bold'>Cantidad de Rutas Por Vehiculo</h1><br></br>
      <div className='col-sm'>
        <Bar
          data={charReport}
          height={100}
          options={options}
        />
      </div><br></br>

      <h1 align='center'>Cantidad Mantenimientos Por Vehiculos</h1><br></br>
      <div>
        <Bar
          data={charReportMaintenance}
          height={100}
        />
      </div>
    </div>
  )





}






