import { FaUser, FaLock} from 'react-icons/fa'

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
                    <input type="checbox" />
                </label>

            </div>
            <button>Entrar</button>
        </form>
    </div>
  )
}

export default Login
