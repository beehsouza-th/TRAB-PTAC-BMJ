# TRAB-PTAC-BMJimport React from 'react'

function Login() {
  return (
    <div className='container'>
      <form>
        <h1> Login </h1>
        <div>
        <input type="email" placeholder='E-mail' />
        </div>
        <div>
        <input type="password" placeholder='Senha' />
        </div>
        <button>Entrar</button>
      </form>
    </div>
  )
}

export default Login
