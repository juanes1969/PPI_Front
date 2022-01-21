import axios from "axios";
export const getConducts = async() => {
    const url = `https://sotransiv-ppi.herokuapp.com/Conduct`;
    const resp = await axios.get(url);

    const conducts = resp.data.map(img => {
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






