import './bar.css'
import { Menu } from '../Menu'

type BarProps = {
  title?: string
  withMenu?: boolean
}

export const Bar: React.FunctionComponent<BarProps> = ({title, withMenu}: BarProps) => {
  return (
    <div className='bar-container'>
      { withMenu ? <Menu /> : <h1> {title} </h1> }
    </div>
  )
}
