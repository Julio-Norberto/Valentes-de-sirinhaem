import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import './petsEdition.css'

export const PetsEdition: React.FunctionComponent = () => {
  return (
    <div className='container'>
      <header>
        <Menu />
      </header>

      <section className='content'>
        <h1>Todos os pets</h1>
      </section>
      <Footer />
    </div>
  )
}