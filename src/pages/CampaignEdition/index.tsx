import { CampaignEditionCard } from '../../components/CampaignEditionCard'
import { Footer } from '../../components/Footer'
import dogExemple from '../../assets/dog-example2.jpg'
import './campaignEdition.css'
import { Bar } from '../../components/Bar'

export const CampaignEdition: React.FunctionComponent = () => {
    const mockCampaign = [
      {description: 'Campanha para tratamento da pata do Bob', image: dogExemple, id: '123'},
      {description: 'Campanha para tratamento da pata do Bob', image: dogExemple, id: '456'},
      {description: 'Campanha para tratamento da pata do Bob', image: dogExemple, id: '789'},
    ]

    const isEmptyCampaign = mockCampaign.length < 1

    return (
        <div className='container'>
          <Bar withMenu={true} />

          <section className='content'>
            <h1>Todas as campanhas</h1>
    
            <div className={isEmptyCampaign ? 'campaign-no-content' : 'campaign-content'}>
              {
                isEmptyCampaign ? (
                  <span>Desculpe, no momento não temos camapnhas cadastradas</span>
                  ) : (
                    mockCampaign.map((pet) => {
                      return (
                        <CampaignEditionCard 
                        key={pet.id}
                        image={pet.image}
                        description={pet.description}
                        />
                      )
                    })
                )
              }
            </div>
            
          </section>
          <Footer />
        </div>
      )
}