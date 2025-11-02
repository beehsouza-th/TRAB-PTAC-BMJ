import { FaUser, FaLock} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styles from './login.module.css';


function Login() {
  return (
    <div className={styles.container}>
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
                    Não tem uma conta ? <a href='#'> registrar</a> 
                </p>
            </div>

        </form>
    </div>
  )
}

export default Login;
