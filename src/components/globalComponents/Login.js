import React, { useState } from 'react'
import '../../Styles/login.css'
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Loader } from './Loader';

export const Login = () => {

    const [state, setState] = useState({
        form: {
            username: '',
            password: '',
        },
        loading: false
    })

    const handleInputChange = async (e) => {
        await setState({
            form: {
                ...state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state.form.username === "Juan" && state.form.password === "1234567") {
            setTimeout(function () {
                console.log("Mandando peticion");
                alert("Usuarios ingresados de manera exitosa");
                window.location.href = "/Home";
            }, 3000);
            setState({
                loading: true
            });
        } else {
            // window.location.reload();
            setTimeout(function () {
                console.log("Usuario o contraseña incorrectos");
                alert("Usuario o contraseña incorrectos");
            }, 3000);
            setState({
                form: {
                    username: '',
                    password: '',
                },
                loading: true
            });
        }
    }

    return (
        <>
            <div className="container-login">

                <div className="capa-gradiente"></div>
                {state.loading && <Loader />}
                <form className="form-signin" id="form" onSubmit={handleSubmit}>

                    <span className="panel-heading">
                        <h1 className="panel-title">Iniciar sesion</h1>
                    </span>

                    <img className="mb-4 logo" src="sdf" alt=""></img>
                    <IconContext.Provider value={{ size: "1.3rem" }}>
                        <div className="input-group">
                            <span className="input-group-addon"><FaIcons.FaUser /></span>
                            <input id="login-username" type="text" className="form-control" name="username" placeholder="username or email" onChange={handleInputChange} />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon"><RiIcons.RiLockPasswordFill /></span>
                            <input id="login-password" type="password" className="form-control" name="password" placeholder="password" onChange={handleInputChange} />
                        </div>
                    </IconContext.Provider>

                    <div className="input-group">
                        <div className="checkbox" style={{ textAlign: "left", marginLeft: "20%" }}>
                            <label>
                                <input id="login-remember" type="checkbox" name="remember" value="1" /> Remember me
                            </label>
                        </div>
                    </div>

                    <button className="btn-login" onClick={handleSubmit}>Ingresar</button>

                </form>
            </div>
        </>
    )
}
