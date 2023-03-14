import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import './petsEdition.css'
import dogExemple from '../../assets/dog-example2.jpg'
import { PetEditionCard } from '../../components/PetEditionCard'

export const PetsEdition: React.FunctionComponent = () => {
  return (
    <div className='container'>
      <header>
        <Menu />
      </header>

      <section className='content'>
        <h1>Todos os pets</h1>

        <div className='pets-content'>
          <PetEditionCard image={dogExemple} name='Sasão' />
        </div>
      </section>
      <Footer />
    </div>
  )
}