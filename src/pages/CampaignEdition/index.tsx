import { CampaignEditionCard } from '../../components/CampaignEditionCard'
import { Footer } from '../../components/Footer'
import { Bar } from '../../components/Bar'
import { useEffect, useState } from 'react'

// firebase
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'

import './campaignEdition.css'

interface ICampaignEdition {
  title: string
  id: string
  description: string
  imageUrl: any
}

export const CampaignEdition: React.FunctionComponent = () => {
  useEffect(() => {
    async function handlePetsData() {
      const data: any = await getDocs(collection(db, "campaigns"))
      setCampaigns(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
    }

    handlePetsData()
  }, [])

  const [campaigns, setCampaigns] = useState<ICampaignEdition[]>()
  const isEmptyCampaign = 0

  return (
    <div className='campaign-container'>
      <Bar withMenu={true} />

      <section className='campaign-main-content'>
        <h1>Todas as campanhas</h1>

        <div className={isEmptyCampaign ? 'campaign-no-content' : 'campaign-content'}>
          {
            isEmptyCampaign ? (
              <span>Desculpe, no momento não temos camapnhas cadastradas</span>
              ) : (
                campaigns?.map((campaign) => {
                  return (
                    <CampaignEditionCard
                    id={campaign.id}
                    key={campaign.id}
                    title={campaign.title}
                    image={campaign.imageUrl}
                    description={campaign.description}
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
