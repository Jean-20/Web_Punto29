import React from 'react';
import Header from '../Components/Header/Header';
import AbautUs from '../Components/Home/AbautUs/AbautUs';
import Recomendaciones from '../Components/Home/Recomendaciones/Recomendaciones';
import Chefs from '../Components/Home/Chefs/Chefs';
import HappyHour from '../Components/Home/HappyHour/HappyHour';
import Ubicacion from '../Components/Home/Ubicacion/Ubicacion';
import Delivery from '../Components/Home/Delivery/Delivery';
import ContactUs from '../Components/Home/ContactUs/ContactUs';
import Resena from '../Components/Home/Resena/Resena';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <AbautUs />
            <Recomendaciones />
            <Chefs />
            <HappyHour />
            <Delivery />
            <Ubicacion />
            <ContactUs />
            <Resena />
            <Footer />
        </>
    );
};

export default Home;
