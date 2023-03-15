import { Footer } from '../../components/Footer'
import './petsEdition.css'
import dogExemple from '../../assets/dog-example2.jpg'
import { PetEditionCard } from '../../components/PetEditionCard'
import { Bar } from '../../components/Bar'

export const PetsEdition: React.FunctionComponent = () => {
  const mockPets = [
    {name: 'Sasão', image: dogExemple, id: '123'},
    {name: 'Sasão', image: dogExemple, id: '456'},
    {name: 'Sasão', image: dogExemple, id: '789'},
  ]

  return (
    <div className='container'>
      <Bar withMenu={true} />

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
