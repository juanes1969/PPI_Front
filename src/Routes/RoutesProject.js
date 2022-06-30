import { Route, Routes } from 'react-router-dom';
import Conduct from '../pages/conduct/Conduct';
import Expense from '../pages/expense/Expense';
import Main from '../pages/globalPages/Home';
import Maintenances from '../pages/maintenance/Maintenance';
import Report from '../pages/report/Report';
import RouteHome from '../pages/route/Route';
import Support from '../pages/support/Support';
import Vehicle from '../pages/vehicle/Vehicle';

export const RoutesProject = () => {
    return (
        <>
            <Routes>
                <Route path="/Home" element={<Main />} />
                <Route path="/Vehicles" element={<Vehicle />} />
                <Route path="/Maintenance" element={<Maintenances/>} />
                <Route path="/Conducts" element={<Conduct />} />
                <Route path="/Routes" element={<RouteHome />} />
                <Route path="/Reports" element={<Report />} />
                <Route path="/Supports" element={<Support />} />
                <Route path="/Expense" element={<Expense />} />
            </Routes>
        </>
    )
}
