import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Adoption } from '../pages/Adoption'
import { Campaign } from '../pages/Campaigns'
import { CampaignEdition } from '../pages/CampaignEdition'
import { CampaignRegistration } from '../pages/CampaignRegistration'
import { Contact } from '../pages/Contact'
import { Donations } from '../pages/Donations'
import { Login } from '../pages/Login'
import { Panel } from '../pages/Panel'
import { PetsEdition } from '../pages/PetsEdition'
import { PetsRegistration } from '../pages/PetsRegistration'

export const AppRoute = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/adoption' element={ <Adoption /> } />
            <Route path='/campaign' element={ <Campaign /> } />
            <Route path='/campaign-edition' element={ <CampaignEdition /> } />
            <Route path='/campaign-register' element={ <CampaignRegistration /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/donations' element={ <Donations /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/panel' element={ <Panel /> } />
            <Route path='/pets-edition' element={ <PetsEdition /> } />
            <Route path='/pets-register' element={ <PetsRegistration /> } />
        </Routes>
    )
}
