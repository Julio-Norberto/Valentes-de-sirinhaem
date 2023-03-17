import { Bar } from '../../components/Bar'
import { CampaignPageCards } from '../../components/CampaignPageCards'
import { Footer } from '../../components/Footer'

import dog from '../../assets/dog-example1.jpg'

import './panel.css'

export const Panel: React.FunctionComponent = () => {
  return (
    <div className='painel-container'>
      <Bar withMenu={true} />
      <div style={{ marginTop: '64px', marginBottom: '124px' }} >
        <h1 style={{ fontSize: '2.2em' }} >Painel administrativo Valentes de Sirinhaém</h1>
      </div>

      <div className='painel-content'>
        <CampaignPageCards destination='/pets-register' title='Cadastrar novo pet para adoção' image={dog} buttonTitle='Adicionar' />
        <CampaignPageCards destination='/campaign-register' title='Criar nova campanha de doações' image={dog} buttonTitle='Criar campanha' />
        <CampaignPageCards destination='/pets-edition' title='Editar pets cadastrados' image={dog} buttonTitle='Editar' />
        <CampaignPageCards destination='/campaign-edition' title='Editar campanhas no ar' image={dog} buttonTitle='Editar campanhas' />
      </div>

      <Footer />
    </div>
  )
}
