import './home.css'

import { Menu } from '../../components/Menu'
import { Bar } from '../../components/Bar'
import { SectionHomeCard } from '../../components/SectionHomeCard'
import { Button } from '../../components/Button'

import dogs from '../../assets/dogsHome.svg'
import adoptionImage from '../../assets/adopt.svg'
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
                Bem-vindo à nossa ONG! Estamos dedicados a ajudar os animais de rua em nossa comunidade e trabalhamos incansavelmente para fornecer-lhes cuidados e atenção. Acreditamos que todo animal merece um lar amoroso e estamos comprometidos em ajudar a tornar isso uma realidade.
                </p>
              </div>

              <Button title='Disponíveis para adoção' destination='/adoption' />
            </div>

            <div className='home-img'>
              <img src={dogs} alt="" />
            </div>

          </div >
          <Bar title='Você pode fazer a diferença nessa luta' />

          <SectionHomeCard
            image={adoptionImage}
            title='Adote um Pet!'
            description='Você está pronto para uma nova aventura? Adote um pet e descubra um amor incondicional. Nós temos uma variedade de animais esperando por um lar amoroso. Dê a eles uma chance e torne-se seu herói para sempre.' buttonTitle='Disponíveis para adoção'
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
            description='Sua doação pode fornecer cuidados médicos, abrigo e alimento para aqueles que precisam. Junte-se a nós para garantir que esses animais tenham uma segunda chance na vida. Cada contribuição conta, juntos podemos ajudar a melhorar a vida desses animais.'
            buttonTitle='Ver campanhas'
            destiny='/campaign'
            right='60px'
            left='60px'
            titleAlign='center'
          />

          <SectionHomeCard
            image={adoptionImage2}
            title='Faça uma doação!'
            description='Cada contribuição faz uma grande diferença e nos ajuda a fornecer cuidados médicos, abrigo e alimentação para animais que precisam. Faça parte da nossa missão de ajudar esses animais necessitados e faça uma doação hoje. Juntos, podemos criar um futuro melhor para eles.'
            buttonTitle='Fazer doação'
            direction='row-reverse'
            width='200px'
            display='flex'
            align='center'
            titleAlign='left'
            destiny='/donations'
          />

          <div style={{ marginTop: '44px' }}>
            <Bar title='Ajuda a gente com um pouco de ração?' />

            <SectionHomeCard
              image={dogracao}
              title='Doe um pouco de ração'
              description='A doação de ração é uma maneira direta e significativa de ajudar os animais que atendemos. Muitos de nossos amigos peludos dependem das doações de ração para sobreviver, e sua contribuição pode ajudar a garantir que eles recebam a nutrição de que precisam. Se você quiser fazer uma doação de ração, entre em contato conosco para descobrir como você pode ajudar.'
              buttonTitle='Contato'
              destiny='/contact'
              left='80px'
              right='80px'
              titleAlign='center'
            />
          </div>

          <Footer />

        </div>
    )
}
