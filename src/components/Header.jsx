import React, { useEffect, useRef, useContext, useState } from 'react';
import "../css/Header.css"
import { motion } from 'framer-motion';
import { FaWhatsapp, FaAngleRight, FaFacebookF, FaInstagram, FaArrowDown } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";

import { Link, Element } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";


// import planes from '../data/prices.json'

function Header() {
    const navigate = useNavigate(); // Obtenemos la ruta actual



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowHeader(true); // Si el usuario baja más de 50px, activa el header
            } else {
                setShowHeader(false); // Si está en la parte superior, quita el efecto
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Estado para controlar la visibilidad del mobile menú
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Función para manejar el click en el botón del menú móvil
    const handleMobileNavClick = () => {
        const mobileNav = document.querySelector('#mobile-nav');
        const body = document.body;
        const overlay = document.querySelector('.overlay-active')
        const downArrow = document.querySelector('.down-section')
        if (mobileNav) {
            mobileNav.classList.toggle('active');
            body.classList.toggle('no-scroll');
            overlay.classList.toggle('active');
            // downArrow.classList.toggle('active');
            setIsOpen(prevState => !prevState);
        }
    };

    // Funcion para abrir submenu de opciones de menu hamburguesa

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const openSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen); // Cambia el estado para mostrar/ocultar el submenú
    };

    const handleNavigation = (ruta) => {
        window.scrollTo(0, 0);  // Restablecer el scroll al inicio
        navigate(`${ruta}`);  // Navegar a la ruta con el parámetro
        if (isOpen) {
            handleMobileNavClick();
        }
    };
    const [showHeader, setShowHeader] = useState(false);
    return (
        <>
            {location.pathname !== "/booking-rooms" && (
                <>
                    <header
                        className={`${location.pathname === "/" || location.pathname === "/galeria" ? "header" : "header-otro"
                            } ${showHeader ? "active" : ""}`}
                    >
                        <HiBars3BottomLeft onClick={handleMobileNavClick} className="hamburger-button" />
                        <picture className='img-container'>
                            <a onClick={() => handleNavigation('/')}>
                                <img src="/logo-altos.png" alt="Logo del Hotel Altos del Iguazú" loading="lazy" />
                            </a>
                        </picture>

                        {/* <ul className='headerList'>
                    <a href="/">Inicio</a>
                    <a href="/galeria">Galería</a>
                    </ul> */}

                        <a className='button-laptop-start' onClick={() => handleNavigation(`/booking-rooms`)} >
                            Reservar
                        </a>
                        
                    </header>
                </>
            )}
            
            <nav id="mobile-nav">
                <section className='container-mobile-nav'>

                    <section className='btn-and-img'>

                        <motion.div

                            animate={
                                isOpen ?
                                    {
                                        rotate: [0, -180],
                                    }
                                    : {}
                            }
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                times: [0.5],

                            }}
                        >
                            <svg
                                onClick={handleMobileNavClick}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 hamburger-button-close"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </motion.div>

                    </section>
                    <picture className='mobile-nav-img'>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                            // whileHover={{ scale: 1.1 }}
                            transition={{ duration: 1.0, ease: "easeInOut" }}
                        >
                            <img src="/logo-altos.png" alt="Logo del Hotel Altos del Iguazú" loading="lazy" />
                        </motion.div>
                    </picture>

                    <article className='listas-container'>
                        <h3 className='listas-menu-title'>
                            Menú
                        </h3>
                        <ul className='list-idk-nav'>
                            <li>
                                <motion.div

                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >

                                    <a className={`list-mobileNav-option ${location.pathname === "/" ? "active" : ""
                                        }`} onClick={() => handleNavigation('/')}>Inicio</a>
                                </motion.div>

                            </li>
                            <li>
                                <motion.div

                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.0, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a className={`list-mobileNav-option ${location.pathname === "/galeria" ? "active" : ""
                                        }`} onClick={() => handleNavigation('/galeria')}>Galería</a>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div

                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.1, ease: "easeInOut" }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        width: "14rem",
                                        flexWrap: "wrap"
                                    }
                                    }
                                >
                                    <a className={`list-mobileNav-option ${location.pathname === "/habitaciones" ? "active" : ""
                                        }`} onClick={() => handleNavigation('/habitaciones')}>Habitaciones</a>
                                    <FaAngleRight onClick={openSubMenu} className={`svg-flechita-nav-sub ${isSubMenuOpen ? "active" : ""}`} style={{ fill: "#000", height: "25px", width: "25px" }} />
                                    <div
                                        className="abrir-caja"
                                        style={{
                                            display: isSubMenuOpen ? "flex" : "none", // Controla la visibilidad
                                            flexDirection: "column", // Asegura que los elementos estén en columna
                                            gap: "1rem", // Espaciado entre opciones
                                            marginTop: "0.5rem",
                                            width: "14rem"
                                        }}
                                    >
                                        <a style={{ fontSize: "16px" }} onClick={() => handleNavigation('/habitaciones/doble')}>Habitación Doble</a>
                                        <a style={{ fontSize: "16px" }} onClick={() => handleNavigation('/habitaciones/triple')}>Habitación Triple</a>
                                        <a style={{ fontSize: "16px" }} onClick={() => handleNavigation('/habitaciones/cuadruple')}>Habitación Cuádruple</a>
                                    </div>
                                </motion.div>
                            </li>
                        </ul>

                        <ul className='list-faq-client'>
                            <li>
                                <motion.div

                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >

                                    <Link to="faq" offset={-150} smooth={true} duration={1500} onClick={handleMobileNavClick} className="list-mobileNav-option">Preguntas frecuentes</Link>
                                </motion.div>

                            </li>
                            <li>
                                <motion.div

                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}} // Animación al entrar al viewport
                                    // whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.0, ease: "easeInOut" }}
                                // style={{ width: "100%", height: "100%" }}
                                >
                                    <a className={`list-mobileNav-option ${location.pathname === "/contacto" ? "active" : ""
                                        }`} onClick={() => handleNavigation('/contacto')}>Contacto</a>
                                </motion.div>
                            </li>
                        </ul>
                    </article>

                    <ul className='list-socials-nav'>
                        <motion.div

                            initial={{ opacity: 0, scale: 0 }}
                            animate={isOpen ? { opacity: 1, scale: 1 } : {}} // Animación al entrar al viewport
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <li><a href="https://www.instagram.com/altosdeliguazuhotel/">
                                <FaInstagram />
                            </a></li>
                        </motion.div>
                        <motion.div

                            initial={{ opacity: 0, scale: 0 }}
                            animate={isOpen ? { opacity: 1, scale: 1 } : {}} // Animación al entrar al viewport
                            transition={{ duration: .9, ease: "easeInOut" }}
                        >
                            <li><a href="https://wa.me/5493757452591?text=%F0%9F%91%8B%20%21Hola%21%20Quisiera%20reservar%20para%20%2A%5Bfecha%5D%2A%20para%20%2A%5Bcantidad%20de%20personas%5D%2A.%20%C2%BFPodr%C3%ADas%20confirmarme%20la%20disponibilidad%3F%20%F0%9F%98%8A">
                                <FaWhatsapp />
                            </a></li>
                        </motion.div>
                    </ul>
                </section>
            </nav >
        </>
    )
}

export default Header