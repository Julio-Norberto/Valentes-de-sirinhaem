import { CampaignEditionCard } from '../../components/CampaignEditionCard'
import { Footer } from '../../components/Footer'
import { Bar } from '../../components/Bar'
import { useEffect, useState } from 'react'

// firebase
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'

import './campaignEdition.css'
import { ArrowClockwise } from '@phosphor-icons/react'

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
      setLoading(false)
    }

    handlePetsData()
  }, [])

  const [campaigns, setCampaigns] = useState<ICampaignEdition[]>()
  const [loading, setLoading] = useState(true)

  return (
    <div className='campaign-container'>
      <Bar withMenu={true} />

      <section className='campaign-main-content'>
        <h1>Todas as campanhas</h1>

        <div className={loading ? 'campaign-no-content' : 'campaign-content'}>
          {
            loading ? (
              <div>
                <ArrowClockwise className='icon-loading' size={32} />
              </div>
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
