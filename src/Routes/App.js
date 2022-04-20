import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { useReducer } from 'react';
import { authReducer } from '../auth/authReducter';
import Main from '../pages/globalPages/Home';
import Conduct from '../pages/conduct/Conduct';
import Vehicle from '../pages/vehicle/Vehicle';
import RouteHome from '../pages/route/Route';
import Report from '../pages/report/Report';
import Support from '../pages/support/Support';
import Login from '../pages/login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import Expense from '../pages/expense/Expense';


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}



export const App = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <BrowserRouter>
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={Main} />
                <Route path="/Vehicles" component={Vehicle} />
                <Route path="/Conducts" component={Conduct} />
                <Route path="/Routes" component={RouteHome} />
                <Route path="/Reports" component={Report} />
                <Route path="/Supports" component={Support} />
                <Route path="/Expense" component={Expense} />
            </BrowserRouter >
        </AuthContext.Provider >
    )
}
