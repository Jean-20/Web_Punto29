import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
	return (
		<section className="contact-section">
			<div className="contact-panel"><p className="section-kicker">Estamos para atenderte</p><h2>Contáctanos</h2><p>Déjanos tu mensaje y pronto nos comunicaremos contigo.</p><div className="contact-info"><span>Reservas y consultas</span><a href="tel:+51940118772">+51 940 118 772</a><a href="mailto:contacto@punto29.com">contacto@punto29.com</a></div></div>
			<form className="contact-form"><label>Nombre<input type="text" name="nombre" placeholder="Tu nombre" /></label><label>Apellido<input type="text" name="apellido" placeholder="Tu apellido" /></label><label className="contact-form__full">Correo<input type="email" name="correo" placeholder="correo@ejemplo.com" /></label><label className="contact-form__full">¿Cómo podemos ayudarte?<textarea name="mensaje" placeholder="Escribe tu mensaje" rows="4" /></label><button type="button">Enviar mensaje <span>→</span></button></form>
		</section>
	);
};

export default ContactUs;
