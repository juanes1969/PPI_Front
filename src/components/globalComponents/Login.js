import React, { useState } from 'react'
import '../../Styles/login.css'
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const Login = () => {



    const [state, setState] = useState({
        form: {
            username: '',
            password: '',
        }
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
        
    }

    return (
        <>
            <div className="container-login">

                <div className="capa-gradiente"></div>
                
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
