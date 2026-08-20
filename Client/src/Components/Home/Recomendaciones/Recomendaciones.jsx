import React from 'react';
import './Recomendaciones.css';

const dishes = [
	{ name: 'Ceviche clásico', description: 'Pescado fresco, leche de tigre y el toque de la casa.', image: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=1000&q=85' },
	{ name: 'Arroz con mariscos', description: 'Cremoso, intenso y preparado al momento.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85' },
	{ name: 'Lomo saltado', description: 'Un clásico peruano con todo el sabor de Punto 29.', image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85' },
];

const Recomendaciones = () => {
	return (
		<section className="recommendations-section" id="platos-recomendados">
			<div className="section-heading section-heading--split"><div><p className="section-kicker">Favoritos de la casa</p><h2>Platos recomendados</h2></div><a href="/carta">Ver carta completa <span>→</span></a></div>
			<div className="dish-grid">{dishes.map((dish) => <article className="dish-card" key={dish.name} style={{ backgroundImage: `url(${dish.image})` }}><div className="dish-card__info"><p>Recomendado</p><h3>{dish.name}</h3><span>{dish.description}</span></div></article>)}</div>
		</section>
	);
};

export default Recomendaciones;
