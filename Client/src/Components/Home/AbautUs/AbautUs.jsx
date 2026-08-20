import React from 'react';
import './AbautUs.css';

const AbautUs = () => {
	return (
		<section className="about-section">
			<div className="about-image" role="img" aria-label="Ambiente nocturno de Punto 29" />
			<div className="about-copy">
				<p className="section-kicker">Nuestra esencia</p>
				<h2>Sabores que<br /><em>nos representan.</em></h2>
				<p>Punto 29 nace para reunir el sabor peruano, el mar y los mejores momentos alrededor de una mesa.</p>
				<p>Una experiencia cercana, generosa y hecha para volver.</p>
				<a href="#platos-recomendados">Conoce nuestra selección <span>→</span></a>
			</div>
		</section>
	);
};

export default AbautUs;
