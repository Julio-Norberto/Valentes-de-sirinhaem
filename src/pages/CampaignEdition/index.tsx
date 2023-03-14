import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import './campaignEdition.css'

export const CampaignEdition: React.FunctionComponent = () => {
    return (
        <div className='container'>
          <header>
            <Menu />
          </header>
    
          <section className='content'>
            <h1>Todas as campanhas</h1>
    
            <div className='pets-content'>
              <div className='pets'></div>
              <div className='pets'></div>
              <div className='pets'></div>
            </div>
          </section>
          <Footer />
        </div>
      )
}