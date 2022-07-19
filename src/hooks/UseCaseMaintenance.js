import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { deleteMaintenance, editMaintenance, getAllMaintenances, getMaintenanceById, getMaintenanceByPlaca, getReportMaintenances, insertMaintenance } from "../helpers/MaintenanceHelper";

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  export const UseEffectGetMaintenances = () => {
    const [maintenances, setMaintenances] = useState({
      data: [],
      loading: true,
    });
  
    useEffect(() => {
      getAllMaintenances()
      .then((maintenance) => {
        setMaintenances({
          data: maintenance,
          loading: false,
        });
      });
    }, []);
  
    return maintenances;
  };

  export const UseEffectGetReportMaintenances = () => {
    const [reportmaintenances, setReportMaintenances] = useState({
      datamaintenances: [],
      loading: true,
    });
  
    useEffect(() => {
      getReportMaintenances()
      .then((report) => {
        setReportMaintenances({
          datamaintenances: report,
          loading: false,
          error: null
        });
      });
    }, []);
    console.log(reportmaintenances)
    return reportmaintenances;
  };

  export const UseDeleteMaintenance = (placa) => {
    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "¿Deseas eliminar este registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'El registro fue eliminado.',
          'success'
        )
        deleteMaintenance(placa)
        .then((response) => {
            window.location.reload();
        })
        .catch((e) => {
            console.log(e);
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          '¡Cancelado!',
          'No se eliminó el registro.',
          'error'
        )
      }
    })
  
  }
  
  export const UseGetMaintenancePlaca = (placa) => {
    const [maintenanceByPlaca, setMaintenanceByPlaca] = useState({
      data: [],
      loading: true,
    });
  
    useEffect(() => {
      getMaintenanceByPlaca(placa)
      .then((type) => {
        setMaintenanceByPlaca({
          data: type,
          loading: false,
        });
      });
    }, []);
  
    return maintenanceByPlaca;
  };

  export const UseSaveMaintenance = (dataMaintenance) => {

    var data = {
      id_mantenimiento: dataMaintenance.id_mantenimiento,
      id_vehiculo: dataMaintenance.id_vehiculo,
      fecha_realizado: dataMaintenance.fecha_realizado,
      valor_mantenimiento: dataMaintenance.valor_mantenimiento,
      descripcion: dataMaintenance.descripcion
    }
      insertMaintenance(data)
      .then(() => {
        swalWithBootstrapButtons.fire(
          '¡Registro Exitoso!',
          'El registro fue agregado con éxito',
          'success'
        )
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
}

  export const UseEditMaintenance = (dataMaintenance) => {

    let mantenimiento = getMaintenanceById(dataMaintenance.id_mantenimiento)
    var data = {
      id_mantenimiento: dataMaintenance.id_mantenimiento,
      id_vehiculo: dataMaintenance.id_vehiculo,
      fecha_realizado: dataMaintenance.fecha_realizado,
      valor_mantenimiento: dataMaintenance.valor_mantenimiento,
      descripcion: dataMaintenance.descripcion
    }

    if(mantenimiento != null ){
      editMaintenance(data, dataMaintenance.id_mantenimiento)
      .then(() => {
        swalWithBootstrapButtons.fire(
          '¡Registro Exitoso!',
          'El registro fue editado con éxito',
          'success'
        )
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
    }
  }