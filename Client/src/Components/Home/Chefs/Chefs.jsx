import React from 'react';
import './Chefs.css';

const chefs = [
	{ name: 'Diego Salazar', specialty: 'Especialista en ceviches', experience: 'Más de 5 años creando sabores del mar.', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=85' },
	{ name: 'Valeria Ríos', specialty: 'Cocina peruana contemporánea', experience: 'Combina tradición, técnica y mucho sabor.', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85' },
	{ name: 'Marco Vega', specialty: 'Maestro de brasas', experience: 'Experto en platos de fondo y fusiones peruanas.', image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=900&q=85' },
];

const Chefs = () => {
	return (
		<section className="chefs-section">
			<div className="section-heading">
				<p className="section-kicker">El corazón de nuestra cocina</p>
				<h2>Conoce a nuestros chefs</h2>
			</div>
			<div className="chef-grid">
				{chefs.map((chef) => <article className="chef-card" key={chef.name} style={{ backgroundImage: `url(${chef.image})` }}>
					<div className="chef-card__info"><p>{chef.specialty}</p><h3>{chef.name}</h3><span>{chef.experience}</span></div>
				</article>)}
			</div>
		</section>
	);
};

export default Chefs;
