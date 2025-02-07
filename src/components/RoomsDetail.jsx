import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../css/RoomDetail.css"
import RoomsData from "../data/Rooms.json"
import { useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function RoomsDetail() {
    const { id } = useParams(); // Obtiene el parámetro dinámico `id` de la URL
    const room = RoomsData.find((p) => p.id === id); // Busca el plan correspondiente

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const navigate = useNavigate(); // Obtenemos la ruta actual

    const handleNavigation = (ruta) => {
        window.scrollTo(0, 0);  // Restablecer el scroll al inicio
        navigate(`${ruta}`);  // Navegar a la ruta con el parámetro
    };
    return (
        <>
            <section className='rd-title'>
                <button className='rd-button-back' onClick={() => handleNavigation("/habitaciones")}>
                    <FaAngleLeft />
                    Ver todas las habitaciones
                </button>
                <h3 className='rd-name'>
                    Habitación {room.nombre}
                </h3>
            </section>
            <section className='rd-gallery-container'>
                <article className='containerOfSwiper'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="rd-gallery-swp"
                    >
                        {room.images.map((img, i) => (
                            <>
                                <SwiperSlide>
                                    <img key={i} src={img} alt={`Imagen ${i + 1} del Hotel Altos del Iguazú`} loading="lazy" />
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="rd-gallery-swp2"
                    >
                        {room.images.map((img, i) => (
                            <>
                                <SwiperSlide>
                                    <img key={i} src={img} alt={`Imagen ${i + 1} del Hotel Altos del Iguazú`} loading="lazy" />
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                </article>
            <section className='rd-decription'>
                <p>{room.detail}</p>

                <h2 className='rd-dsc-title'>Esta Habitación incluye:</h2>
                <ul className='room-item-checklist'>
                    {room.ventajas.map((ventaja, i) => (
                        <li key={i}>
                            <CiCircleCheck />
                            {ventaja}
                        </li>
                    ))}
                </ul>

                <button className='rd-reserve-btn' onClick={() => handleNavigation(`/booking-rooms`)}>
                    RESERVAR
                </button>
            </section>
                    </section>  
        </>
    )
}

export default RoomsDetail