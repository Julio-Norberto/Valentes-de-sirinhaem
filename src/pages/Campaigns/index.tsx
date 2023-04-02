import { Bar } from '../../components/Bar'
import { CampaignPageCards } from '../../components/CampaignPageCards'
import { Footer } from '../../components/Footer'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'

import { useEffect, useState } from 'react'

import './campaigns.css'
import { ArrowClockwise } from '@phosphor-icons/react'


interface ICampaigns {
  title: string
  description: string
  imageUrl: string
  id: string
}

export const Campaign: React.FunctionComponent = () => {

  useEffect(() => {
    async function handleCampaingData() {
      const data: any = await getDocs(collection(db, "campaigns"))
      setCampaigns(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
      setLoading(false)
    }

    handleCampaingData()
  }, [])

  const [campaigns, setCampaigns] = useState<ICampaigns[]>()
  const [loading, setLoading] = useState(true)

  return (
    <div className='campaign-page-container'>
      <Bar withMenu={true} />
      <h1 className='title-page-campaign'>Você pode nos ajudar a salvar a vida deles</h1>

      { loading ? (
        <div className='campaign-page-content-loading' >
          <ArrowClockwise className='icon-loading' size={32} />
        </div>
      ) : campaigns?.length ? (
        (
          <div className='campaign-page-content'>
            { campaigns?.map((campaign) => (
              <CampaignPageCards key={campaign.id} title={campaign.title} description={campaign.description} image={campaign.imageUrl} destination='#' />
            )) }
          </div>
        )
      ) : (
        <div className='campaign-page-content-no-campaign' >
          <h3 style={{ textAlign: 'center' }} >Não temos campanhas ativas no momento :)</h3>
        </div>
      ) }

      <Footer />
    </div>
  )
}
