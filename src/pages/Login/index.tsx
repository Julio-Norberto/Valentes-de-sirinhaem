import { useState } from 'react'
import { Bar } from '../../components/Bar'
import { Footer } from '../../components/Footer'

import './login.css'

export const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  return (
    <div className='login-container'>
      <Bar withMenu={true} />

      <div className='login-content'>
        <form>
          <h1>Faça login para ter <br /> acesso ao painel</h1>
          <div className='div-inputs'>
            <input onChange={(e) => setEmail(e.target.value)} name='login' id='login' type="text" placeholder='Digite o seu login...' />
          </div>

          <div className='div-inputs'>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' id='password' placeholder='Digite sua senha...' />
          </div>

          {/* <input onSubmit={firebaseLogin} className='btn-submit' type="submit" value='Fazer Login' /> */}
          <button className='btn-submit'>Fazer Login</button>
        </form>
      </div>

      <Footer />
    </div>
  )
}
