import React from 'react'
import "../css/Services.css"
import { MdOutlineFreeBreakfast, MdPool, MdOutlineWifi, MdOutlineDirectionsCar } from "react-icons/md";
import { Element } from "react-scroll";
import { motion } from 'framer-motion';

function Services() {
    return (
        <Element name="services">

            <section className='services-container'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.0 }}
                    style={{
                        width: "100%"
                    }}
                >

                    <article className='services-item'
                        style={{
                            backgroundImage: "url(/altos-fotos/15.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPositionY: "center"
                        }}
                    >
                        <MdOutlineFreeBreakfast />
                        <span>Desayuno Buffet</span>
                        <div className='cover-filter'></div>
                    </article>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.2 }}
                    style={{
                        width: "100%"
                    }}
                >

                    <article className='services-item'
                        style={{
                            backgroundImage: "url(/altos-fotos/11.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPositionY: "62%"
                        }}
                    >
                        <MdPool />
                        <span>Piscina</span>
                        <div className='cover-filter'></div>
                    </article>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.4 }}
                    style={{
                        width: "100%"
                    }}
                >

                    <article className='services-item'
                        style={{
                            backgroundImage: "url(/altos-fotos/5.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPositionY: "center"
                        }}
                    >
                        <MdOutlineWifi />
                        <span>WIFI gratis</span>
                        <div className='cover-filter'></div>
                    </article>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.6 }}
                    style={{
                        width: "100%"
                    }}
                >

                    <article className='services-item'
                        style={{
                            backgroundImage: "url(/altos-fotos/9.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPositionY: "bottom"
                        }}
                    >
                        <MdOutlineDirectionsCar />
                        <span>Estacionamiento</span>
                        <div className='cover-filter'></div>
                    </article>
                </motion.div>
            </section>
        </Element>
    )
}

export default Services