import React, { useEffect } from "react";
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
    valor_gasto: "",
    descripcion: "",
    id_ruta: "",
    id_tipo_gasto: "",

  }

  const handleChangeData = ({ target }) => {
    const { name, value } = target;
    setExpense({ ...expenses, [name]: value });
  }

  console.log(expenses);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseEdit) {
      UseSaveExpense(expenses)
      e.target.reset();
      closeModal();
    } else {

      UseInsertExpense(expenses);
      setExpense(initialExpenseState);
      e.target.reset();
      closeModal();
    }
  };

  const handleCancelButton = () => {
    setExpense(initialExpenseState)
    setExpenseEdit(null)
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

  const valorMinimo = () => {
    let valorMin = 500000
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
                onClick={handleCancelButton}
              ></button>
            </div>

            <div className="">
              <div className="container">
                <form
                  className="form-modal needs-validation"
                  novalidate
                  onSubmit={handleSubmit}
                >
                  <div className="row align-items-start">
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Valor Gasto ($):
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form`}
                        value={expenses.valor_gasto}
                        name="valor_gasto"
                        id="valor_gasto"
                        onChange={handleChangeData}
                        min={valorMinimo}
                        required
                      />

                      <label className="col-form-label modal-label">
                        Descripcion *:
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form`}
                        value={expenses.descripcion}
                        name="descripcion"
                        id="descripcion"
                        onChange={handleChangeData}
                        required
                      />



                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Codigo (Ruta):
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form`}
                        value={expenses.id_ruta}
                        name="id_ruta"
                        id="id_ruta"
                        onChange={handleChangeData}
                        required
                      />
                      <label className="col-form-label modal-label">
                        Tipo gasto *:
                      </label>
                      <select
                        className={`form-select input-form`}
                        value={Expense.id_tipo_gasto}
                        name="id_tipo_gasto"
                        id="id_tipo_gasto"
                        onChange={handleChangeData}
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

                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer modal-btn">
                    <button type="submit" className="btn btn-info-form" onClick={handleSubmit}>
                      {expenseEdit ?
                        ('Editar gasto') :
                        ('Registrar gasto')}
                    </button>
                    <button
                      type="reset"
                      className="btn  btn-danger"
                      onClick={closeModal}
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
