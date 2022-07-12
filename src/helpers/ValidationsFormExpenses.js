import { Mensajes } from "./Message";

const ValidationsFormExpense = (expenses) => {
    let error = {}
    let regexPlaca = /^([A-Z]{3}-([0-9]{3})+)*$/;
    let regexNumber = /^[0-9]*$/;
    let regexYear = /^[0-9]{4}$/;
    let regexPlacaTrailer = /^([R]{1}-([0-9]{5})+)*$/;


    validarFechaGasto(expenses, error );
    
    validarValorGasto(expenses, error);

    validarDescripcion( expenses, error);

    validarCodigoManifiesto(expenses, error);

    validarTipoGasto(expenses, error);


    return error;
}

export default ValidationsFormExpense

function validarFechaGasto(expenses, error) {
  if (!expenses.fecha_gasto) {
    error.fecha_gasto = Mensajes.gasto.campoObligatorio;
  }
}

function validarValorGasto(expenses, error) {
  if (!expenses.valor_gasto) {
    error.valor_gasto = Mensajes.gasto.campoObligatorio;
  }
}

function validarDescripcion(expenses, error) {
  if (!expenses.descripcion) {
    error.descripcion = Mensajes.gasto.campoObligatorio;
  }
}

function validarCodigoManifiesto(expenses, error) {
  if (!expenses.codigo_manifiesto || expenses.codigo_manifiesto === "0") {
    error.codigo_manifiesto = Mensajes.gasto.campoObligatorio;
  }
}

function validarTipoGasto(expenses, error) {
  if (!expenses.id_tipo_gasto || expenses.id_tipo_gasto === "0") {
    error.id_tipo_gasto = Mensajes.gasto.campoObligatorio;
  }
}

