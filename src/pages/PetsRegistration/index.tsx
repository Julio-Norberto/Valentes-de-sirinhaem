import { Bar } from '../../components/Bar'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Menu } from '../../components/Menu'
import './petsRegistration.css'

export const PetsRegistration: React.FunctionComponent = () => {
    return (
        <div>
            <Bar withMenu={true} />
            
            <form className='pets-register-form'>
                <h1 className='pets-register-form-title'>
                    Cadastro de Pets
                </h1>
                
                <Input title={'Nome do pet:'} withTitle={true} width={'100%'} />
                <Input title={'Idade:'} withTitle={true} width={'100%'} />
                <Input title={'Raça:'} withTitle={true} width={'100%'} />
                <Input title={'Peso (kg):'} withTitle={true} width={'100%'} />

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