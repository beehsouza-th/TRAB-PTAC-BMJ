import { Link } from "react-router-dom";
import { FaChair, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import styles from "./consultarMesas.module.css";

function ConsultarMesas() {
  const mesas = [
    { id: 1, lugares: 4, status: "livre" },
    { id: 2, lugares: 2, status: "ocupada" },
    { id: 3, lugares: 6, status: "livre" },
    { id: 4, lugares: 8, status: "ocupada" },
  ];

  return (
    <div className={styles.container}>
      
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

      <h1 className={styles.title}>Consultar Mesas</h1>

      <div className={styles.grid}>
        {mesas.map(mesa => (
          <div className={styles.card} key={mesa.id}>
            <FaChair className={styles.icon} />

            <h2>Mesa {mesa.id}</h2>
            <p>Lugares: <strong>{mesa.lugares}</strong></p>

            {mesa.status === "livre" ? (
              <span className={styles.livre}>
                <FaCheckCircle /> Disponível
              </span>
            ) : (
              <span className={styles.ocupada}>
                <FaTimesCircle /> Ocupada
              </span>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default ConsultarMesas;
