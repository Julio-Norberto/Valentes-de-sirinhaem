import { CampaignEditionCard } from '../../components/CampaignEditionCard'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import dogExemple from '../../assets/dog-example2.jpg'
import './campaignEdition.css'

export const CampaignEdition: React.FunctionComponent = () => {
    const mockPets = [
        {description: 'Campanha para tratamento da pata do Bob', image: dogExemple, id: '123'},
        {description: 'Campanha para tratamento da pata do Bob', image: dogExemple, id: '456'},
        {description: 'Campanha para tratamento da pata do Bob', image: dogExemple, id: '789'},
      ]

    return (
        <div className='container'>
          <header>
            <Menu />
          </header>
    
          <section className='content'>
            <h1>Todas as campanhas</h1>
    
            <div className='pets-content'>
            {
            mockPets.map((pet) => {
              return (
                <CampaignEditionCard 
                  key={pet.id}
                  image={pet.image}
                  description={pet.description}
                />
              )
            })
          }
            </div>
          </section>
          <Footer />
        </div>
      )
}