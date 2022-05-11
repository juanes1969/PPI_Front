import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { useReducer } from 'react';
import { authReducer } from '../auth/authReducter';
import Login from '../pages/login/Login';

import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import { PrivateRoute } from './PrivateRoute';
import { RoutesProject } from './RoutesProject';
import { PublicRoute } from './PublicRoute';



const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}



export const App = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        if (!user) return;

        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <PublicRoute>
                            < Login />
                        </PublicRoute>
                    }
                    />
                    <Route path="/*" element={
                        <PrivateRoute>
                            <RoutesProject />
                        </PrivateRoute>
                    }
                    />
                </Routes>

            </BrowserRouter>
        </AuthContext.Provider >
    )
}
