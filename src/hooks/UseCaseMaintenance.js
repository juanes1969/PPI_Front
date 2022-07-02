import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { deleteMaintenance, getAllMaintenances, getMaintenanceByPlaca } from "../helpers/MaintenanceHelper";

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
        debugger
        console.log(maintenance)
        setMaintenances({
          data: maintenance,
          loading: false,
        });
      });
    }, []);
  
    return maintenances;
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