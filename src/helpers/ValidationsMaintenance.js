import { Mensajes } from "./Message";

const ValidationsMaintenance = (maintenance) => {
    let error = {}
    
    validarValorMantenimiento(maintenance, error);

    validarDescripcion(maintenance, error);

    validarFechaMantenimiento(maintenance, error);

    validarPlaca(maintenance, error);
    
  return error;
}

const valorMinimo = (valor) =>{
    if (valor < 10000){
      return valor;
    }
  }

  function validarValorMantenimiento(maintenance, error) {
    if (!maintenance.valor_mantenimiento) {
      error.valor_mantenimiento = Mensajes.mantenimiento.campoObligatorio;
    }else if (valorMinimo(maintenance.valor_mantenimiento) < 10000){
      error.valor_mantenimiento = Mensajes.gasto.valorInvalido;
    }
  }

  function validarFechaMantenimiento(maintenance, error){
    if(!maintenance.fecha_realizado){
        error.fecha_realizado = Mensajes.mantenimiento.campoObligatorio;
    }
  }

  function validarDescripcion(maintenance, error){
    if(!maintenance.descripcion){
        error.descripcion = Mensajes.mantenimiento.campoObligatorio;
    }
  }

  function validarPlaca(maintenance, error){
    if(!maintenance.placa || maintenance.placa === "0"){
        error.placa = Mensajes.mantenimiento.campoObligatorio;
    }
  }

export default ValidationsMaintenance