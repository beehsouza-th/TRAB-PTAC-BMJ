import { FaUser, FaLock} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styles from './login.module.css';


function Login() {
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
            <h1>LOGIN</h1>
            <div className={styles.input_field}>
                <input type="email" placeholder='E-mail' />
                <FaUser className={styles.icon} />
            </div>
             <div className={styles.input_field}>
                <input type="password" placeholder='Senha' />
                <FaLock className={styles.icon} />
            </div>

            <button>Entrar</button>
            
            <div className={styles.singnup}>
                <p>
                    Não tem uma conta ? <Link to="/register">Crie uma agora</Link>
                </p>
            </div>

        </form>
    </div>
  )
}

export default Login;
