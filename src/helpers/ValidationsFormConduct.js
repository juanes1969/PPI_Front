import React from 'react'

export const ValidationsFormConduct = (conduct) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexTel = /^.{1,9}$/;
    let regexNumber = /^.{1,9}(\d)$/;
    let regexLicence = /^LC.{1,10}$/;


    if (!conduct.identificacion) {
        errors.identificacion = 'El campo Identificacion es requerido';
    } else if (!regexNumber.test(conduct.identificacion))
        errors.identificacion = 'El campo Identificacion no es valido';

    if (!conduct.nombre) {
        errors.nombre = 'El campo Nombre es requerido'        
    }else if (!regexName.test(conduct.nombre)) {
        errors.nombre = 'El campo nombre tiene un formato invalido'
    }

    if (!conduct.primer_apellido) {
        errors.primer_apellido = 'El campo Primer apellido es requerido'        
    }else if (!regexName.test(conduct.primer_apellido)) {
        errors.primer_apellido = 'El campo Primer apellido tiene un formato invalido'
    }

    if (!conduct.segundo_apellido) {
        errors.segundo_apellido = 'El campo Segundo apellido es requerido'        
    }else if (!regexName.test(conduct.segundo_apellido)) {
        errors.segundo_apellido = 'El campo Segundo apellido tiene un formato invalido'
    }

    if (!conduct.telefono_contacto) {
        errors.telefono_contacto = 'El campo Telefono es requerido'        
    }else if (!regexTel.test(conduct.telefono_contacto)) {
        errors.telefono_contacto = 'El campo Telefono tiene un formato invalido'
    }

    if (!conduct.licencia_conduccion) {
        errors.licencia_conduccion = 'El campo Licencia es requerido'        
    }else if (!regexLicence.test(conduct.licencia_conduccion)) {
        errors.licencia_conduccion = 'El campo Licencia tiene un formato invalido'
    }
    

    return errors;
}
