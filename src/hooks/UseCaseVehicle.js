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

  deleteVehicle(placa)
      .then((response) => {
          console.log(response);
          window.location.reload();
      })
      .catch((e) => {
          console.log(e);
      });
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

/**
 * TODO: PENSAR COMO HACER ESTE USECASE!!!!
 */
export const UseInsertVehicle = (dataVehicle) => {
  var data = {
    placa: dataVehicle.placa,
    matricula: dataVehicle.matricula,
    r_trailer: dataVehicle.r_trailer,
    capacidad: dataVehicle.capacidad,
    modelo: dataVehicle.modelo,
    vencimiento_soat: dataVehicle.vencimiento_soat,
    vencimiento_poliza: dataVehicle.vencimiento_poliza,
    fecha_tecnomecanica: dataVehicle.fecha_tecnomecanica,
    expedicion_soat: dataVehicle.expedicion_soat,
    expedicion_poliza: dataVehicle.expedicion_poliza,
    expedicion_tecnomecanica: dataVehicle.expedicion_tecnomecanica,
    id_marca: dataVehicle.id_marca,
    id_tipo: dataVehicle.id_tipo,
    id_estado_vehiculo: 1,
  };

  insertVehicle(data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const UseSaveVehicle = (dataVehicle) => {

  let vehiculo = getVehicleByPlaca(dataVehicle.placa);
  console.log(vehiculo)

  let data = {
    placa: dataVehicle.placa,
    matricula: dataVehicle.matricula,
    r_trailer: dataVehicle.r_trailer,
    capacidad: dataVehicle.capacidad,
    modelo: dataVehicle.modelo,
    vencimiento_soat: dataVehicle.vencimiento_soat,
    vencimiento_poliza: dataVehicle.vencimiento_poliza,
    fecha_tecnomecanica: dataVehicle.fecha_tecnomecanica,
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
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }else{
    insertVehicle(data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }
};
