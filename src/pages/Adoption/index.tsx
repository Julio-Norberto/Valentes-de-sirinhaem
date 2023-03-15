import { AdoptionPetCards } from '../../components/AdoptionPetCards'
import { Bar } from '../../components/Bar'

import dog1 from '../../assets/dog-example1.jpg'
import dog2 from '../../assets/dog-example2.jpg'
import dog3 from '../../assets/dog-example3.jpg'
import cat1 from '../../assets/cat-example1.jpg'
import cat2 from '../../assets/cat-example2.jpg'

import './adoption.css'
import { Footer } from '../../components/Footer'

export const Adoption: React.FunctionComponent = () => {
    return (
        <div className='adoption-container'>
            <Bar withMenu={true} />

            <div className='adoption-content'>
              <AdoptionPetCards image={dog1} name='Sansão' age='8 anos' weight='12' race='vira-lata' />
              <AdoptionPetCards image={dog2} name='Bob' age='3 anos' weight='4' race='vira-lata' />
              <AdoptionPetCards image={dog3} name='Sasha' age='2 meses' weight='3' race='vira-lata' />
              <AdoptionPetCards image={cat1} name='Carlos' age='5 anos' weight='4' race='vira-lata' />
              <AdoptionPetCards image={cat2} name='Bolinha' age='2 anos' weight='2' race='vira-lata' />
              <AdoptionPetCards image={dog1} name='Celly' age='1 ano' weight='3' race='vira-lata' />
            </div>
            <Footer />
        </div>
    )
}
