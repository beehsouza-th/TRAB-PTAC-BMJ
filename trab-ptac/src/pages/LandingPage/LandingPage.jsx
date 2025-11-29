import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="logo">Snoopy’s BMJ</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Registrar</Link>
          <Link to="/reservation">Reservar</Link>
          <Link to="/consultar-mesas">Consultar Mesas</Link>
          <Link to="/listar-reservas">Listar Reservas</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Bem-vindo ao Snoopy’s BMJ!</h2>
          <p>
            Onde o sabor encontra o conforto. Desfrute de pratos incríveis e um
            ambiente acolhedor para toda a família.
          </p>
          <Link to="/reservation" className="btn">
            Faça sua Reserva
          </Link>
        </div>
      </section>

      <section className="about">
        <h3>Sobre o Restaurante</h3>
        <p>
          No Snoopy’s BMJ, unimos boa comida e boa energia! Nosso cardápio é
          preparado com ingredientes frescos e selecionados, trazendo o melhor
          da culinária moderna com um toque artesanal.
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Snoopy’s BMJ | Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default LandingPage;
