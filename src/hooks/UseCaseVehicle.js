import { useState, useEffect } from "react";
import {
  getVehicleAvailable,
  getAllVehicles,
  getAllMarcas,
  getAllTypeVehicle,
  insertVehicle,
  editVehicle,
  getVehicleByPlaca,
  deleteVehicle
} from "../helpers/VehicleHelper";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss';
import dateFormat, { masks } from "dateformat";


const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

const handleDelete = () => {
  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        '¡Eliminado!',
        'El movimiento fue eliminado',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        '¡Cancelado!',
        'Tu movimiento está a salvo :)',
        'error'
      )
    }
  })
}
export const UseEffectGetVehicles = () => {
  const [vehicles, setVehicles] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllVehicles()
    .then((vehicle) => {
      setVehicles({
        data: vehicle,
        loading: false,
      });
    });
  }, []);

  return vehicles;
};

export const UseVehicleAvailable = () => {
  const [vehicleAvailable, setVehicleAvailable] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getVehicleAvailable().then((vehicle) => {
      setVehicleAvailable({
        data: vehicle,
        loading: false,
      });
    });
  }, []);

  return vehicleAvailable;
};

export const UseMarca = () => {
  const [marcaVehicles, setMarcaVehicle] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllMarcas().then((marca) => {
      setMarcaVehicle({
        data: marca,
        loading: false,
      });
    });
  }, []);

  return marcaVehicles;
};

export const UseTypeVehicle = () => {
  const [typeVehicle, setTypeVehicle] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllTypeVehicle().then((type) => {
      setTypeVehicle({
        data: type,
        loading: false,
      });
    });
  }, []);

  return typeVehicle;
};

export const UseDeleteVehicle = (placa) => {
  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro?',
    text: "El vehículo estaría inactivo",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        '¡Eliminado!',
        'El vehículo fue inactivado',
        'success'
      )
      deleteVehicle(placa)
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
        'El vehículo sigue activo',
        'error'
      )
    }
  })

}

export const UseGetVehiclePlaca = (placa) => {
  const [vehicleByPlaca, setVehicleByPlaca] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getVehicleByPlaca(placa)
    .then((type) => {
      setVehicleByPlaca({
        data: type,
        loading: false,
      });
    });
  }, []);

  return vehicleByPlaca;
};

const calcularFecha = ( fecha) => {
  let fechaVencimiento = new Date(fecha)
  if(fecha != null){
    fechaVencimiento.setDate(fechaVencimiento.getDate() + 1)
    fechaVencimiento.setFullYear(fechaVencimiento.getFullYear()+1)
    fechaVencimiento = dateFormat(fechaVencimiento, "isoDate")
    return fechaVencimiento;
  }
}
export const UseInsertVehicle = (dataVehicle) => {
  var data = {
    placa: dataVehicle.placa,
    matricula: dataVehicle.matricula,
    r_trailer: dataVehicle.r_trailer,
    capacidad: dataVehicle.capacidad,
    modelo: dataVehicle.modelo,
    vencimiento_soat: calcularFecha(dataVehicle.expedicion_soat),
    vencimiento_poliza: calcularFecha(dataVehicle.expedicion_poliza),
    vencimiento_tecnomecanica: calcularFecha(dataVehicle.expedicion_tecnomecanica),
    expedicion_soat: dataVehicle.expedicion_soat,
    expedicion_poliza: dataVehicle.expedicion_poliza,
    expedicion_tecnomecanica: dataVehicle.expedicion_tecnomecanica,
    id_marca: dataVehicle.id_marca,
    id_tipo: dataVehicle.id_tipo,
    id_estado_vehiculo: 1,
  };

  swalWithBootstrapButtons.fire({
    title: '¿Deseas insertar vehículo?',
    text: "Se creará el vehículo con placa: " + dataVehicle.placa,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        '¡Registro Exitoso!',
        'El vehículo fue agregado con éxito',
        'success'
      )
      insertVehicle(data)
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
        'No se ha creado el vehículo',
        'error'
      )
    }
  });
};

export const UseSaveVehicle = (dataVehicle) => {

  let vehiculo = getVehicleByPlaca(dataVehicle.placa);

  let data = {
    placa: dataVehicle.placa,
    matricula: dataVehicle.matricula,
    r_trailer: dataVehicle.r_trailer,
    capacidad: dataVehicle.capacidad,
    modelo: dataVehicle.modelo,
    vencimiento_soat: calcularFecha(dataVehicle.expedicion_soat),
    vencimiento_poliza: calcularFecha(dataVehicle.expedicion_poliza),
    vencimiento_tecnomecanica: calcularFecha(dataVehicle.expedicion_tecnomecanica),
    expedicion_soat: dataVehicle.expedicion_soat,
    expedicion_poliza: dataVehicle.expedicion_poliza,
    expedicion_tecnomecanica: dataVehicle.expedicion_tecnomecanica,
    id_marca: dataVehicle.id_marca,
    id_tipo: dataVehicle.id_tipo,
    id_estado_vehiculo: 1,
  };

  if(vehiculo != null ){
    editVehicle(data, dataVehicle.placa)
    .then((response) => {
      swalWithBootstrapButtons.fire(
        '¡Registro Exitoso!',
        'El vehículo fue editado con éxito',
        'success'
      )
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
  }else{
    insertVehicle(data)
    .then((response) => {
      swalWithBootstrapButtons.fire(
        '¡Registro Exitoso!',
        'El vehículo fue agregado con éxito',
        'success'
      )
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
  }
};
