import React from 'react'
import { useNavigate } from 'react-router-dom';

import "../css/Rooms.css"
import RoomsData from "../data/Rooms.json"
import { FaAngleDown } from "react-icons/fa";
import { Link, Element } from "react-scroll";
import { CiCircleCheck } from "react-icons/ci";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

function Rooms() {
    const navigate = useNavigate(); // Obtenemos la ruta actual

    const handleNavigation = (ruta) => {
        window.scrollTo(0, 0);  // Restablecer el scroll al inicio
        navigate(`${ruta}`);  // Navegar a la ruta con el parámetro
    };
    return (
        <>
            <section className='slider-rooms-title'>
                <Swiper
                    className='swiper-rooms-juani'
                    // pagination={{
                    //     dynamicBullets: false,
                    // }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Autoplay]}
                    spaceBetween={1}
                    slidesPerView={1}
                    grabCursor={true}
                    effect="fade"
                >
                    <SwiperSlide>
                        <article className='slider-article'>
                            <img loading="lazy"  src="/altos-fotos/7.jpg" alt="Habitación del Hotel Altos del Iguazú. Con wifi gratis, secador de pelo y baño privado" style={{ width: "100%" }} />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='slider-article'>
                            <img loading="lazy"  src="/altos-fotos/11.jpg" alt="Piscina del Hotel Altos del Iguazú con bar de piscina." style={{ width: "100%" }} />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className='slider-article'>
                            <img loading="lazy"  src="/altos-fotos/10.jpg" alt="Piscina del Hotel Altos del Iguazú con bar de piscina." style={{ width: "100%" }} />
                        </article>
                    </SwiperSlide>
                </Swiper>
                <Link to='rooms' offset={-120} smooth={true} duration={1500}>
                    <FaAngleDown className='down-section' />
                </Link>
                <article className='title-swiper'>
                    <h3>DESCUBRÍ NUESTRAS HABITACIONES</h3>
                    <h4>Amueblado y decorado en estilo minimalista para un uso ideal del espacio.</h4>
                </article>
            </section>
            <Element name='rooms'>
                <section className='rooms-list-container'>
                    {RoomsData.map((room, i) => (
                        <article key={i} className='room-item'>
                            <h5>Habitación {room.nombre}</h5>
                            <picture>
                                <img loading="lazy"  onClick={() => handleNavigation(`/habitaciones/${room.id}`)} src={room.thumbnailImage} alt={`Habitación ${room.nombre} del Hotel Altos del Iguazú. Con wifi gratis, secador de pelo y baño privado`} />
                            </picture>
                            <div className='room-item-desc'>
                                <p>{room.descripcion}</p>
                                <ul className='room-item-checklist'>
                                    {room.ventajas.slice(0,7).map((ventaja, i) => (
                                        <li>
                                            <CiCircleCheck />
                                            {ventaja}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => handleNavigation(`/habitaciones/${room.id}`)} className='room-item-link'>
                                    VER HABITACIÓN
                                </button>
                            </div>
                        </article>
                    ))}
                </section>
            </Element>
        </>
    )
}

export default Rooms