import { useState } from 'react'
import { Bar } from '../../components/Bar'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

import { auth } from '../../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import './login.css'

export const Login: React.FunctionComponent = () => {
  async function loginUser() {
    if(email && password)
    await signInWithEmailAndPassword(auth, email, password).then((userCredetial) => {
      const user = userCredetial.user
      navigate('/panel')
    }).catch((error) => {
      const errorCode = error.code
      const errorMessamge = error.message

      alert("Algo de errado")
    })
  }

  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const navigate = useNavigate()

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

        </form>
        <button onClick={loginUser} style={{ marginTop: '-100px' }} className='btn-submit'>Fazer Login</button>
      </div>

      <Footer />
    </div>
  )
}
