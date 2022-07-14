import React, { useEffect, useState } from "react";
import "../../Styles/modal.css";
import * as AiIcons from "react-icons/ai";
import "../../helpers/modal-function";
import { useForm } from "react-hook-form";
import dateFormat, { masks } from "dateformat";
import {
  UseInsertExpense,
  UseTypeExpense,
  UseSaveExpense,
} from "../../hooks/UseCaseExpense";
import Expense from "../../pages/expense/Expense";
import logo from "../../assets/img/LogoNew.png";
import { Expenses } from "./TableExpense";
import ValidationsFormExpense from "../../helpers/ValidationsFormExpenses";



export const ModalExpense = ({
  isOpenModal,
  closeModal,
  expenses,
  setExpenseEdit,
  expenseEdit,
  setExpense

}) => {

  const initialExpenseState = {
    id_gasto: "",
    fecha_gasto: "",
    valor_gasto: "",
    descripcion: "",
    id_ruta: "",
    id_tipo_gasto: "",

  }
  const [error, setError] = useState({});

  const handleChangeData = ({ target }) => {
    const { name, value } = target;
    setExpense({ ...expenses, [name]: value });
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Object.entries(error).length)
    if (Object.entries(error).length === 0) {
      if (expenseEdit) {
        UseSaveExpense(expenses)
        e.target.reset();
        closeModal();
      } else {
        UseInsertExpense(expenses);
        closeModal();
        setExpense(initialExpenseState);
        e.target.reset();
      }
    } else {
      alert('Debes ingresar los campos de manera correcta');
    }
  };

  const handleBlur = (e) => {
    handleChangeData(e);
    setError(ValidationsFormExpense(expenses));
  }

  const handleCancelButton = () => {
    setExpense(initialExpenseState)
    setExpenseEdit(null)
    setError({})
    closeModal()
  }

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  const fechaMinima = () => {
    let fechaMin = new Date();
    fechaMin.setFullYear(fechaMin.getFullYear() - 1)
    fechaMin = dateFormat(fechaMin, "isoDate")
    return fechaMin;
  }

  const fechaMaxima = () => {
    let fechaMax = new Date();
    fechaMax = dateFormat(fechaMax, "isoDate")
    return fechaMax;
  }

  const valorMinimo = (valor) => {
    let valorMin = 10000
    if (valor < valorMin){
      alert('El valor')
    }
    return valorMin;
  }





  const { data: typeAllExpense } = UseTypeExpense();

  useEffect(() => {
    if (expenseEdit) {
      setExpense(expenseEdit)
    } else {
      setExpense(initialExpenseState)
    }

  }, [expenseEdit, setExpense, setExpenseEdit]);

  return (
    <>
      <div
        className={`modalInicial ${isOpenModal && "modal-abierta"}`}
        onClick={closeModal}
      >
        <div className="modal-dialog">
          <div
            className="modal-content modal-gasto-ruta contenido__modal"
            onClick={handleModalDialogClick}
          >
            <div className="modal-header">
              <img className="logo-form" src={logo} alt="logo" />
              <h3 className="modal-title" id="exampleModalLabel">
                {expenseEdit ?
                  ('Editar gasto') :
                  ('Registrar gasto')}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>

            <div className="container-expenses">
              <div className="container">
                <form
                  className="form-modal needs-validation"
                  novalidate
                  onSubmit={handleSubmit}
                >
                  <div className="row align-items-start">
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Codigo (Manifiesto)*:
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form ${error.codigo_manifiesto && "input-error"}`}
                        value={expenses.codigo_manifiesto}
                        name="codigo_manifiesto"
                        id="codigo_manifiesto"
                        onChange={handleChangeData}
                        autoComplete="off"
                        onBlur={handleBlur}
                        disabled={expenseEdit ? true : false}
                        required
                      />
                      {error.codigo_manifiesto && <p className="error-message">{error.codigo_manifiesto}</p>}


                      <label className="col-form-label modal-label">
                        Descripcion *:
                      </label>
                      <input
                        type="text"
                        className={`form-select input-form ${error.descripcion ? "input-error" : ""}`}
                        value={expenses.descripcion}
                        name="descripcion"
                        id="descripcion"
                        onChange={handleChangeData}
                        autoComplete="off"
                        onBlur={handleBlur}
                        required
                      />
                      {error.descripcion && <p className="error-message">{error.descripcion}</p>}

                      <label className="col-form-label modal-label">
                        Fecha Gasto *:
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form ${error.fecha_gasto ? "input-error" : ""}`}
                        value={expenses.fecha_gasto}
                        name="fecha_gasto"
                        id="fecha_gasto"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        min={fechaMinima()}
                        required
                      />
                      {error.fecha_gasto && <p className="error-message">{error.fecha_gasto}</p>}



                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Valor Gasto ($)*:
                      </label>
                      <input
                        type="number"
                        className={`form-control input-form ${error.valor_gasto ? "input-error" : ""}`}
                        value={expenses.valor_gasto}
                        name="valor_gasto"
                        id="valor_gasto"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        min={10000}
                        autoComplete="off"
                        required
                      />
                      {error.valor_gasto && <p className="error-message">{error.valor_gasto}</p>}
                      <label className="col-form-label modal-label">
                        Tipo gasto *:
                      </label>
                      <select
                        className={`form-control input-form ${error.id_tipo_gasto ? "input-error" : ""}`}
                        value={Expense.id_tipo_gasto}
                        name="id_tipo_gasto"
                        id="id_tipo_gasto"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {typeAllExpense.map((type) => (
                          <option
                            key={type.id_tipo_gasto}
                            value={type.id_tipo_gasto}
                          >
                            {type.descripcion}
                          </option>
                        ))}
                      </select>
                      {error.id_tipo_gasto && <p className="error-message">{error.id_tipo_gasto}</p>}

                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer modal-btn footer-expense">
              <button type="submit" className="btn btn-info-form" onClick={handleSubmit}>
                {expenseEdit ?
                  ('Editar gasto') :
                  ('Registrar gasto')}
              </button>
              <button
                type="reset"
                className="btn  btn-danger"
                onClick={handleCancelButton}
              >
                Cancelar registro
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
