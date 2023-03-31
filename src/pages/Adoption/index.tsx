import { AdoptionPetCards } from '../../components/AdoptionPetCards'
import { Bar } from '../../components/Bar'
import { Footer } from '../../components/Footer'
import { useState, useEffect } from 'react'

import dog1 from '../../assets/dog-example1.jpg'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'

import './adoption.css'
import { ArrowClockwise } from '@phosphor-icons/react'

interface IPets {
  name: string
  age: string
  race: string
  weight: string
  imageUrl?: string
  id: string
}

export const Adoption: React.FunctionComponent = () => {
  useEffect(() => {
    async function handlePetsData() {
      const data: any = await getDocs(collection(db, "pets"))
      setPets(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
      setLoading(false)
    }

    handlePetsData()
  }, [])

  const [pets, setPets] = useState<IPets[]>()
  const [loading, setLoading] = useState(true)

    return (
        <div className='adoption-container'>
            <Bar withMenu={true} />
            <h1 className='adoption-page-title'>Adote um Pet e traga mais alegria para sua vida</h1>

            { loading ? (
              <div className='adoption-content-loading'>
                <ArrowClockwise className='icon-loading' size={32} />
              </div>
            ) : (
              <div className='adoption-content'>
                { pets?.map((pet) => (
                  <AdoptionPetCards key={pet.id} name={pet.name} age={pet.age} race={pet.race} weight={pet.weight} image={pet.imageUrl} />
                )) }
              </div>
            ) }
            <Footer />
        </div>
    )
}
