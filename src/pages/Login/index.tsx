import { useState } from 'react'
import { Bar } from '../../components/Bar'
import { Footer } from '../../components/Footer'

import { app } from '../../services/firebase/firebase-config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import './login.css'

export const Login: React.FunctionComponent = () => {
  const [email, setLogin] = useState<string>()
  const [password, setPassword] = useState<string>()

  function firebaseLogin() {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email!, password!)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className='login-container'>
      <Bar withMenu={true} />

      <div className='login-content'>
        <form>
          <h1>Faça login para ter <br /> acesso ao painel</h1>
          <div className='div-inputs'>
            <input onChange={(e: any) => setLogin(e.target.value)} name='login' id='login' type="text" placeholder='Digite o seu login...' />
          </div>

          <div className='div-inputs'>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' id='password' placeholder='Digite sua senha...' />
          </div>

          {/* <input onSubmit={firebaseLogin} className='btn-submit' type="submit" value='Fazer Login' /> */}
          <button onClick={firebaseLogin} className='btn-submit'>Fazer Login</button>
        </form>
      </div>

      <Footer />
    </div>
  )
}
