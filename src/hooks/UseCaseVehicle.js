import { useState, useEffect } from "react";
import {
  getVehicleAvailable,
  getAllVehicles,
  getAllMarcas,
  getAllTypeVehicle,
  insertVehicle,
} from "../helpers/VehicleHelper";

export const UseEffectGetVehicles = () => {
  const [vehicles, setVehicles] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllVehicles().then((vehicle) => {
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

/**
 * TODO: PENSAR COMO HACER ESTE USECASE!!!!
 */
export const UseInsertVehicle = (dataVehicle) => {
  var data = {
    placa: dataVehicle.placa,
    matricula: dataVehicle.matricula,
    r_trailer: dataVehicle.r_trailer,
    capacidad: dataVehicle.capacidad,
    fecha_soat: dataVehicle.fecha_soat,
    fecha_poliza: dataVehicle.fecha_poliza,
    modelo: dataVehicle.modelo,
    fecha_tecnomecanica: dataVehicle.fecha_tecnomecanica,
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
