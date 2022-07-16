import React, {  useState, useRef, useEffect } from 'react'
import { Pagination } from '../conduct//Pagination';
import { SearchConduct } from '../conduct/SearchConduct';
import '../../Styles/tableConduct.css'
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { UseModal } from '../../hooks/UseModal';
import { UseEffectGetExpense, UseDeleteExpense } from '../../hooks/UseCaseExpense';
import { Loader } from '../globalComponents/Loader';
import { SearchRoute } from '../route/SearchRoute';
import { getAllExpense } from '../../helpers/ExpenseHelper';
import { UsePage } from '../../hooks/UsePage';

import {
  Chart as ChartJS,

  BarElement,

} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { UseEffectGetReport } from '../../hooks/UseCaseReport';
import { getAllReport } from '../../helpers/ReportHelper';

// ChartJS.register(
//   BarElement,
// );


export const Report = () => {

 const {data, loading }= UseEffectGetReport()
 const [reports, setReport] = useState([]);



  const retrieveReport = () => {
    getAllReport()
        .then((report) => {
            setReport(report);
        }).catch((e) => {
            console.log(e);
        });
}

const refreshList = () => {
  retrieveReport();
};

useEffect(() => {
  retrieveReport();
}, []);

const [isOpenModalExpense, OpenModalExpense, closeModalExpense] = UseModal();

const [expenseEdit, setExpenseEdit] = useState(null);
const reportRef = useRef();
const [perPage, setPerPage] = useState(5);
const [search, setSearch] = useState('');
const { filterReport, nextPage, prevPage, setCurrentPage, setPage, page } = UsePage(data, perPage, search);

reportRef.current = reports;



const handleDeleteExpense = (id_gasto) => {
    UseDeleteExpense(id_gasto);
    refreshList();
}


const getByIdEdit = (expense) => {
    setExpenseEdit(expense);
    OpenModalExpense();
}



return (
    <>
        <div className="container" id="contenedorInicial">
            <h1 className="title-h1">Gastos</h1>
            <span>
                <SearchConduct
                    titleButton={"Agregar Gasto"}
                    icon={<IoIcons.IoCarSportSharp />} 
                    openModal={OpenModalExpense} 
                    setSearch={setSearch}
                    setCurrentPage={setCurrentPage}
                    setPage={setPage}
                />
             
            </span>

            {loading
                ?

                (<Loader />) :

            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>

                            <th className="th-shipping" scope="col">Codigo Gasto</th>
                            <th className="th-shipping" scope="col">Fecha Gasto</th>
                            <th className="th-shipping" scope="col">Valor Gasto</th>
                            <th className="th-shipping" scope="col">Descripcion</th>
                            <th className="th-shipping" scope="col">Codigo Manifiesto</th>
                            <th className="th-shipping" scope="col">Tipo Gasto</th>
                            <th className="th-shipping" colSpan="3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="id_ruta">
                            {filterReport().map((report) => (
                                <tr key={report.id_vehiculo}>
                                    <td>{report.id_vehiculo}</td>
                                    <td>{report.cantidad}</td>
                                    <td>{report.conductor}</td>
                                    <td>{report.descripcion}</td>
                                    <td>{report.codigo_manifiesto}</td>
                                    <td>{report.tipo_gasto}</td>
                                    <td id="columOptions">

                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm" onClick={() => getByIdEdit(report)} ><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteExpense(report.id_gasto)} ><AiIcons.AiFillDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                </table>
                <Pagination 
                    nextPage={nextPage}
                    prevPage={prevPage}
                    page={page}
                    setPerPage={setPerPage}
                    setCurrentPage={setCurrentPage}
                    setPage={setPage}
                />
            </div>}
        </div>

        


    </>
)

//   var baseUrl = "http://localhost:3000/Report";


  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     await fetch(`${baseUrl}`, {
  //       method: 'GET',
  //       headers: { 
  //         'Access-Control-Allow-Origin': "*"
  //       }
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           response.json().then((json) => {
  //             console.log(json.data);
  //             setChart(json.data)
  //           });
  //         }
  //       }).catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   fetchCoins()
  // }, [baseUrl])

  console.log("data", data);
  // var dataa = {
  //   labels: data.map(x => x.id_vehiculo),
  //   datasets: [{
  //     label: `${data.length} `,
  //     data: data.map(x => x.cantidad),
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderWidth: 1
  //   }]
  // };

  // var options = {
  //   maintainAspectRatio: false,
  //   scales: {
  //   },
  //   legend: {
  //     labels: {
  //       fontSize: 25,
  //     },
  //   },
  // }

  // return (
  //   <div>
  //     <Bar
  //       //data={dataa}
  //       height={400}
  //       //options={options}

  //     />
  //   </div>
  // )
}


