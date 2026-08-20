import React from 'react';

const WhatsAppButton = () => {
	return (
		<a
			href="https://wa.me/1234567890"
			target="_blank"
			rel="noopener noreferrer"
			style={{ position: 'fixed', right: '1rem', bottom: '1rem', background: '#25D366', color: 'white', padding: '0.5rem 0.75rem', borderRadius: '999px', textDecoration: 'none' }}
		>
			WhatsApp
		</a>
	);
};

export default WhatsAppButton;
