import React from 'react'
import "../css/Presentation.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { motion } from 'framer-motion';

function Presentation() {
    const navigate = useNavigate(); // Obtenemos la ruta actual

    const handleNavigation = (ruta) => {
        window.scrollTo(0, 0);  // Restablecer el scroll al inicio
        navigate(`${ruta}`);  // Navegar a la ruta con el parámetro
    };
    const isDesktop = useMediaQuery({ minWidth: 1440 });
    const isTablet = useMediaQuery({ minWidth: 760 });

    return (
        <>
            <section className='presentation-container'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.0 }}
                >
                    <article className='presentation-text-one'>
                        {(isDesktop || isTablet) &&
                            <>
                                <img src="/10-65.jpg" alt="Cataratas del Iguazú al atardecer, maravilla natural entre Argentina y Brasil con un paisaje impresionante" loading="lazy" />
                            </>
                        }

                        <div className='presentation-desktop-flex'>
                            <h2>Altos del Iguazú Hotel</h2>
                            <p>
                                Un moderno hotel 3 estrellas
                                A 20 minutos de las <b>Cataratas del Iguazú.</b> <br />
                                Disfrutá del aire puro de Iguazú con tu familia y relajate en nuestra piscina al aire libre. Además, estamos a pasos de <b>La Aripuca</b>, una atracción cultural y ecológica que podés visitar caminando. <br />
                                Contamos con Seguridad para vos y tu auto en nuestro estacionamiento vigilado las 24hs.
                                También el hotel posee <b>Internet WiFi gratuito</b> y <b>caja de seguridad</b> en las habitaciones.
                                Y además <b>Desayuno Continental</b> Antes de comenzar tu día, un buen desayuno lo espera de 7:00hs a 9:30hs.
                            </p>
                            {/* <a onClick={() => handleNavigation('/galeria')} className='presentation-gallery-btn'>VER GALERÍA</a> */}
                        </div>
                    </article>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}
                >

                    <article className='presentation-rooms'>
                        <span>TODAS LAS COMODIDADES</span>
                        <h3>El mejor confort para tus vacaciones</h3>
                        <p>Nuestras habitaciones amplias, cómodas y siempre impecables están diseñadas para que tu descanso sea perfecto. Además, nuestro equipo está atento a cada detalle, con una atención cálida y personalizada, incluso con la dedicación de nuestra propia dueña, quien se encarga de que todo esté en su lugar para vos.</p>
                        {isDesktop ? (
                            <a onClick={() => handleNavigation('/galeria')}>VER GALERÍA</a>
                        ) : (
                            <a onClick={() => handleNavigation('/habitaciones')}>VER HABITACIONES</a>
                        )}
                        <div className='cover-filter-pr'></div>
                    </article>
                </motion.div>
                {isDesktop &&
                    <>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.0 }}
                        >

                            <article className='presentation-text-one' style={{
                                marginTop: "3rem"
                            }}>
                                <div className='presentation-desktop-flex'>
                                    <h4>Te espera el descanso que merecés</h4>
                                    <p>
                                        Las <b>Cataratas del Iguazú</b> son un destino increíble, pero también demandan energía. Por eso, en Altos del Iguazú, queremos que al regresar te sientas como en casa. <br />
                                        Después de un día de aventura, nada mejor que volver a un ambiente acogedor donde puedas relajarte y recargar energías.
                                    </p>
                                    <a onClick={() => handleNavigation('/habitaciones')} className='presentation-gallery-btn'>VER HABITACIONES</a>
                                </div>
                                <img src="/altos-fotos/7.jpg" alt="Habitación del Hotel Altos del Iguazú. Con wifi gratis, secador de pelo y baño privado" loading="lazy" />
                            </article>
                        </motion.div>
                    </>
                }

            </section>
        </>
    )
}

export default Presentation