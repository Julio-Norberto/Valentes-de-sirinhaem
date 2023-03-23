import { AdoptionPetCards } from '../../components/AdoptionPetCards'
import { Bar } from '../../components/Bar'
import { Footer } from '../../components/Footer'
import { useState, useEffect } from 'react'

import dog1 from '../../assets/dog-example1.jpg'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'

import './adoption.css'

interface IPets {
  name: string
  age: string
  race: string
  weight: string
  imageUrl?: string
}

export const Adoption: React.FunctionComponent = () => {
  useEffect(() => {
    async function handlePetsData() {
      const data: any = await getDocs(collection(db, "pets"))
      setPets(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
    }

    handlePetsData()
  }, [])

  const [pets, setPets] = useState<IPets[]>()

    return (
        <div className='adoption-container'>
            <Bar withMenu={true} />
            <h1 className='adoption-page-title'>Adote um Pet e traga mais alegria para sua vida</h1>

            <div className='adoption-content'>
              { pets?.map((pet) => (
                <AdoptionPetCards name={pet.name} age={pet.age} race={pet.race} weight={pet.weight} image={pet.imageUrl} />
              )) }
            </div>
            <Footer />
        </div>
    )
}
