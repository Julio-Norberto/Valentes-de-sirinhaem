import { Bar } from '../../components/Bar'
import { CampaignPageCards } from '../../components/CampaignPageCards'
import { Footer } from '../../components/Footer'

import dog1 from '../../assets/dog-example1.jpg'
import dog2 from '../../assets/dog-example2.jpg'
import cat1 from '../../assets/cat-example1.jpg'
import cat2 from '../../assets/cat-example2.jpg'

import './campaigns.css'

export const Campaign: React.FunctionComponent = () => {
  return (
    <div className='campaign-page-container'>
      <Bar withMenu={true} />
      <h1 className='title-page-campaign'>Você pode nos ajudar a salvar a vida deles</h1>

      <div className='campaign-page-content'>
        <CampaignPageCards name='Bob' title='Campanha para tratamento do Bob' image={dog1} description='O Bob acabou de ser resgatado com a patinha quebrada e precisa de tratamentos urgentes, ajuda a gente a tratar o bob?' />
        <CampaignPageCards name='Sansão' title='Campanha para tratamento do Sansão' image={dog2} description='O Sansão acabou de ser resgatado com a patinha quebrada e precisa de tratamentos urgentes, ajuda a gente a tratar o Sansão?' />
        <CampaignPageCards name='Cacau' title='Campanha para tratamento da Cacau' image={cat1} description='A Cacau acabou de ser resgatado com a patinha quebrada e precisa de tratamentos urgentes, ajuda a gente a tratar a Cacau' />
      </div>

      <Footer />
    </div>
  )
}
