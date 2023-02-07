import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

import './OffCanvas.css';
import logo from '../../utilities/CRISTARS_banner.jpg';
import logoWhite from '../../utilities/CRISTARS_banner_white.jpg';

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
                        <img id="canvasLogo" src={logoWhite} alt="logo white" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="container footer-text">
                        hello world
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvas;