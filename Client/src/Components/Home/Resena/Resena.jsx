import React from 'react';
import './Resena.css';

const reviews = [
	{ quote: 'El ceviche estuvo increíble y la atención fue excelente.', author: 'María G.', rating: '★★★★★' },
	{ quote: 'Un ambiente genial para compartir y platos muy bien servidos.', author: 'Carlos R.', rating: '★★★★★' },
	{ quote: 'Volvería por el arroz con mariscos y los cócteles.', author: 'Andrea P.', rating: '★★★★★' },
];

const Resena = () => {
	return (
		<section className="reviews-section"><div className="section-heading"><p className="section-kicker">Lo que dicen de nosotros</p><h2>Reseñas de nuestros clientes</h2></div><div className="reviews-grid">{reviews.map((review) => <article className="review-card" key={review.author}><p className="review-stars">{review.rating}</p><blockquote>“{review.quote}”</blockquote><span>{review.author}</span></article>)}</div></section>
	);
};

export default Resena;
