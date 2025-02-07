import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
import "react-day-picker/style.css";
import "../css/Booking.css"
import { es } from "react-day-picker/locale";
import RoomsData from "../data/Rooms.json"
import CustomToast from './CustomToast';
import { FaAngleLeft } from "react-icons/fa";



// iconos
import { TbUsersGroup } from "react-icons/tb";
import { CiCalendar, CiUser, CiCirclePlus, CiCircleMinus, CiCircleCheck } from "react-icons/ci";
import { MdLocalParking } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Booking() {
    const [range, setRange] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [customerIsOpen, setCustomerOpen] = useState(false);
    const [count, setCount] = useState(2)
    const [childrenCount, setChildrenCount] = useState(0)
    const [showToast, setShowToast] = useState(false);

    console.log("Fecha de inicio:", range?.from);
    console.log("Fecha de fin:", range?.to);

    const closeClear = () => {
        setIsOpen(false)
        setRange(null)
    }

    const closeClearCustomers = () => {
        setCustomerOpen(false)
        setCount(2)
        setChildrenCount(0)
    }

    const navigate = useNavigate(); // Obtenemos la ruta actual
    const handleNavigation = (ruta) => {
        window.scrollTo(0, 0);  // Restablecer el scroll al inicio
        navigate(`${ruta}`);  // Navegar a la ruta con el parámetro
    };


    const generarEnlaceWhatsapp = (room) => {
        // Verificar que 'range.from' y 'range.to' no estén vacíos
        if (!range?.from || !range?.to) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            return;
        }

        // Crear el mensaje para WhatsApp
        const mensaje = `🎉 ¡Reserva en Altos del Iguazú! 🌟\n\n
    📅 **Fechas seleccionadas**:\n
    Desde: ${range.from.toLocaleDateString()} 🏖️\n
    Hasta: ${range.to.toLocaleDateString()} ⏳\n\n
    🏨 **Habitación**: ${room.nombre}\n
    👥 **Adultos**: ${count} 🧑‍🤝‍🧑\n
    👶 **Niños**: ${childrenCount} 👶\n\n`;

        // Codificar el mensaje para la URL
        const mensajeCodificado = encodeURIComponent(mensaje);

        // Crear el enlace de WhatsApp
        const enlaceWhatsapp = `https://wa.me/5493757452591?text=${mensajeCodificado}`;

        // Redirigir al enlace de WhatsApp
        window.location.href = enlaceWhatsapp;
    };


    return (
        <>
            <section className="booking-container">

                <div className="booking-header">
                    <h3>Altos del Iguazú Hotel</h3>
                    <img src="/logo.png" alt="Logo del Hotel Altos del Iguazú" loading="lazy" />

                </div>
                <div className="pick-date-btn-open">
                    <span
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <CiCalendar strokeWidth={1} />

                        Fechas
                    </span>

                    <span
                        onClick={() => setCustomerOpen(!isOpen)}
                    >
                        <CiUser strokeWidth={1} />
                        Personas
                    </span>
                </div>
                {customerIsOpen && (
                    <div className="customers-card">
                        <svg
                            onClick={() => closeClearCustomers()}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 date-button-close"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <div className="container-item-c">
                            <span>Adultos</span>
                            <div className="plus-minus">
                                <CiCircleMinus onClick={() => setCount((count) => count - 1)}>
                                </CiCircleMinus>
                                <span>
                                    {count}
                                </span>
                                <CiCirclePlus onClick={() => setCount((count) => count + 1)}>
                                </CiCirclePlus>
                            </div>
                        </div>
                        <div className="container-item-c">
                            <span>Niños</span>
                            <div className="plus-minus">
                                <CiCircleMinus onClick={() => setChildrenCount((childrenCount) => childrenCount - 1)}>
                                </CiCircleMinus>
                                <span>
                                    {childrenCount}
                                </span>
                                <CiCirclePlus onClick={() => setChildrenCount((childrenCount) => childrenCount + 1)}>
                                </CiCirclePlus>
                            </div>
                        </div>
                        <div className="save-customers">
                            <button className="cancel-customers"
                                onClick={() => closeClearCustomers()}
                            >
                                Cancelar
                            </button>
                            <button className="savebtn-customers" onClick={() => setCustomerOpen(false)}>
                                Guardar
                            </button>
                        </div>
                    </div>
                )
                }
                {isOpen && (
                    <>
                        <div className="booking-pick-date">
                        {/* {range?.from && range?.to && (
                                <p
                                style={{
                                    fontSize: "12px"
                                }}
                                >
                                    📅 Seleccionaste desde el <strong>{range.from.toLocaleDateString()}</strong> hasta el <strong>{range.to.toLocaleDateString()}</strong>
                                </p>
                            )} */}
                            <button className="save-date-btn" onClick={() => setIsOpen(!isOpen)}>
                                Guardar Fecha
                            </button>
                            {/* <svg
                                onClick={() => closeClear()}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 date-button-close"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg> */}
                            <DayPicker
                                mode="range"
                                selected={range}
                                onSelect={setRange}
                                captionLayout="dropdown-months"
                                numberOfMonths={2} pagedNavigation
                                locale={es}
                                id="booking-pick-date"
                                style={{
                                    fontSize: '14px',  // Ajusta el tamaño de la fuente
                                    width: '300px',    // Ajusta el tamaño del contenedor
                                    height: 'auto',    // Ajusta la altura
                                  }}
                            />
                            
                            
                        </div>
                    </>
                )}
            </section>
                <h2 className="title-offers">Numero de Ofertas: 3</h2>
            <section className='booking-rooms-list-container'>
                {RoomsData.map((room, i) => (
                    <article key={i} className='booking-room-item'>
                        <picture>
                            <img onClick={() => handleNavigation(`/habitaciones/${room.id}`)} src={room.thumbnailImage} alt={`Habitación ${room.nombre} del Hotel Altos del Iguazú. Con wifi gratis, secador de pelo y baño privado`} loading="lazy" />
                        </picture>
                        <div className='booking-room-item-desc'>
                            <h3>Habitación {room.nombre}</h3>
                            <div className="room-size">
                                <TbUsersGroup />
                                <span>
                                    {room.cantidadPersonas}&nbsp;&nbsp; + 1 cama extra
                                </span>
                            </div>
                            {/* <p>{room.descripcion}</p> */}
                            {/* <ul className='booking-room-item-checklist'>
                                {room.ventajas.slice(0, 7).map((ventaja, i) => (
                                    <li>
                                        <CiCircleCheck />
                                        {ventaja}
                                    </li>
                                ))}
                            </ul> */}

                            <ul className="room-items">
                                <li><MdLocalParking /></li>
                                <li><FaWifi /></li>
                                <li><FaRegSnowflake /></li>
                                <li><FaTv /></li>
                            </ul>
                            <span className="mas-ventajas" onClick={() => handleNavigation(`/habitaciones/${room.id}`)}>
                                Ver más comodidades
                            </span>
                            <button className='booking-room-item-link'
                                onClick={() => generarEnlaceWhatsapp(room)}
                            >
                                <FaWhatsapp />
                                Reservar
                            </button>
                        </div>
                    </article>
                ))}
            </section>
            <span className="back-to-home" onClick={() => handleNavigation(`/`)}>
                <FaAngleLeft/>
                Volver a la página principal
            </span>
            {showToast && (
                // <Alert status='error'>
                //     <AlertIcon />
                //     <AlertTitle>Your browser is outdated!</AlertTitle>
                //     <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
                // </Alert>
                <CustomToast
                    id="booking-id"
                    title="Error."
                    description="Debes completar fecha de entrada y salida."
                    status="error"
                    // duration={10000}
                    position="top-right"
                />
            )}
        </>
    );
}

export default Booking