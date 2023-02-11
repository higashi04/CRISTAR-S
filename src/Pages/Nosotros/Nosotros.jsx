import React from "react";
import './Nosotros.css';

const Nosotros = () => {
    return(
        <div className="container">
            <h1 className="nosotrosTitle">Nosotros</h1>
            <div className="row">
                <div className="col-6">
                    <h3 className="nosotrosTitle">Mision</h3>
                    <p className="nosotrosText">
                        Promover el uso de programas tecnologicos que ayuden a facilitar las tareas de su negocio.
                    </p>
                </div>
                <div className="col-6">
                    <h3 className="nosotrosTitle">Vision</h3>
                    <p className="nosotrosText">
                        {/* un viajecito a cancun a una importante junta de negocios jajajaja */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Nosotros;