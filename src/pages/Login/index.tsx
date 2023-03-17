import { Bar } from '../../components/Bar'
import { Footer } from '../../components/Footer'
import './login.css'

export const Login: React.FunctionComponent = () => {
  return (
    <div className='login-container'>
      <Bar withMenu={true} />

      <div className='login-content'>
        <form>
          <h1>Faça login para ter <br /> acesso ao painel</h1>
          <div className='div-inputs'>
            <input name='login' id='login' type="text" placeholder='Digite o seu login...' />
          </div>

          <div className='div-inputs'>
            <input type="password" name='password' id='password' placeholder='Digite sua senha...' />
          </div>

          <input className='btn-submit' type="submit" value='Fazer Login' />
        </form>
      </div>

      <Footer />
    </div>
  )
}
