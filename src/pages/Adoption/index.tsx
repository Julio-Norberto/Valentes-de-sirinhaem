import { Bar } from '../../components/Bar'
import './adoption.css'

export const Adoption: React.FunctionComponent = () => {
    return (
        <div className='adoption-container'>
            <Bar withMenu={true} />
            <div className='adoption-content'>
              <h1>content</h1>
            </div>
        </div>
    )
}
