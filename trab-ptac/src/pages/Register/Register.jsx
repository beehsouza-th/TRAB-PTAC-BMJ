import { FaUser, FaLock} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styles from './register.module.css';

function Register() {
  return (
     <div className={styles.container}>
            <form>
                <h1>CADASTRO</h1>
                <div className={styles.input_field}>
                    <input type="email" placeholder='E-mail' />
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
