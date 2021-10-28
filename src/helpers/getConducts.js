export const getConducts = async() => {
    const url = `https://sotransiv-ppi.herokuapp.com/Conduct`;
    const resp = await fetch(url)

    const { data } = await resp.json();

    const conducts = data.map(img => {
        return {
            identificacion: img.identificacion,
            nombre: img.nombre,
            primer_apellido: img.primer_apellido,
            segundo_apellido: img.segundo_apellido,
            telefono_contacto: img.telefono_contacto
        }
    });

    return conducts;
}


export const getTypeVehicle = async() => {
    const url = `https://sotransiv-ppi.herokuapp.com/Vehicle/vehicleAvailable`;
    const resp = await fetch(url)

    const { data } = await resp.json();

    const typeVehicle = data.map(vhcl => {
        return {
            id_vehiculo: vhcl.id_vehiculo,
            placa:vhcl.placa            
        }
    });

    return typeVehicle;
}



