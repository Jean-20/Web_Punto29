import { Link } from 'react-router-dom';
import './Carta.css';

const List = ({ title, items, note }) => (
  <section className="paper-list">
    <h2>{title}</h2>{note && <small>{note}</small>}
    {items.map(([name, price]) => <p key={name}><span>{name}</span><b>S/ {price}</b></p>)}
  </section>
);

const TurDia = () => (
  <main className="paper-menu paper-menu--day">
    <header className="paper-menu__bar"><Link to="/carta">← Cambiar turno</Link><span>Punto 29 · Carta de día</span></header>
    <div className="paper-menu__title"><p>Punto 29</p><h1>Sabores del mar y de la tierra</h1><small>Turno día · 11:00 a.m. a 6:00 p.m.</small></div>
    <div className="paper-columns">
      <div className="paper-column">
        <List title="Entradas frías" items={[["Leche de tigre","25.00"],["Leche de pantera","30.00"],["Causa de pulpa de cangrejo","36.00"],["Causa acevichada","35.00"],["Choritos a la chalaca","28.00"]]} />
        <List title="Frescura del mar" items={[["Ceviche de pescado","35.00"],["Ceviche mixto","43.00"],["Ceviche de conchas negras","42.00"],["Matrimonio (pescado + causa)","40.00"]]} />
        <List title="Concentrados (sopas)" items={[["Chupe de pescado","37.00"],["Sudado de pescado entero","37.00"],["Sudado de pescado filete","33.00"],["Parihuela pescado entero","40.00"],["Parihuela pescado filete","36.00"],["Chilcano acevichado","22.00"]]} />
        <List title="Postres" items={[["Pastel de chocolate","13.00"],["Crema volteada","12.00"],["Tres leches de vainilla","13.00"]]} />
      </div>
      <div className="paper-column paper-column--center">
        <List title="Dúos" items={[["Arroz con mariscos + ceviche","35.00"],["Arroz chaufa + ceviche","35.00"]]} />
        <List title="Tríos" items={[["Arroz con mariscos + ceviche + chicharrón de pota","45.00"],["Arroz chaufa + ceviche + chicharrón de pota","45.00"],["Causa + ceviche + chicharrón de pota","45.00"]]} />
        <List title="A lo peruano" items={[["Arroz con mariscos","40.00"],["Arroz chaufa de mariscos","40.00"],["Lomo saltado","38.00"],["Arroz con pato y huancaína","52.00"],["Fettuccini a la huancaína con lomo saltado","38.00"],["Tacu tacu con salsa de mariscos","38.00"],["Cabrito a la norteña","45.00"]]} />
        <div className="paper-quote">“Creemos que la comida fusión es una celebración de culturas y un acto de amor culinario”.</div>
      </div>
      <div className="paper-column">
        <div className="paper-split"><List title="Crocantes" items={[["Chicharrón de pescado","37.00"],["Jalea mixta","48.00"],["Chicharrón de pota","30.00"],["Pescado frito entero","42.00"],["Chicharrón de pollo","25.00"]]} /><List title="Guarniciones" items={[["Arroz","5.00"],["Papas fritas","7.00"],["Choclo","5.00"],["Chifle","5.00"],["Camote","5.00"],["Yuca frita","5.00"]]} /></div>
        <List title="Gaseosas y cervezas" items={[["Inka o Coca Cola 600 ml","6.00"],["Inka o Coca Cola 1 L","10.00"],["Inka o Coca Cola 1 1/2 L","12.00"],["Gordita","8.00"],["Agua","5.00"],["Cerveza Pilsen","13.00"],["Cerveza Cuzqueña","14.00"],["Cerveza personal","10.00"]]} />
        <List title="Bebidas" note="Cambio a frozen: 1 L S/ 9 · 1/2 L S/ 2" items={[["Limonada clásica","17.00"],["Maracuyá","18.00"],["Chicha","18.00"],["Maracumango","22.00"],["Limonada con hierba luisa","20.00"],["Limonada con menta","20.00"],["Limonada tropical","22.00"]]} />
      </div>
    </div>
  </main>
);

export default TurDia;
