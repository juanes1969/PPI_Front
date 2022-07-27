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
  getRouteByIdRoute,
  getProductByRoute,
  getProductById,
  insertRouteDetail,
  deleteRouteDetail,
  editRouteDetail,
  getDetailByRoute,
  getDetailById

} from '../helpers/RouteHelper';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss';


export const UseEffectGetRoutes = () => {
  const [routes, setRoutes] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getAllRoute()
      .then(route => {
        setRoutes({
          data: route,
          loading: false
        });
      });
  }, []);

  return routes;
};


export const UseDeleteRoute = (id_ruta) => {

  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro?',
    text: "La Ruta quedara completa",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        '¡Eliminado!',
        'La Ruta fue Completada',
        'success'
      )
      deleteRoute(id_ruta)
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
        'La Ruta sigue en Proceso',
        'error'
      )
    }
  })
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

export const UseGetProductByRoute = (codigo_manifiesto) => {
  const [product, setProduct] = useState({
    data: []
  });

  useEffect(() => {
    getProductByRoute(codigo_manifiesto)
      .then(product => {
        setProduct({
          data: product
        });
      });
  }, []);

  return product;
}

export const UseGetProductById = (id_producto) => {
  const [product, setProduct] = useState({
    data: []
  });

  useEffect(() => {
    getProductById(id_producto)
      .then(product => {
        setProduct({
          data: product
        });
      });
  }, []);

  return product;
}
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



export const UseInsertRoute = (dataRoute, detailRoute) => {

  let data = {
    codigo_manifiesto: dataRoute.codigo_manifiesto,
    fecha_inicio: dataRoute.fecha_inicio,
    fecha_fin: dataRoute.fecha_fin,
    flete: dataRoute.flete,
    id_vehiculo: dataRoute.id_vehiculo,
    id_origen: dataRoute.id_origen,
    id_destino: dataRoute.id_destino,
    id_conductor: dataRoute.id_conductor,
  };


  insertRoute(data)
    .then(() => {
      UseInsertRoutDetail(detailRoute);
    })
    .catch((e) => {
      console.log(e);
    });
};


export const UseInsertRoutDetail = (dataDetail) => {
  if (dataDetail.length !== 0) {
    dataDetail.forEach((item) => {
      debugger
      console.log(item)
      insertDetail(item);
    })
  }
}



const insertDetail = (dataDetail) => {
  let data = {
    id_detalle: dataDetail.id_detalle,
    id_producto: dataDetail.id_producto,
    codigo_manifiesto: dataDetail.codigo_manifiesto,
    cantidad_producto: dataDetail.cantidad_producto
  }

  insertRouteDetail(data)
    .then(() => {
      swalWithBootstrapButtons.fire(
        '¡Registro Exitoso!',
        'La ruta fue agregada con éxito',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })
    })
    .catch((e) => {
      console.log(e);
    });
}

export const UseEditRoute = (dataRoute, detailRoute) => {
  let route = getRouteByIdRoute(dataRoute.codigo_manifiesto);

  let data = {
    codigo_manifiesto: dataRoute.codigo_manifiesto,
    fecha_inicio: dataRoute.fecha_inicio,
    fecha_fin: dataRoute.fecha_fin,
    flete: dataRoute.flete,
    id_vehiculo: dataRoute.id_vehiculo,
    id_origen: dataRoute.id_origen,
    id_destino: dataRoute.id_destino,
    id_conductor: dataRoute.id_conductor,
  };

  if (route != null) {
    editRoute(data, dataRoute.codigo_manifiesto)
      .then(() => {
        UseEditRouteDetail(detailRoute);
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    insertRoute(data)
      .then(() => {
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

export const UseEditRouteDetail = (dataDetail) => {
  if (dataDetail.length !== 0) {
    dataDetail.forEach((item) => {
      validarDetalle(item);
    })
  }
}

const validarDetalle = (item) => {
  getDetailById(item.id_detalle)
  .then((response) => {
    if(response.length !== 0){
      editDetail(item);
    }else{
      insertDetail(item);
    }
  })
}

const editDetail = (dataDetail) => {
  let data = {
    id_detalle: dataDetail.id_detalle,
    id_producto: dataDetail.id_producto,
    codigo_manifiesto: dataDetail.codigo_manifiesto,
    cantidad_producto: dataDetail.cantidad_producto
  }

  editRouteDetail(data, dataDetail.id_detalle)
    .then(() => {
      swalWithBootstrapButtons.fire(
        '¡Registro Exitoso!',
        'La ruta fue editada con éxito',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
        window.location.reload();
      }})
    })
    .catch((e) => {
      console.log(e);
    });
}


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

export const UseDeleteDetail = (id_detalle) => {

  deleteRouteDetail(id_detalle)
  .then((response) => {
    console.log("Producto eliminado")
})
.catch((e) => {
    console.log(e);
});

}

export const UseGetDetailByRoute = (codigo_manifiesto) => {
  const [detail, setDetail] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getDetailByRoute(codigo_manifiesto).then((detail) => {
      setDetail({
        data: detail,
        loading: false,
      });
    });
  }, []);

  return detail;
}