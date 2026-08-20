import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Historia from './Pages/Historia';
import Carta from './Pages/Carta/Carta';
import TurDia from './Pages/Carta/TurDia';
import TurNoche from './Pages/Carta/TurNoche';
import Reserva from './Pages/Reserva';
import Trabajanosotros from './Pages/Trabajanosotros';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/carta/dia" element={<TurDia />} />
        <Route path="/carta/noche" element={<TurNoche />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/trabaja-con-nosotros" element={<Trabajanosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </Router>
  );
}

export default App;
