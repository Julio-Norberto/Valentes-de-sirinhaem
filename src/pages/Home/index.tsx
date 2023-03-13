import './home.css'

import { Menu } from '../../components/Menu'
import { Link } from 'react-router-dom'
import { Bar } from '../../components/Bar'

import dogs from '../../assets/dogsHome.svg'

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

              <Link className='home-button' to='adoption' >Disponíveis para adoção</Link>
            </div>

            <div className='home-img'>
              <img src={dogs} alt="" />
            </div>

          </div>
          <Bar title='Você pode fazer a diferença nessa luta' />

        </div>
    )
}
