import { useState } from 'react'
import { Bar } from '../../components/Bar'
import { Footer } from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

import { auth } from '../../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import './login.css'
import { ArrowClockwise } from '@phosphor-icons/react'

export const Login: React.FunctionComponent = () => {
  async function loginUser() {
    setLoading(true)

    if(!email || !password) {
      alert("Por favor preencha todos os campos!")
      setLoading(false)
      return
    }

    if(email && password)
    await signInWithEmailAndPassword(auth, email, password).then((userCredetial) => {
      const user = userCredetial.user
      setLoading(false)
      navigate('/panel')
    }).catch((error) => {
      const errorCode = error.code
      const errorMessamge = error.message
      setLoading(false)

      alert("Algo deu errado")
    })
  }

  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [loading, setLoading] = useState(false)
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
            <input className='input-bottom-btn' onChange={(e) => setPassword(e.target.value)} type="password" name='password' id='password' placeholder='Digite sua senha...' />
          </div>

        </form>
        <button onClick={loginUser} style={{ marginTop: '-100px' }} className='btn-submit'> {loading ? <ArrowClockwise className='icon-loading' size={28} /> : 'Fazer login'} </button>
      </div>

      <Footer />
    </div>
  )
}
