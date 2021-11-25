import React, { useState } from "react";
import "../../Styles/login.css";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "../../assets/img/LogoBlack.png";
import { UseCaseLogin } from "../../hooks/UseCaseLogin";

export const Login = () => {

  const [formState, setFormState] = useState({
    usuario: '',
    clave: ''
  })

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  console.log(formState)




  //console.log(data);

  const onSumbit = (e) => {
    e.preventDefault()
    //console.log(data)
    const response = UseCaseLogin(formState)
    console.log(response);

    // if (!!data && data[0]) {
    //   let descripcion = data[0].descripcion
    //   let id_rol = data[0].id_rol
    //   console.log(descripcion, id_rol);

    //   if (id_rol == 1) {
    //     alert(`Bienvenido Inicio sesion correctamente ${id_rol}`);
    //     window.location.href = "/Home";
    //   }
    // } else {
    //   alert('El usuario o la contraseña no son correctos');
    //   window.location.href = "/";
    // }
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
