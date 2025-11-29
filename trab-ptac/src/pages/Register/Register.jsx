import { FaUser, FaLock} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styles from './register.module.css';

function Register() {
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
            <form>
                <h1>Realizar Cadastro</h1>
                <div className={styles.input_field}>
                    <input type="name" placeholder='Nome' />
                    <FaUser className={styles.icon} />
                </div>
                <div className={styles.input_field}>
                    <input type="email" placeholder='E-mail' />
                    <FaUser className={styles.icon} />
                </div>
                <div className={styles.input_field}>
                    <input type="contato" placeholder='Contato' />
                    <FaUser className={styles.icon} />
                </div>
                <div className={styles.input_field}>
                    <input type="cidade" placeholder='cidade/UF' />
                    <FaUser className={styles.icon} />
                </div>
                 <div className={styles.input_field}>
                    <input type="password" placeholder='Senha' />
                    <FaLock className={styles.icon} />
                </div>
    
                <button>Cadastrar</button>
                
               <div className={styles.cadas}>
                   <p>
                     Já possui uma conta? <Link to="/login">Login</Link>
                  </p>
              </div>
    
            </form>
        </div>
  )
}

export default Register
