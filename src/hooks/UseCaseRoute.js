import { useState, useEffect } from 'react'
import { 
    getAllRoute,
    getVehicleRoute,
    getAllState,
    getAllCity,
    getConduct,
    insertRoute } from '../helpers/RouteHelper';

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
   
    // const { data: conduct } = UseConductRoute(dataRoute.id_vehiculo);
    // var condutorIde = conduct.map((conductor) => {
    //    return conductor.identificacion
    // })
    // console.log(condutorIde)
    var data = {
      
      
        codigo_ruta: dataRoute.codigo_ruta,
        nombre_producto: dataRoute.nombre_producto,
        referencia: dataRoute.referencia,
        cantidad: dataRoute.cantidad,
        fecha_inicio: dataRoute.fecha_inicio,
        fecha_fin: dataRoute.fecha_fin,
        flete: dataRoute.flete,
        id_vehiculo: dataRoute.id_vehiculo,
        id_conductor: dataRoute.id_conductor,
        id_origen: dataRoute.id_origen,
        id_destino: dataRoute.id_destino,
        id_estado_ruta: 1

    
    };
  
    insertRoute(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  