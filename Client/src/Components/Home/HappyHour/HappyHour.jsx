import React from 'react';
import './HappyHour.css';

const HappyHour = () => {
	return (
		<section className="happy-section">
			<div className="happy-image" role="img" aria-label="Cócteles de Happy Hour" />
			<div className="happy-copy">
				<p className="section-kicker">De lunes a jueves</p>
				<h2>Happy <em>Hour</em></h2>
				<p className="happy-time">4:00 p.m. — 8:00 p.m.</p>
				<div className="happy-offers"><p><b>2 × 20</b><span>Mojito · Pisco Sour · Cuba Libre · Chilcano</span></p><p><b>2 × 25</b><span>Piña colada · Tinto de verano</span></p></div>
				<a href="/reserva">Reserva tu mesa <span>→</span></a>
			</div>
		</section>
	);
};

export default HappyHour;
