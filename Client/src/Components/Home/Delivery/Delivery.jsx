import React from 'react';
import './Delivery.css';

const Delivery = () => {
	return (
		<section className="delivery-section">
			<div className="delivery-visual" aria-hidden="true"><span>29</span><div className="delivery-scooter">●────◉</div></div>
			<div className="delivery-copy"><p className="section-kicker">Punto 29 en tu casa</p><h2>Delivery todo<br /><em>San Juan de Lurigancho</em></h2><p>Disfruta tus platos favoritos donde estés, con el mismo sabor de nuestra cocina.</p><div><span>Horario de delivery</span><b>12:00 p.m. — 10:30 p.m.</b></div><a href="https://wa.me/51999999999" target="_blank" rel="noreferrer">Pedir por WhatsApp <span>→</span></a></div>
		</section>
	);
};

export default Delivery;
