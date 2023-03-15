import { Button } from '../Button'

import './adoptionPetCards.css'

interface IAdoptionPetCards {
  image: any
  name: string
  age: string
  weight: string
  race: string
}

export const AdoptionPetCards: React.FunctionComponent<IAdoptionPetCards> = ({image, name, age, weight, race}: IAdoptionPetCards) => {
  return (
    <div className='adoption-card-container'>

      <div className='adoption-card-content'>

        <div className='card-image-adoption'>
          <img width={200} height={200} src={image} alt="" />
        </div>

        <div className='card-text-adoption'>
          <h2> {name} </h2>

          <p>Idade: {age} </p>
          <p>Peso: {weight} kg </p>
          <p>Raça: {race} </p>
        </div>

        <div className='card-adoption-button'>
          <Button paddingLeft='40px' paddingRight='40px' title='Quero adotar' destination='/adoption' />
        </div>

      </div>

    </div>
  )
}
