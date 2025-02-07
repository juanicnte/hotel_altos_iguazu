import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Spinner, Center, useToast } from '@chakra-ui/react'
import "../css/Contact.css"
import CustomToast from './CustomToast';
function Contact() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); // Activamos el estado de carga

        emailjs.sendForm(
            'service_lrlx5x9',
            'template_fe4147t',
            form.current,
            'aHosem01UCZ6JLpSY'
        )
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
                form.current.reset();
                setIsLoading(false);
                setTimeout(() => setMessageSent(false), 3000);
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
            });
    };

    return (
        <section className='contact-container'>
            <article className='contact-titles'>
                <h5 className='contact-title1'>
                    ¿Tienes alguna consulta?
                </h5>
                <h6 className='contact-title2'>
                    ¡Contactanos!
                    <br />
                    Estaremos encantados de ayudarte.
                </h6>
            </article>
            <article className='contact-form'>
                <form ref={form} onSubmit={sendEmail} className='contactForm-form'>
                    <div className='contactForm-input-container'>
                        <input type="text" name="user_name" placeholder='Nombre' required />
                    </div>
                    <div className='contactForm-input-container'>
                        <input type="email" name="user_email" placeholder='Email' required />
                    </div>
                    {/* <div className='contactForm-input-container'>
                        <select name="service" required>
                            <option value="" disabled selected>Selecciona un servicio</option>
                            <option value="diseño_web">Diseño Web</option>
                            <option value="community_manager">Community Manager</option>
                            <option value="seo">SEO</option>
                            <option value="marketing_digital">Marketing Digital</option>
                        </select>
                    </div> */}
                    <div className='contactForm-input-container'>
                        <input type="tel" name="user_phone" placeholder='Teléfono' required />
                    </div>
                    <div className='contactForm-input-container date-data'>
                        <label htmlFor="checkin" required style={{color: "rgb(151 151 151)", fontSize: "14px"}}>Fecha de Ingreso</label>
                        <input type="date" name="user_checkin" placeholder='Teléfono' required />
                    </div>
                    <div className='contactForm-input-container date-data'>
                        <label htmlFor="checkout" required style={{color: "rgb(151 151 151)", fontSize: "14px"}}>Fecha de Salida</label>
                        <input type="date" name="user_checkout" placeholder='Teléfono' required />
                    </div>
                    <div className='contactForm-textarea-container'>
                        <textarea name="message" placeholder='Mensaje' required></textarea>
                    </div>
                    <div className='contactForm-checkbox-privacy'>
                    <input type="checkbox" id="form-field-privacy"
                    required
                    />
                    <label htmlFor="form-field-privacy">
                        He leído y acepto la <a href="#">Política de Privacidad</a>
                    </label>
                    </div>
                    {!isLoading ? (
                        <div className='contactForm-input-container-submit'>
                            <input type="submit" value="Enviar" style={{ cursor: "pointer" }} />
                        </div>
                    ) : (
                        <Center h="full">
                            <Spinner color="#67a565" borderWidth="4px" />
                        </Center>
                    )}
                </form>
                {messageSent && (
                    <CustomToast
                        id="contactform-id"
                        title="Formulario enviado."
                        description="Nos contactaremos contigo lo antes posible."
                        status="success"
                        duration={9000}
                        position="top-right"
                    />
                )}
            </article>
        </section>
    )
}

export default Contact