import React from 'react'
import { Sidebar } from '../../components/globalComponents/Sidebar'
import { Vehicle } from '../../components/vehicle/TableVehicle'

const Vehicles = () => {
    return (
        <>
        <div className='vehicle-page'>
            <Sidebar />
            <Vehicle />
        </div>
        </>
    )
}

export default Vehicles;
