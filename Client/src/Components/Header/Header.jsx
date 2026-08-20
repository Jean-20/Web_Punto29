import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaUser,
    FaWhatsapp,
    FaSearch,
    FaShoppingCart
} from 'react-icons/fa';
import logoBlanco from '../../assets/Image/LogoBlanco.png';
import logoColor from '../../assets/Image/Logo.png';

import './Header.css';

const Header = () => {
    return (
        <section className="hero-section">

            {/* VIDEO DE FONDO */}
            {/* <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video> */}
            {/* <img
                className="hero-image"
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkUQl33gdR73cfhuALBcBrnnqoZUzPTKA2PGODlYq673XS8qsGGUtWZGZ0OmXcxsoOIvD22Nb_U5IyZdg-c-e4FvSv9CGjSVMI8SkHO3hV-WjMO3ZZdJktmsgCa4xiCW_upCvHYOxFYzBCd=s1360-w1360-h1020-rw"
                alt="Punto 29"
            /> */}
            {/* CAPA OSCURA SOBRE EL VIDEO */}
            <div className="video-overlay"></div>

            {/* HEADER */}
            <header className="header-container">

                <div className="header-inner">

                    {/* LOGO */}
                    <div className="header-logo">
                        <Link to="/" aria-label="Punto 29 - Inicio">
                            <img className="logo-white" src={logoBlanco} alt="Punto 29" />
                            <img className="logo-color" src={logoColor} alt="" aria-hidden="true" />
                        </Link>
                    </div>

                    {/* NAVEGACIÓN CENTRAL */}
                    <nav className="nav-group nav-center">

                        <Link to="/historia">
                            HISTORIA
                        </Link>

                        <Link to="/carta">
                            CARTA
                        </Link>

                        <Link to="/reserva">
                            RESERVA
                        </Link>

                        <Link to="/trabaja-con-nosotros">
                            TRABAJA CON NOSOTROS
                        </Link>

                    </nav>

                    {/* ACCIONES A LA DERECHA */}
                    <div className="header-right">
                        <div className="header-actions">

                            <a
                                href="https://wa.me/51999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>

                            <Link
                                to="/login"
                                title="Mi cuenta"
                            >
                                <FaUser />
                            </Link>

                            <Link
                                to="/carrito"
                                title="Carrito"
                            >
                                <FaShoppingCart />
                            </Link>

                        </div>

                    </div>

                </div>

            </header>

            {/* CONTENIDO DEL HERO */}
            <div className="hero-content">

                <div className="hero-text">

                    <h2>
                        SABORES QUE
                        <br />
                        NOS REPRESENTAN
                    </h2>

                    <p>
                        Una experiencia que empieza
                        desde el primer momento.
                    </p>
                    <div className="hero-buttons">
                        <Link
                            to="/carta"
                            className="hero-button reserve-button"
                        >
                            Reserva ahora
                        </Link>
                        <Link
                            to="/carta"
                            className="hero-button"
                        >
                            Ver carta
                        </Link>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Header;
