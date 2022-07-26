import React from 'react'
import usuario from "../../assets/img-cards/ManualUsuario.svg";
import sistema from "../../assets/img-cards/ManualSistema.svg";
import manualUsuario from "../../assets/doc/ManualUsuario.pdf"
import manualSistema from "../../assets/doc/ManualSistema.pdf"

export const AcercaPage = () => {
  return (
    <div className='home-cards'>
        <div className='row'>
        <div className="col-sm-4">
          <div className="card card-home">
            <img src={usuario} class="card-img-top img-card" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Manual de Usuario</h5>
              <p class="card-text">En este manual encontrará las instrucciones y conceptos necesarios para la utilización del software, detallando las diferenctes funciones que ofrece la aplicación. </p>
              <a className="btn btn-warning" href={manualUsuario} download="Manual de Usuario - Sotransiv">
                Descargar Manual
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card card-home">
            <img src={sistema} class="card-img-top img-card" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Manual de Sistema </h5>
              <p class="card-text">En este maual encontrará la documentación que se realizó en la etapa de análisis y diseño, para poder iniciar con el desarrollo e implementación de la aplicación. </p>
              <a className="btn btn-warning" href={manualSistema} download="Manual de Sistema - Sotransiv">
                Descargar Manual
              </a>
            </div>
          </div>
        </div>  
        </div>
    </div>
  )
}
