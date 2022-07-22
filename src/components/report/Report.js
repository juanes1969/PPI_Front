
import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { UseEffecReports } from '../../hooks/UseCaseReport';
import { UseEffectGetReportMaintenances } from '../../hooks/UseCaseMaintenance';



ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,

);


export const Report = () => {

  const { data } = UseEffecReports();
  const { datamaintenances } = UseEffectGetReportMaintenances();

  console.log(data);
  console.log(datamaintenances);

  const charReport = {
    labels: data?.map(x => x.id_vehiculo),
    datasets: [{
      label: `${data?.length} Vehiculos con Registros de Rutas`,
      data: data?.map(x => x.cantidad),
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

  const charReportMaintenance = {
    labels: datamaintenances?.map(x => x.id_vehiculo),
    datasets: [{
      label: `${datamaintenances?.length} Vehiculos con Mantenimientos`,
      data: datamaintenances?.map(x => x.cantidad),
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
  console.log(charReportMaintenance)
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      display: true,
      labels: {
        fontColor: "rgb(255, 99, 132)",
      },
      position: "bottom",
      align: "start",
    },

  }

  console.log(options)
  return (
    <div className='container'>
      <h1 align='center'>Reporte Vehiculos</h1><br></br>
      <div>
        <Bar
          data={charReport}
          height={100}
        />
      </div><br></br>

      <h1 align='center'>Reporte Mantenimientos</h1><br></br>
      <div>
        <Bar
          data={charReportMaintenance}
          height={100}
        />
      </div>
    </div>
  )





}






