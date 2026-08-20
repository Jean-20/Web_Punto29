import './Ubicacion.css';

const locations = [
	{
		name: 'Sede 20',
		address: 'Av. Próceres de la Independencia, Alt. Paradero 20, San Juan de Lurigancho 15434',
		url: 'https://maps.app.goo.gl/e7eV1Cm6CzvskVBv7',
		mapQuery: 'Av. Próceres de la Independencia, Alt. Paradero 20, San Juan de Lurigancho 15434',
	},
	{
		name: 'Sede 17',
		address: 'Av. San Hilarión Este 123, San Juan de Lurigancho 15434',
		url: 'https://maps.app.goo.gl/GGRkk6F4SLNjwrkV8',
		mapQuery: 'Av. San Hilarión Este 123, San Juan de Lurigancho 15434',
	},
];

const PinIcon = () => (
	<svg viewBox="0 0 24 24" aria-hidden="true">
		<path d="M12 22s7-6.1 7-13a7 7 0 1 0-14 0c0 6.9 7 13 7 13Z" />
		<circle cx="12" cy="9" r="2.4" />
	</svg>
);

const ClockIcon = () => (
	<svg viewBox="0 0 24 24" aria-hidden="true">
		<circle cx="12" cy="12" r="8.5" />
		<path d="M12 7v5l3.4 2" />
	</svg>
);

const Ubicacion = () => (
	<section className="locations-section" aria-labelledby="locations-title">
		<div className="locations-content locations-heading">
			<p className="locations-eyebrow">Punto 29 restaurante</p>
			<h2 id="locations-title">Visítanos en nuestras sedes</h2>
		</div>

		<div className="locations-maps" aria-label="Mapas de nuestras sedes">
			{locations.map((location) => (
				<div className="locations-map" key={location.name}>
					<iframe
						title={`Mapa de ${location.name}`}
						src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&z=15&output=embed`}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
					<span className="map-label">{location.name}</span>
				</div>
			))}
		</div>

		<div className="locations-content">
			<div className="locations-grid">
				{locations.map((location) => (
					<article className="location-card" key={location.name}>
						<h3>{location.name}</h3>

						<div className="location-detail">
							<ClockIcon />
							<div>
								<h4>Abrimos todos los días</h4>
								<p>Lunes a domingo, de 9:00 a.m. a 11:00 p.m.</p>
							</div>
						</div>

						<div className="location-detail">
							<PinIcon />
							<div>
								<h4>Ubicación</h4>
								<p>{location.address}</p>
								<a href={location.url} target="_blank" rel="noopener noreferrer">
									Ver en Google Maps <span aria-hidden="true">↗</span>
								</a>
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
);

export default Ubicacion;
