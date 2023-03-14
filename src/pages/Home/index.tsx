import './home.css'

import { Menu } from '../../components/Menu'
import { Bar } from '../../components/Bar'
import { SectionHomeCard } from '../../components/SectionHomeCard'
import { Button } from '../../components/Button'

import dogs from '../../assets/dogsHome.svg'
import adoptionImage from '../../assets/adoptionHome.png'
import dogPaw from '../../assets/Dogpaw-cuate.svg'
import adoptionImage2 from '../../assets/adoption.svg'
import dogracao from '../../assets/Dogracao.svg'
import { Footer } from '../../components/Footer'

export const Home: React.FunctionComponent = () => {
    return (
        <div className='home-container'>
          <Menu />

          <div className='home-content'>

            <div className='home-text'>
              <div>
                <h1>Valentes de <br /> Sirinhaém</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. A cumque unde cupiditate vero sunt! Voluptatem ipsa sunt sapiente beatae, harum deserunt incidunt doloremque et numquam, laboriosam inventore esse? Blanditiis, repellat?
                </p>
              </div>

              <Button title='Disponíveis para adoção' destination='/adoption' />
            </div>

            <div className='home-img'>
              <img src={dogs} alt="" />
            </div>

          </div>
          <Bar title='Você pode fazer a diferença nessa luta' />

          <SectionHomeCard
            image={adoptionImage}
            title='Adote um Pet!'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. A cumque unde cupiditate vero sunt! Voluptatem ipsa sunt sapiente beatae, harum deserunt incidunt doloremque et numquam, laboriosam inventore esse? Blanditiis, repellat?' buttonTitle='Disponíveis para adoção'
            direction='row-reverse'
            width='200px'
            display='flex'
            align='center'
            titleAlign='left'
            destiny='/adoption'
          />

          <SectionHomeCard
            image={dogPaw}
            title='Veja nossas campanhas!'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. A cumque unde cupiditate vero sunt! Voluptatem ipsa sunt sapiente beatae, harum deserunt incidunt doloremque et numquam, laboriosam inventore esse? Blanditiis, repellat?' buttonTitle='Ver campanhas'
            destiny='/campaign'
            right='60px'
            left='60px'
          />

          <SectionHomeCard
            image={adoptionImage2}
            title='Faça uma doação!'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. A cumque unde cupiditate vero sunt! Voluptatem ipsa sunt sapiente beatae, harum deserunt incidunt doloremque et numquam, laboriosam inventore esse? Blanditiis, repellat?' buttonTitle='Fazer doação'
            direction='row-reverse'
            width='200px'
            display='flex'
            align='center'
            titleAlign='left'
            destiny='/donations'
          />

          <Bar title='Ajuda a gente com um pouco de ração?' />

          <SectionHomeCard
            image={dogracao}
            title='Doe um pouco de ração'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. A cumque unde cupiditate vero sunt! Voluptatem ipsa sunt sapiente beatae, harum deserunt incidunt doloremque et numquam, laboriosam inventore esse? Blanditiis, repellat?' buttonTitle='Contato'
            destiny='/contact'
            left='80px'
            right='80px'
          />

          <Footer />

        </div>
    )
}
