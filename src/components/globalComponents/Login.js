import React, { useContext } from "react";
import { IconContext } from "react-icons";
import logo from "../../assets/img/zyro-image (1).png";
import { UseCaseLogin } from "../../hooks/UseCaseLogin";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { getUsers } from "../../helpers/LoginHelper";
import { UseForm } from "../../hooks/UseForm";
import "../../Styles/login.css";
import { types } from "../../types/types";
import Swal from 'sweetalert2'

export const Login = () => {


  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);


  const { handleInputChange, formValues} = UseForm({
    usuario: '',
    clave: ''
  })

  console.log(formValues)





  const onSumbit = (e) => {
    e.preventDefault();

    var data = {
      usuario: formValues.usuario,
      clave: formValues.clave,
    }

    getUsers(data)
      .then((response) => {
        if (response.data.data.length === 1) {
          Swal.fire(
            'Inicio de sesion exitoso ',
            'Tu inicio de sesion se ejecuto de manera correcta',
            'success'
          ).then(resp => {
            if (resp.isConfirmed) {
              const resp = response.data;

              const action = {
                type: types.login,
                payload: resp
              }

              dispatch(action);
              navigate('/Home', {
                replace: true
              }
              )
            }
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y contraseña incorrectos',
            footer: '<a href="">Acaso olvidaste tu usuario o contraseña?</a>'
          })
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <div className="container-login">
        <div className="capa-gradiente"></div>

        <form className="form-signin" id="form">
          <img className="logo" src={logo} alt="logo" />

          <IconContext.Provider value={{ size: "1.3rem" }}>
            <div className="input-group">
              <span className="input-group-addon">
                <FaIcons.FaUser />
              </span>
              <input
                id="login-username"
                type="text"
                className="form-control"
                name="usuario"
                placeholder="Username"
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>

            <div className="input-group">
              <span className="input-group-addon">
                <RiIcons.RiLockPasswordFill />
              </span>
              <input
                id="login-password"
                type="password"
                className="form-control"
                name="clave"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
          </IconContext.Provider>

          <div className="input-group">
            <div
              className="checkbox"
              style={{ textAlign: "left", marginLeft: "20%" }}
            ></div>
          </div>

          <button className="btn-login" onClick={onSumbit}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </>
  );
};
