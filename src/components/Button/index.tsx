import { Link } from 'react-router-dom'
import './button.css'

type ButtonProps = {
  title: string
  display?: string
  width?: string
  align?: string
  destination: string
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingBottom?: string
}

export const Button:React.FunctionComponent<ButtonProps> = ({title, display, width, align, destination, paddingLeft, paddingRight, paddingBottom, paddingTop}: ButtonProps) => {
  const style: React.CSSProperties = {
    display,
    width,
    justifyContent: align,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingTop,
  }

  return (
    <div>
      <Link style={style} className='home-button' to={destination}> {title} </Link>
    </div>
  )
}
