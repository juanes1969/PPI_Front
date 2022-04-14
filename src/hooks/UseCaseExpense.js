import { useState, useEffect } from 'react'
import {
  getAllRoute,
  getVehicleRoute,
  getAllState,
  getAllCity,
  getConduct,
  getAllProduct,
  insertRoute,
  deleteRoute,
  editRoute,
  getRouteByIdRoute
} from '../helpers/RouteHelper';

export const UseEffectGetRoutes = () => {
  const [routes, setRoutes] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getAllRoute().then(route => {
      setRoutes({
        data: route,
        loading: false
      });
    });
  }, []);

  return routes;
};


export const UseDeleteRoute = (id_ruta) => {

  deleteRoute(id_ruta)
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
}


export const UseVehicleRoute = () => {
  const [vehicleRoute, setVehicleRoute] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getVehicleRoute().then(vehicle => {
      setVehicleRoute({
        data: vehicle,
        loading: false
      });
    });
  }, []);

  return vehicleRoute;
};


export const UseState = () => {
  const [stateRoutes, setstateRoute] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllState().then((stateroute) => {
      setstateRoute({
        data: stateroute,
        loading: false,
      });
    });
  }, []);

  return stateRoutes;
};

export const UseCity = () => {
  const [cityRoutes, setCityRoute] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllCity().then((city) => {
      setCityRoute({
        data: city,
        loading: false,
      });
    });
  }, []);

  return cityRoutes;
};

export const UseProduct = () => {
  const [productRoute, setProduct] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllProduct().then((product) => {
      setProduct({
        data: product,
        loading: false,
      });
    });
  }, []);

  return productRoute;
};

export const UseConductRoute = (placa) => {
  const [conductRoute, setConductRoute] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getConduct(placa).then((conduct) => {
      setConductRoute({
        data: conduct,
        loading: false,
      });
    });
  }, []);

  return conductRoute;
};



export const UseInsertRoute = (dataRoute) => {


  var data = {

    producto: dataRoute.producto,
    cantidad: dataRoute.cantidad,
    fecha_inicio: dataRoute.fecha_inicio,
    fecha_fin: dataRoute.fecha_fin,
    flete: dataRoute.flete,
    id_vehiculo: dataRoute.id_vehiculo,
    id_origen: dataRoute.id_origen,
    id_destino: dataRoute.id_destino,
    id_estado_envio: 1,


  };

  insertRoute(data)
    .then((response) => {
      console.log(response.data);
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};


export const UseSaveRoute = (dataRoute) => {

  let route = getRouteByIdRoute(dataRoute.id_ruta);
  console.log(route)

  let data = {
    producto: dataRoute.producto,
    cantidad: dataRoute.cantidad,
    fecha_inicio: dataRoute.fecha_inicio,
    fecha_fin: dataRoute.fecha_fin,
    flete: dataRoute.flete,
    id_vehiculo: dataRoute.id_vehiculo,
    id_origen: dataRoute.id_origen,
    id_destino: dataRoute.id_destino,
    id_estado_ruta: 1,
  };

  if(route != null ){
    editRoute(data, dataRoute.id_ruta)
    .then((response) => {
      console.log(response.data);
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
  }else{
    insertRoute(data)
    .then((response) => {
      console.log(response.data);
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
  }
};