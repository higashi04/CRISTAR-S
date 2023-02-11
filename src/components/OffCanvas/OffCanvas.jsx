import { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import {BsCodeSlash} from "react-icons/bs";

import './OffCanvas.css';
import logo from '../../utilities/CRISTARS_banner.jpg';
import logoWhite from '../../utilities/CRISTARS_banner_white.jpg';
import star from '../../utilities/star-removebg.png';


const OffCanvas = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    
    return (
        <>
            <img id="logoBtn" src={logo} alt="menu btn" onClick={handleOpen} />
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Link className="btn btn-lg offCanvasBtn" to={"/"} onClick={handleClose}>
                            <img id="canvasLogo" src={logoWhite} alt="logo white" />
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="container">
                        <h2>
                            <img className="offCanvasStarLogo" src={star} alt="star" />
                            <Link className="btn btn-lg offCanvasBtn" to={"/nosotros"} onClick={handleClose}>
                                Nosotros
                            </Link>
                        </h2>
                        <hr />
                        <div className="container ms-3">
                        <h2>
                            <Link className="btn btn-lg offCanvasBtn" to={"/servicios"} onClick={handleClose}>
                                <BsCodeSlash />  Servicios
                            </Link>
                        </h2>
                        <hr />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvas;