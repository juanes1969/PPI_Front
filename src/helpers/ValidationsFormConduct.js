

export const ValidationsFormConduct = (conduct) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexTel = /^.{1,9}$/;
    let regexNumber = /^.{1,9}(\d)$/;
    let regexLicence = /^LC.{1,10}$/;

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

    const validarDatoExiste = (numero) => {
        
        console.log(conduct)
        for (const [clave, valor] of Object.entries(conduct)) {
            // console.log("Iterando...");
            // console.log("La identificacion es: " + clave);            
            // console.log("La identificacion es: " + valor);            
        }

    }


    if (!conduct.identificacion) {
        errors.identificacion = 'El campo Identificacion es requerido';
    } else if (!regexNumber.test(conduct.identificacion)) {
        errors.identificacion = 'El campo Identificacion no es valido';
    }

    if (!conduct.nombre) {
        errors.nombre = 'El campo Nombre es requerido'
    } else if (!regexName.test(conduct.nombre)) {
        errors.nombre = 'El campo nombre tiene un formato invalido'
    }

    if (!conduct.fecha_nacimiento) {
        errors.fecha_nacimiento = 'El campo fecha de nacimiento es requerido';
    } else if (calcularEdad(conduct.fecha_nacimiento) < 18) {
        errors.fecha_nacimiento = 'Debes ser mayor de edad';
    }

    if (!conduct.primer_apellido) {
        errors.primer_apellido = 'El campo Primer apellido es requerido'
    } else if (!regexName.test(conduct.primer_apellido)) {
        errors.primer_apellido = 'El campo Primer apellido tiene un formato invalido'
    }

    if (!conduct.telefono_contacto) {
        errors.telefono_contacto = 'El campo Telefono es requerido'
    } else if (!regexTel.test(conduct.telefono_contacto)) {
        errors.telefono_contacto = 'El campo Telefono tiene un formato invalido'
    }

    if (!conduct.licencia_conduccion) {
        errors.licencia_conduccion = 'El campo Licencia es requerido'
    } else if (!regexLicence.test(conduct.licencia_conduccion)) {
        errors.licencia_conduccion = 'El campo Licencia tiene un formato invalido'
    }


    if (!conduct.expedicion_examenes_medicos) {
        errors.expedicion_examenes_medicos = 'El campo Examenes medicos es requerido'
    }

    if (!conduct.expedicion_curso_industrial) {
        errors.expedicion_curso_industrial = 'El campo Curso industrial es requerido'
    }
    if (!conduct.expedicion_curso_seguridad) {
        errors.expedicion_curso_seguridad = 'El campo Curso seguridad es requerido'
    }
    if (!conduct.tipo_licencia) {
        errors.tipo_licencia = 'El campo Tipo licencia es requerido'
    }


    return errors;
}
