import { Link } from 'react-router-dom';
import './Carta.css';

const List = ({ title, items, note }) => <section className="paper-list"><h2>{title}</h2>{note && <small>{note}</small>}{items.map(([name, price]) => <p key={name}><span>{name}</span><b>S/ {price}</b></p>)}</section>;

const TurNoche = () => (
  <main className="paper-menu paper-menu--night">
    <header className="paper-menu__bar"><Link to="/carta">← Cambiar turno</Link><span>Punto 29 · Carta nocturna</span></header>
    <div className="paper-menu__title"><p>Punto 29</p><h1>Frituras nocturnas</h1><small>Turno noche · desde las 6:00 p.m.</small></div>
    <div className="paper-columns">
      <div className="paper-column">
        <List title="Broaster" note="Papas fritas + ensalada + cremas" items={[["Ala","17.00"],["Pierna","17.00"],["Entre pierna","17.00"],["Pecho","18.00"]]} />
        <List title="Salchi broaster" note="Hot dog ahumado + papas fritas + ensalada + cremas" items={[["Ala","18.00"],["Pierna","18.00"],["Entre pierna","18.00"],["Pecho","19.00"]]} />
        <List title="Mostrito" note="Chaufa + papas fritas + ensalada + cremas" items={[["Ala","21.00"],["Pierna","21.00"],["Entre pierna","21.00"],["Pecho","22.00"]]} />
      </div>
      <div className="paper-column paper-column--center">
        <List title="Salchipapa" note="Hot dog ahumado + papas + ensalada + cremas" items={[["Clásica","15.00"],["Salchi-huevo","17.00"],["A lo pobre","18.00"]]} />
        <List title="Hamburguesas" note="Carne artesanal + queso + papas + ensalada" items={[["Clásica","16.00"],["Pollo deshilachado","17.00"],["La infiel","18.00"],["A lo pobre","19.00"]]} />
        <List title="Alitas" items={[["BBQ","20.00"],["Búfalo","21.00"],["Acevichado","22.00"]]} />
        <List title="Promos" items={[["Trío nocturno (chaufa + salchipapas + alitas)","30.00"],["Alitas mixtas","25.00"],["Chaufa amazónico","30.00"],["Costillas a la BBQ","33.00"]]} />
      </div>
      <div className="paper-column">
        <List title="Platos carta nocturnos" items={[["Chaufa de pollo","18.00"],["Chaufa de carne","20.00"],["Aeropuerto de pollo","22.00"],["Aeropuerto mixto","24.00"],["Tallarín saltado carne","25.00"],["Tallarín saltado pollo","22.00"],["Pollo a la plancha","25.00"],["Lomo saltado","38.00"],["Lomo saltado a lo pobre","42.00"],["Tacu tacu con lomo saltado","38.00"],["Fetuccini con lomo saltado","38.00"],["Tallarín al pesto con pollo a la plancha","35.00"]]} />
        <div className="paper-split"><List title="Caldo de gallina" items={[["Con huevo","13.00"],["Con presa","15.00"],["Acevichado","17.00"]]} /><List title="Chicharrones" items={[["Chicharrón de pescado","37.00"],["Chicharrón de pota","30.00"],["Jalea mixta","48.00"]]} /></div>
        <List title="Ceviche noche" items={[["Dúo: ceviche + arroz con mariscos","35.00"],["Dúo: ceviche + chaufa de mariscos","35.00"],["Trío: arroz con mariscos + ceviche + chicharrón","45.00"],["Trío: chaufa de mariscos + ceviche + chicharrón","45.00"],["Marino: ceviche de pescado","35.00"],["Marino: arroz con mariscos","40.00"],["Marino: arroz chaufa de mariscos","40.00"]]} />
      </div>
    </div>
  </main>
);

export default TurNoche;
