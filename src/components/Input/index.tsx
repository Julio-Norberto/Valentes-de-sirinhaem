import './input.css'

type InputProps = {
  title?: string
  withTitle?: boolean
  type?: string
  width?: string
}

export const Input: React.FunctionComponent<InputProps> = ({ title, withTitle, type, width }: InputProps) => {

  const style: React.CSSProperties = {
    width
  }

  return (
    <div style={style} className='input-container' >
      {withTitle ? <h1 className='input-title'> {title} </h1> : null}
      <input className='input-box' type={type} />
    </div>
  )
}
