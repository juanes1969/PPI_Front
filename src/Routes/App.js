import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
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

export const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route path="/Home" component={Main} />
            <Route path="/Vehicles" component={Vehicle} />
            <Route path="/Conducts" component={Conduct} />
            <Route path="/Routes" component={RouteHome} />
            <Route path="/Expense" component={Expense} />
            <Route path="/Reports" component={Report} />
            <Route path="/Supports" component={Support} />
            

        </BrowserRouter>
    )
}
