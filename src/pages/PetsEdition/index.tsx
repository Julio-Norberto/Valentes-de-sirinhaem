import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import './petsEdition.css'
import dogExemple from '../../assets/dog-example2.jpg'
import { PetEditionCard } from '../../components/PetEditionCard'

export const PetsEdition: React.FunctionComponent = () => {
  const mockPets = [
    {name: 'Sasão', image: dogExemple, id: '123'},
    {name: 'Sasão', image: dogExemple, id: '456'},
    {name: 'Sasão', image: dogExemple, id: '789'},
  ]

  return (
    <div className='container'>
      <header>
        <Menu />
      </header>

      <section className='content'>
        <h1>Todos os pets</h1>

        <div className='pets-content'>
          {
            mockPets.map((pet) => {
              return (
                <PetEditionCard 
                  key={pet.id}
                  image={pet.image}
                  name={pet.name}
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
