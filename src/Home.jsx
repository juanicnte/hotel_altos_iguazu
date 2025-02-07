import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// componentes
import Services from "./components/Services"
import Presentation from './components/Presentation';
function Home() {

    

    const handleNavigation = (ruta) => {
        window.scrollTo(0, 0);  // Restablecer el scroll al inicio
        navigate(`${ruta}`);  // Navegar a la ruta con el parámetro
        if (isOpen) {
            handleMobileNavClick();
        }
    };

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Reproducción automática bloqueada:", error);
            });
        }
    }, []);
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const heightDesktop = useMediaQuery({ minHeight: 722 });
    return (
        <>
            {!isDesktop ? (

                <div className='slider-container'>

                    <div className='slider-title'>
                        <h1>Tu aventura está en las Cataratas</h1>
                        <p>Nosotros nos ocupamos de que cada noche sea perfecta, con calidez y hospitalidad. Descubre nuestro alojamiento cerca de las Cataratas del Iguazú, donde podrás relajarte después de un día de aventuras.</p>
                        <div className='slider-stars'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <Swiper
                        className='swiper-juani'
                        // pagination={{
                        //   dynamicBullets: true,
                        // }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay, Pagination]}
                        spaceBetween={1}
                        slidesPerView={1}
                        grabCursor={true}
                        effect="fade"
                    >
                        <SwiperSlide>
                            <article className='slider-article'>
                                <img src="/9.jpg" alt="Manos emergiendo entre helechos en un entorno natural y frondoso" style={{ width: "100%" }} />
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className='slider-article'>
                                <img src="/10-65.jpg" alt="Cataratas del Iguazú al atardecer, maravilla natural entre Argentina y Brasil con un paisaje impresionante" style={{ width: "100%" }} />
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article className='slider-article'>
                                <img src="/8.jpg" alt="Vista panorámica de las Cataratas del Iguazú con un arcoíris y exuberante vegetación" style={{ width: "100%" }} />
                            </article>
                        </SwiperSlide>
                    </Swiper>
                    {heightDesktop &&
                        <>
                            <Link to='services' offset={-150} smooth={true} duration={1500}>
                                <FaAngleDown className='down-section' />
                            </Link>
                        </>
                    }
                </div>
            ) : (
                <>
                    <section className="header-video-container">
                        <video ref={videoRef} loop muted preload="auto">
                            <source src="/altos-fotos/video1.mp4" type="video/mp4" />
                            Tu navegador no soporta este video.
                        </video>
                        <div className='slider-title'>
                            <h1>Tu aventura está en las Cataratas del Iguazú</h1>
                            <p>Nosotros nos ocupamos de que cada noche sea perfecta, con calidez y hospitalidad. Descubre nuestro alojamiento cerca de las Cataratas del Iguazú, donde podrás relajarte después de un día de aventuras.</p>
                            <div className='slider-stars'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        {heightDesktop &&
                            <Link to='services' offset={-150} smooth={true} duration={1500}>
                                <FaAngleDown className='down-section' />
                            </Link>
                        }
                    </section>
                </>
            )}
            <Services />
            <Presentation />
            
        </>
    )
}

export default Home