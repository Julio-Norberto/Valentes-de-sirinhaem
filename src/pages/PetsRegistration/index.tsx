import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import './petsRegistration.css'

export const PetsRegistration: React.FunctionComponent = () => {
    return (
        <div>
            <div className='menu-pets-register-container'>
                <Menu />
            </div>
            <form className='pets-register-form'>
                <h1 className='pets-register-form-title'>
                    Cadastro de Pets
                </h1>

                <div className='pets-register-input-container'>
                    <h5 className='pets-register-input-title'>Nome do pet:</h5>
                    <input className='pets-register-input-box' type="text" />
                </div>

                <div className='pets-register-input-container'>
                    <h5 className='pets-register-input-title'>Idade:</h5>
                    <input className='pets-register-input-box' type="text" />
                </div>

                <div className='pets-register-input-container'>
                    <h5 className='pets-register-input-title'>Raça:</h5>
                    <input className='pets-register-input-box' type="text" />
                </div>

                <div className='pets-register-input-container'>
                    <h5 className='pets-register-input-title'>Peso (kg):</h5>
                    <input className='pets-register-input-box' type="text" />
                </div>

                <div className='img-button-box'>  
                    <Button title={'Enviar Imagem'} destination={''} paddingLeft={'12px'} paddingRight={'12px'} />
                </div>

                <div className='register-button-box'>
                    <Button title={'Cadastrar Pet'} destination={''} paddingLeft={'100px'} paddingRight={'100px'} />
                </div>
                
            </form>
            <Footer />
        </div>
    )
}