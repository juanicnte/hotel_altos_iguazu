import React from 'react'
import "../css/Footer.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import { Element } from "react-scroll";

import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { GiSmartphone } from "react-icons/gi";


function Footer() {
    return (
        <>
            <footer>
                <section className='footer-rating-container'>
                    <article className='rating-title'>
                        <h3>Ellos aman Iguazú</h3>
                        <h2>ALTOS DEL IGUAZÚ HOTEL</h2>
                    </article>
                    <div className="elfsight-app-e3dc8a8e-43b8-4811-82f2-50e6e6988301" data-elfsight-app-lazy></div>
                </section>
                <section className='footer-faq-contact'>
                    <Element name='faq' className='footer-faq-container'>
                        <section className='footer-faq'>
                            <h2>Preguntas frecuentes</h2>
                            <Accordion allowToggle>
                                <AccordionItem mb={4}>
                                    <h2>
                                        <AccordionButton bg="transparent" borderBottom="3px solid #d5d8dc">
                                            <Box as='span' flex='1' textAlign='left' fontSize="lg" fontWeight="500" color="blackAlpha.800">
                                                Menores y mascotas
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} bg="blackAlpha.100" mt={1} fontSize="14px">
                                        Los menores de 18 años no pueden realizar reservas sin la intervención de un adulto. Los niños de hasta 2 años pueden compartir habitación con sus padres, con un máximo de dos menores por habitación.
                                        En cuanto a las mascotas, por el momento nuestro complejo no está adaptado para recibirlas, por lo que no contamos con la opción Pet Friendly.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem mb={4} >
                                    <h2>
                                        <AccordionButton bg="transparent" borderBottom="3px solid #d5d8dc">
                                            <Box as='span' flex='1' textAlign='left' fontSize="lg" fontWeight="500" color="blackAlpha.800">
                                                Horarios de entrada y salida
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} bg="blackAlpha.100" mt={1} fontSize="14px">
                                        El horario de check-in es a partir de las 13:00, mientras que el check-out debe realizarse antes de las 10:00.

                                        El desayuno está incluido en la tarifa y se sirve de 7:00 a 10:00.

                                        Nuestra piscina está disponible para el disfrute de nuestros huéspedes desde las 10:00 hasta la medianoche. Además, contamos con un Bar de Piscina, donde podrás disfrutar de tragos, bebidas, empanadas y tostados en un ambiente relajado. El bar abre todos los días de 18:00 a 23:00.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem mb={4} >
                                    <h2>
                                        <AccordionButton bg="transparent" borderBottom="3px solid #d5d8dc">
                                            <Box as='span' flex='1' textAlign='left' fontSize="lg" fontWeight="500" color="blackAlpha.800">
                                                Política de limpieza
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} bg="blackAlpha.100" mt={1} fontSize="14px">
                                        Todas nuestras habitaciones incluyen amenities como shampoo, crema de enjuague y jabón. El servicio de limpieza está incluido en la estadía, garantizando un ambiente fresco y confortable durante tu visita.

                                        Si deseas disfrutar de la piscina, en recepción puedes solicitar toallas exclusivas para ese sector.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem mb={4} >
                                    <h2>
                                        <AccordionButton bg="transparent" borderBottom="3px solid #d5d8dc">
                                            <Box as='span' flex='1' textAlign='left' fontSize="lg" fontWeight="500" color="blackAlpha.800">
                                                Lugares de interés
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} bg="blackAlpha.100" mt={1} fontSize="14px">
                                    Si deseas explorar los alrededores, encontrarás varias opciones a poca distancia del hotel.

A solo dos cuadras, puedes visitar La Aripuca, un sitio de interés cultural con una gran historia. Para los más pequeños, Cultura Park es una excelente alternativa, con atracciones diseñadas especialmente para ellos.

A 100 metros del hotel, se encuentra IPS, un centro comercial con diversas opciones de compra que permanece abierto hasta la medianoche. También puedes visitar Fly Park, ideal para quienes buscan diversión y aventura, o conocer Güirá Oga, un refugio de aves que te permitirá conectar con la naturaleza.

Si después de un día de paseos quieres relajarte, recuerda que nuestra piscina está abierta hasta la medianoche, y el Bar de Piscina te espera de 18:00 a 23:00 con una deliciosa selección de tragos, empanadas, gaseosas, licuados y tostados.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </section>

                    </Element>
                    <section className='footer-contact-cotainer'>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "2rem"
                            }}
                        >
                            <img src="/logo-altos.png" alt="Logo del Hotel Altos del Iguazú" loading="lazy" />
                            <article className='footer-socials-list'>
                                <a href="https://www.instagram.com/altosdeliguazuhotel/" target="_blank">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.facebook.com/AltosdelIguazuHotel" target="_blank">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.tripadvisor.com.ar/Hotel_Review-g312806-d9730556-Reviews-Altos_del_Iguazu-Puerto_Iguazu_Province_of_Misiones_Litoral.html" target="_blank">
                                    <FaTripadvisor />
                                </a>
                                <a href="https://maps.app.goo.gl/WxL1Jux8rV67GM6R6" target="_blank">
                                    <svg
                                        viewBox="0 0 512 512"
                                        style={{ enableBackground: "new 0 0 512 512" }}
                                    >
                                        <circle style={{ fill: "#40A459" }} cx="255.722" cy="256" r="255.445" />
                                        <path
                                            style={{ fill: "#378B4E" }}
                                            d="M255.722,0.555c-1.944,0-3.878,0.03-5.812,0.073c-0.492,0.011-0.983,0.022-1.474,0.037
                                    c-1.843,0.051-3.682,0.119-5.514,0.209c-0.474,0.023-0.945,0.056-1.418,0.081c-1.394,0.077-2.785,0.165-4.174,0.264
                                    c-0.699,0.05-1.397,0.098-2.094,0.153c-1.61,0.128-3.217,0.27-4.82,0.428c-0.829,0.082-1.654,0.173-2.479,0.262
                                    c-0.991,0.108-1.98,0.221-2.968,0.34c-0.856,0.103-1.714,0.202-2.567,0.313c125.334,16.327,222.126,123.498,222.126,253.282
                                    S347.737,492.953,222.403,509.28c0.854,0.111,1.71,0.211,2.567,0.313c0.987,0.119,1.977,0.232,2.968,0.34
                                    c0.826,0.09,1.652,0.181,2.479,0.262c1.603,0.158,3.209,0.3,4.82,0.428c0.696,0.056,1.395,0.104,2.094,0.153
                                    c1.388,0.099,2.779,0.188,4.174,0.264c0.473,0.027,0.945,0.058,1.418,0.081c1.833,0.09,3.672,0.158,5.514,0.209
                                    c0.491,0.014,0.982,0.026,1.474,0.037c1.932,0.043,3.868,0.073,5.812,0.073c141.079,0,255.445-114.367,255.445-255.445
                                    S396.801,0.555,255.722,0.555z"
                                        />
                                        <path
                                            style={{ fill: "#898790" }}
                                            d="M222.403,233.787l106.563-61.152c0,0,116.569,24.829,143.473-24.263l8.485-15.483l7.379,16.04
                                    c15.321,33.304,23.42,70.329,23.42,107.071c0,84.691-41.95,163.833-112.217,211.703l-7.25,4.94L222.403,233.787z"
                                        />
                                        <path
                                            style={{ fill: "#7A797F" }}
                                            d="M511.166,256c0-44.143-11.198-85.671-30.908-121.898l-7.82,14.269
                                    c-9.45,17.245-21.888,34.878-34.284,50.741c4.162,18.295,6.374,37.333,6.374,56.888c0,71.337-29.248,135.834-76.4,182.176
                                    l23.852,34.666C463.639,427.598,511.166,347.012,511.166,256z"
                                        />
                                        <path
                                            style={{ fill: "#3D9AE3" }}
                                            d="M255.722,512c-87.455,0-168.01-44.081-215.484-117.917l-4.527-7.04l142.267-119.937l163.74,230.122
                                    l-10.434,3.385C306.874,508.169,281.452,512,255.722,512z"
                                        />
                                        <path
                                            style={{ fill: "#1D81CE" }}
                                            d="M342.752,496.827l-17.317-24.795c-30.569,19.333-65.625,32.915-103.137,37.801
                                    c10.906,1.42,22.13,1.612,33.424,1.612C286.17,511.445,315.674,506.6,342.752,496.827z"
                                        />
                                        <path
                                            style={{ fill: "#FFFFFF" }}
                                            d="M177.978,267.106l44.425-33.319l170.805,238.278l-8.302,4.872
                                    c-11.729,6.884-24.073,12.861-36.69,17.766l-6.499,2.527L177.978,267.106z"
                                        />
                                        <path
                                            style={{ fill: "#E0E0E3" }}
                                            d="M341.718,497.229c18.2-6.475,35.457-14.944,51.49-25.164l-24.615-34.338
                                    c-13.395,13.232-28.248,24.992-44.293,35.023L341.718,497.229z"
                                        />
                                        <path
                                            style={{ fill: "#FFCE00" }}
                                            d="M31.37,379.188c-7.01-12.718-12.964-26.113-17.696-39.813l-2.112-8.059l299.691-208.592
                                    l44.425,33.319L35.712,387.042L31.37,379.188z"
                                        />
                                        <path
                                            style={{ fill: "#CD2900" }}
                                            d="M382.579,250.216c-15.713-16.41-94.094-100.753-94.094-149.704C288.485,45.089,333.575,0,388.997,0
                                    s100.512,45.089,100.512,100.512c0,48.918-78.382,133.287-94.095,149.704l0,0C391.917,253.87,386.077,253.871,382.579,250.216
                                    L382.579,250.216z"
                                        />
                                        <path
                                            style={{ fill: "#891D00" }}
                                            d="M388.997,134.386c-24.803,0-44.98-20.178-44.98-44.98s20.178-44.98,44.98-44.98
                                    c24.803,0,44.98,20.178,44.98,44.98S413.8,134.386,388.997,134.386z"
                                        />
                                        <path
                                            style={{ fill: "#FFFFFF" }}
                                            d="M144.659,186.586c29.088,0,52.755-23.666,52.755-52.755c0-4.6-3.729-8.33-8.33-8.33h-33.319
                                    c-4.6,0-8.33,3.729-8.33,8.33c0,4.6,3.729,8.33,8.33,8.33h24.018c-3.769,15.901-18.088,27.766-35.125,27.766
                                    c-19.902,0-36.095-16.193-36.095-36.095s16.193-36.095,36.095-36.095c8.8,0,17.275,3.202,23.865,9.015
                                    c3.452,3.044,8.715,2.713,11.757-0.736c3.043-3.45,2.713-8.714-0.736-11.757c-9.636-8.5-22.025-13.181-34.886-13.181
                                    c-29.088,0-52.755,23.666-52.755,52.755S115.57,186.586,144.659,186.586z"
                                        />
                                    </svg>
                                </a>
                            </article>
                        </div>
                        <article className='footer-contact-info'>
                            <div className='item-contact'>
                                <CiMail />
                                <span>reservas@altosdeliguazuhotel.com</span>
                            </div>
                            {/* <div className='item-contact'>
                            <LiaMapMarkerAltSolid />
                            <span>Av. de los Trabajadores 100, N3370 Puerto Iguazú, Misiones</span>
                        </div> */}
                            <div className='item-contact'>
                                <GiSmartphone />
                                <span>+54 9 3757 45-2591</span>
                            </div>
                        </article>
                        <article className='footer-contact-info'
                        >
                            <h4>Agencias de Viajes</h4>
                            <div className='item-contact'>
                                <CiMail />
                                <span>comercial@altosdeliguazu.com</span>
                            </div>
                            {/* <div className='item-contact'>
                            <LiaMapMarkerAltSolid />
                            <span>Av. de los Trabajadores 100, N3370 Puerto Iguazú, Misiones</span>
                        </div> */}
                            <div className='item-contact'>
                                <GiSmartphone />
                                <span>+54 9 3764239352</span>
                            </div>
                        </article>
                    </section>
                </section>
                <section className='footer-copyright-container'>
                    <span className='copy-client'>
                        Altos de Iguazú Hotel © 2025. Todos los derechos reservados.
                    </span>
                    <span className='copy-developer'>
                        Desarrollado por <a href="https://simplicitysoftware.site" target='_blank'>Simplicity Software</a>
                    </span>
                </section>
            </footer>
        </>
    )
}

export default Footer