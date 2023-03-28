import { Footer } from '../../components/Footer'
import './petsEdition.css'
import { PetEditionCard } from '../../components/PetEditionCard'
import { Bar } from '../../components/Bar'
import { useState, useEffect } from 'react'

// firebase
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'

interface IPetsEdition {
  name: string
  imageUrl: any
  id: string
}

export const PetsEdition: React.FunctionComponent = () => {
  useEffect(() => {
    async function handlePetsData() {
      const data: any = await getDocs(collection(db, "pets"))
      setPets(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
    }

    handlePetsData()
  }, [])

  const [pets, setPets] = useState<IPetsEdition[]>()
  const isEmptyPets = 0

  return (
    <div className='pets-container'>
      <Bar withMenu={true} />

      <section className='pets-main-content'>
        <h1>Todos os pets</h1>

        <div className={isEmptyPets ? 'pets-no-content' : 'pets-content'}>
          {
            isEmptyPets ? (
              <span>Desculpe, no momento não temos pets cadastradas</span>
              ) : (
                pets?.map((pet) => {
                  return (
                    <PetEditionCard
                      id={pet.id}
                      key={pet.id}
                      image={pet.imageUrl}
                      name={pet.name}
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
