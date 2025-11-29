import { FaUser, FaPhone, FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './reservation.module.css';

function Reservation() {
  return (
    <div className={styles.container}>

      {/* Cabeçalho igual ao Register.jsx */}
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

      <center>
        <form>
          <h1>Reservar Mesa</h1>

          <div className={styles.input_field}>
            <FaUser />
            <input
              type="text"
              placeholder="Nome Completo"
              required
            />
          </div>

          <div className={styles.input_field}>
            <FaUsers />
            <input
              type="number"
              placeholder="Número de Pessoas"
              min="1"
              required
            />
          </div>

          <div className={styles.input_field}>
            <FaCalendarAlt />
            <input
              type="date"
              required
            />
          </div>

          <div className={styles.input_field}>
            <FaClock />
            <input
              type="time"
              required
            />
          </div>

          <div className={styles.input_field}>
            <FaPhone />
            <input
              type="tel"
              placeholder="Telefone (WhatsApp)"
              required
            />
          </div>

          <div className={styles.input_field}>
            <textarea
              placeholder="Observações ou Pedidos Especiais (Ex: Cadeira para bebê, Aniversário...)"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className={styles.button}>
            Confirmar Reserva
          </button>
        </form>
      </center>
    </div>
  );
}

export default Reservation;
