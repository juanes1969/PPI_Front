import React from "react";
import { Link } from "react-router-dom";
import conduct from "../../assets/img-cards/conduct.svg";
import vehicle from "../../assets/img-cards/vehicle.svg";
import route from "../../assets/img-cards/route.svg";
import maintenance from "../../assets/img-cards/maintenance.svg";
import expenses from "../../assets/img-cards/expenses.svg";
import report from "../../assets/img-cards/report.svg";

export const HomePage = () => {
  return (
    <div className="home-cards">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img src={conduct} class="card-img-top img-card" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Conductores</h5>
              <p class="card-text">Módulo de gestión de conductores</p>
              <Link className="btn btn-warning" to="/Conducts">
                Ver más
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <img src={vehicle} class="card-img-top img-card" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Vehículos </h5>
              <p class="card-text">Módulo de gestión de vehículos</p>
              <Link className="btn btn-warning" to="/Vehicles">
                Ver más
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <img src={route} class="card-img-top img-card" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Rutas</h5>
              <p class="card-text">Módulo de gestión de rutas</p>
              <Link className="btn btn-warning" to="/Routes">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img
              src={maintenance}
              class="card-img-top img-card"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Mantenimiento</h5>
              <p class="card-text">Módulo de gestión de mantenimiento</p>
              <Link className="btn btn-warning" to="/Maintenance">
                Ver más
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <img src={expenses} class="card-img-top img-card" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Gastos</h5>
              <p class="card-text">Módulo de gestión de gastos rutas.</p>
              <Link className="btn btn-warning" to="/Expense">
                Ver más
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <img src={report} class="card-img-top img-card" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Reportes</h5>
              <p class="card-text">Módulo para generar informes.</p>
              <Link className="btn btn-warning" to="/Reports">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
