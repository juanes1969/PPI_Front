import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { getAllReport} from "../helpers/ReportHelper";


export const UseEffectGetReport = () => {
    const [reports, setReport] = useState({
      data: [],
      loading: true,
    });
  
    useEffect(() => {
      getAllReport()
      .then((report) => {
        debugger
        console.log(report);
        
        setReport({
          data: report,
          loading: false,
          
        });
      });
    }, []);
  console.log(reports)
    return reports;
  };


 