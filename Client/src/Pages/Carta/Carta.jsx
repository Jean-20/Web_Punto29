import { Link } from 'react-router-dom';
import './Carta.css';

const Carta = () => {
	return (
		<main className="carta-selector">
			<div className="carta-selector__glow carta-selector__glow--one" />
			<div className="carta-selector__glow carta-selector__glow--two" />
			<div className="carta-selector__content">
				<div className="carta-heading">
					<p className="carta-kicker">Punto 29 restaurante</p>
					<h1>Una carta para<br /><em>cada momento</em></h1>
					<p className="carta-intro">Elige el turno y descubre una experiencia pensada para disfrutar sin prisa.</p>
				</div>

				<div className="turnos-actions">
					<Link className="turno-card turno-card--dia" to="/carta/dia">
						<span className="turno-card__number">01</span>
						<div><span className="turno-card__label">Desde las 11:00 a.m.</span><strong>Turno día</strong></div>
						<small>Ceviches, mariscos y clásicos peruanos <span>Explorar →</span></small>
					</Link>
					<Link className="turno-card turno-card--noche" to="/carta/noche">
						<span className="turno-card__number">02</span>
						<div><span className="turno-card__label">Desde las 6:00 p.m.</span><strong>Turno noche</strong></div>
						<small>Broaster, alitas, hamburguesas y más <span>Explorar →</span></small>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Carta;
