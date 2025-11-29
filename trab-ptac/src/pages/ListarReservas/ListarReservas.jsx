import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";
import styles from "./listarReservas.module.css";

function ListarReservas() {
  const reservas = [
    { nome: "João Silva", data: "2025-03-10", hora: "19:30", pessoas: 4 },
    { nome: "Maria Santos", data: "2025-03-11", hora: "20:00", pessoas: 2 },
    { nome: "Carlos Almeida", data: "2025-03-12", hora: "18:45", pessoas: 3 }
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

      <h1 className={styles.title}>Listar Reservas</h1>

      <div className={styles.list}>
        {reservas.map((r, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.left}>
              <FaUser className={styles.icon} />
              <strong>{r.nome}</strong>
            </div>

            <div className={styles.details}>
              <span><FaCalendarAlt /> {r.data}</span>
              <span><FaClock /> {r.hora}</span>
              <span><FaUsers /> {r.pessoas} pessoas</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ListarReservas;
