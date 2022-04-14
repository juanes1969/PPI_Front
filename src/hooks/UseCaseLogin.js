import { useEffect, useState } from "react";
import { getUsers } from "../helpers/LoginHelper";

export const UseCaseLogin = (formLogin) => {

    getUsers(formLogin)
        .then(response => {
            const data = response.data.data
            console.log(data.length)
            if (!!data && data[0]) {
                let descripcion = data[0].descripcion
                let id_rol = data[0].id_rol
                console.log(descripcion, id_rol);

                switch (id_rol) {
                    case 1:
                        alert(`Bienvenido Inicio sesion correctamente ${id_rol}`);
                        window.location.href = "/Home";
                        break;

                    default:
                        break;
                }
            } else if (data.length == 0) {
                alert('Debe escribir el usuario y la contraseña correctos');
                window.location.href = "/";
            }
        })
        .catch(err => {
            console.log(err)
        });


}
