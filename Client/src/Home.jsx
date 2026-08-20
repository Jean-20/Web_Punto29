import React from 'react';
import AbautUs from '../Components/Home/AbautUs';
import Recomendaciones from '../Components/Home/Recomendaciones';
import Chefs from '../Components/Home/Chefs';
import HappyHour from '../Components/Home/HappyHour';
import Delivery from '../Components/Home/Delivery';
import Ubicacion from '../Components/Home/Ubicacion';
import ContactUs from '../Components/Home/ContactUs';
import Resena from '../Components/Home/Resena';
import WhatsAppButton from '../Components/Home/WhatsAppButton';

const Home = () => {
    return (
        <main>
            <AbautUs />
            <Recomendaciones />
            <Chefs />
            <HappyHour />
            <Delivery />
            <Ubicacion />
            <ContactUs />
            <Resena />

            {/* Botón flotante de WhatsApp */}
            <WhatsAppButton />
        </main>
    );
};

export default Home;