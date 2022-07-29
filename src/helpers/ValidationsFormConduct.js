import { useEffect } from "react";
import { getByIdConduct } from "./ConductHelper";


export const ValidationsFormConduct = (conduct) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexTel = /^.{1,10}$/;
    let regexNumber = /^.{1,9}(\d)$/;
    let regexLicence = /^LC.{1,10}$/;

    validarIdentificacion(conduct, errors, regexNumber);
    validarIdentificacionExistente(conduct, errors);
    validarNombre(conduct, errors, regexName);
    validarFechaNacimiento(conduct, errors, calcularEdad);
    validarPrimerApellido(conduct, errors, regexName);
    validarLicenciaConduccion(conduct, errors, regexLicence);
    validarTelefonoContacto(conduct, errors, regexTel);
    validarExpedicionExamenesMedicos(conduct, errors)
    validarExpedicionCursoIndustrial(conduct, errors)
    validarExpedicionCursoSeguridad(conduct, errors)
    validarTipoLicencia(conduct, errors)



    return errors
}


const calcularEdad = (fecha_nacimiento) => {

    let hoy = new Date();
    let cumpleanos = new Date(fecha_nacimiento);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    if (edad >= 18) {
        return edad;
    } else {
        return edad;
    }
}

const validarIdentificacion = (conduct, errors, regexNumber) => {

    if (!conduct.identificacion) {
        errors.identificacion = 'El campo Identificacion es requerido';
    } else if (!regexNumber.test(conduct.identificacion)) {
        errors.identificacion = 'El campo Identificacion no es valido';
    }
}

const validarIdentificacionExistente = async (conduct, errors) => {
    if (conduct.identificacion) {
        await getByIdConduct(conduct.identificacion)
            .then((response) => {
                if (response.length != 0) {
                    errors.identificacion = 'Esta identificacion ya existe';
                }
            })
    }
}


const validarNombre = (conduct, errors, regexName) => {
    if (!conduct.nombre) {
        errors.nombre = 'El campo Nombre es requerido'
    } else if (!regexName.test(conduct.nombre)) {
        errors.nombre = 'El campo nombre tiene un formato invalido'
    }
}

const validarFechaNacimiento = (conduct, errors, calcularEdad) => {
    if (!conduct.fecha_nacimiento) {
        errors.fecha_nacimiento = 'El campo fecha de nacimiento es requerido';
    } else if (calcularEdad(conduct.fecha_nacimiento) < 18) {
        errors.fecha_nacimiento = 'Debes ser mayor de edad';
    }
}

const validarPrimerApellido = (conduct, errors, regexName) => {
    if (!conduct.primer_apellido) {
        errors.primer_apellido = 'El campo Primer apellido es requerido'
    } else if (!regexName.test(conduct.primer_apellido)) {
        errors.primer_apellido = 'El campo Primer apellido tiene un formato invalido'
    }
}

const validarTelefonoContacto = (conduct, errors, regexTel) => {
    if (!conduct.telefono_contacto) {
        errors.telefono_contacto = 'El campo Telefono es requerido'
    } else if (!regexTel.test(conduct.telefono_contacto)) {
        errors.telefono_contacto = 'El campo Telefono tiene un formato invalido'
    }
}

const validarLicenciaConduccion = (conduct, errors, regexLicence) => {
    if (!conduct.licencia_conduccion) {
        errors.licencia_conduccion = 'El campo Licencia es requerido'
    } else if (!regexLicence.test(conduct.licencia_conduccion)) {
        errors.licencia_conduccion = 'El campo Licencia tiene un formato invalido'
    }
}

const validarExpedicionExamenesMedicos = (conduct, errors) => {
    if (!conduct.expedicion_examenes_medicos) {
        errors.expedicion_examenes_medicos = 'El campo Examenes medicos es requerido'
    }
}

const validarExpedicionCursoIndustrial = (conduct, errors) => {
    if (!conduct.expedicion_curso_industrial) {
        errors.expedicion_curso_industrial = 'El campo Curso industrial es requerido'
    }
}

const validarExpedicionCursoSeguridad = (conduct, errors) => {
    if (!conduct.expedicion_curso_seguridad) {
        errors.expedicion_curso_seguridad = 'El campo Curso seguridad es requerido'
    }
}

const validarTipoLicencia = (conduct, errors) => {
    if (!conduct.tipo_licencia) {
        errors.tipo_licencia = 'El campo Tipo licencia es requerido'
    }
}
