import { FaUser, FaLock} from 'react-icons/fa'
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="container">
        <form>
            <h1>LOGIN</h1>
            <div>
                <input type="email" placeholder='E-mail' />
                <FaUser className='icon' />
            </div>
            <div>
                <input type="password" placeholder='Senha' />
                <FaLock className="icon" />
            </div>

            <div className='recall-forget'>
                <label htmlFor=''>
                    <input type="checkbox" />
                    lembre de mim
                </label>
                
            </div>

            <button>Entrar</button>
            
            <div className='singnup-link'>
                <p>
                    Não tem uma conta ? 
                </p>
            </div>

        </form>
    </div>
  )
}

export default Login
