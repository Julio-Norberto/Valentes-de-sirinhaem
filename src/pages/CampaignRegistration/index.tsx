import { Bar } from '../../components/Bar'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import './campaignRegistration.css'

export const CampaignRegistration: React.FunctionComponent = () => {
    return (
        <div>
            <Bar withMenu={true} />
            
            <form className='campaign-register-form'>
                <h1 className='campaign-register-form-title'>
                    Cadastrar nova campanha
                </h1>
                
                <Input title={'Título da campanha:'} placeholder={'Cirurgia do bob...'} withTitle={true} width={'100%'} />

                <div className='campaign-textarea-container'>
                    <h1 className='campaign-textarea-title'>Descrição:</h1>
                    <textarea className='campaign-textarea-box' placeholder='O bob precisa de uma cirurgia no olho...'/>
                </div>

                <div className='campaign-img-button-box'>  
                    <Button title={'Enviar Imagem'} destination={''} paddingLeft={'12px'} paddingRight={'12px'} />
                </div>

                <div className='campaign-register-button-box'>
                    <Button title={'Criar campanha'} destination={''} paddingLeft={'70px'} paddingRight={'70px'} />
                </div>
                
            </form>
            <Footer />
        </div>
    )
}