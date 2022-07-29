import { useState, useEffect } from 'react'
import {
getAllExpense,
getAllTypeExpense,
insertExpense,
editExpense,
deleteExpense,
getExpenseByIdExpense
} from '../helpers/ExpenseHelper';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss';



export const UseEffectGetExpense = () => {
  const [expenses, setExpenses] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getAllExpense().then(expense => {
      debugger
      console.log(expense);
      setExpenses({
        data: expense,
        loading: false
      });
    });
  }, []);
  console.log(expenses)
  return expenses;
};





export const UseDeleteExpense = (id_gasto) => {

  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro?',
    text: "El Gasto quedara eliminado",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        '¡Eliminado!',
        'El Gasto fue Eliminado',
        'success'
      )
      deleteExpense(id_gasto)
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
        'El Gasto sigue Registrado',
        'error'
      )
    }
  })
}







export const UseTypeExpense = () => {
  const [typeExpense, setTypeExpense] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllTypeExpense().then((expense) => {
      setTypeExpense({
        data: expense,
        loading: false,
      });
    });
  }, []);

  return typeExpense;
};






export const UseInsertExpense= (dataExpense) => {

debugger
console.log(dataExpense)
  var data = {

   
    fecha_gasto: dataExpense.fecha_gasto,
    valor_gasto: dataExpense.valor_gasto,
    descripcion: dataExpense.descripcion,
    codigo_manifiesto: dataExpense.codigo_manifiesto,
    id_tipo_gasto: dataExpense.id_tipo_gasto,

  };

  insertExpense(data)
    .then(() => {
      swalWithBootstrapButtons.fire(
        '¡Registro Exitoso!',
        'El Gasto fue agregado con éxito',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
        window.location.reload();
      }})
    })
    .catch((e) => {
      console.log(e);
    });     

};





export const UseSaveExpense = (dataExpense) => {
  let expense = getExpenseByIdExpense(dataExpense.id_gasto);

  let data = {
    
    fecha_gasto: dataExpense.fecha_gasto,
    valor_gasto: dataExpense.valor_gasto,
    descripcion: dataExpense.descripcion,
    codigo_manifiesto: dataExpense.codigo_manifiesto,
    id_tipo_gasto: dataExpense.id_tipo_gasto,
  };
  if(expense != null ){
    editExpense(data, dataExpense.id_gasto)
    .then((response) => {
      swalWithBootstrapButtons.fire(
        '¡Registro Exitoso!',
        'El Gasto fue editado con éxito',
        'success'
      ).then((response) => {
        if (response.isConfirmed) {
        window.location.reload();
      }})
    })
    .catch((e) => {
      console.log(e);
    });
  }else{
    insertExpense(data)
    .then((response) => {
      swalWithBootstrapButtons.fire(
        '¡Registro Exitoso!',
        'El Gasto fue agregado con éxito',
        'success'
      ).then((response) => {
        if (response.isConfirmed) {
        window.location.reload();
      }})
    })
    .catch((e) => {
      console.log(e);
    });
  }


};

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